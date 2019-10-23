import Link from 'next/link';
import Page from '../layouts/Page';

// TODO: Query aqv2 to get a user count

export default () => (
  <Page>
    <section className="about">
      <div className="bio">
        <h2>My name is Ian Mitchell</h2>
        <p>
          I’m a software developer based out of Seattle, Washington. I focus
          primarily on full-stack web development. You can find my{' '}
          <Link href="/resume">
            <a>Résumé here</a>
          </Link>
          .
        </p>
      </div>
    </section>

    <div className="project-list">
      <div className="project">
        <h4>Current Project: Aquarius</h4>
        <p>
          <a href="https://github.com/IanMitchell/aquarius">Aquarius</a> is a
          chatbot I am developing for{' '}
          <a href="https://discordapp.com/">Discord</a>. This bot has taught me
          a lot - especially about accounting for all forms of user input. I've
          discovered just how evil my friends are - each time I release a new
          command they actively try to break it, forcing me to thoroughly think
          through edge cases and potential errors early on.
        </p>

        <p>
          Not everything I’ve done has worked well or stuck around, but this
          chatbot has been a fantastic playground to try new things with. I
          frequently use it as a platform to learn about Node.js technologies,
          patterns, and packages I want to try out.
        </p>

        <p>Aquarius is currently serving just over 2,100 users.</p>
      </div>
    </div>
  </Page>
);
