# ianmitchell.io

This is the source code for my website. It uses React, MDX, and Next.js.

Use the following commands to run the website:

    $ yarn install
    $ yarn run build
    $ yarn run start

If you don't need the server you can instead run:

    $ yarn install
    $ yarn run dev

Which gives you access to hot reloading and other features. The server (located in `server.js`) only concerns itself with legacy route matching and serving up my static project files (the directories under `/projects`).
