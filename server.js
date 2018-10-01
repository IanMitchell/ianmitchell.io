const express = require('express');
const next = require('next');
const path = require('path');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
let host = `http://localhost:${port}`;

if (process.env.NOW_URL) {
  host = process.env.NOW_URL;
}

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /**
   * Projects
   */
  server.use('/projects', express.static('projects'));

  server.get('/pokemon', (request, response) => response.sendFile(
    path.join(__dirname, '/projects/pokemon/index.html')
  ));

  server.get('/resume', (request, response) => response.sendFile(
    path.join(__dirname, '/projects/resume/index.html')
  ));

  /**
   * Ghost / Jekyll Legacy
   */
  server.get(/^\/\d{4}\/\d{2}\/\d{2}\/.+\/?$/i, (request, response) => {
    const { pathname } = parse(request.url, true);
    const paths = pathname.split('/');

    return response.redirect(301, `${host}/blog/${paths[paths.length - 1]}`);
  });

  /**
   * Next.js
   */

  // Legacy Routes
  server.get('/what-i-use', (request, response) => {
    return app.render(request, response, '/tools');
  });

  server.get('*', (request, response) => {
    return handle(request, response)
  });

  server.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`> Ready on ${host}`);
  });
});
