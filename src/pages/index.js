import React, { useState, useEffect } from 'react';
import Page from '../components/Page';

export default function Index() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    async function getUserCount() {
      const response = await fetch('https://aquarius.sh/shield/users');
      const data = await response.json();
      setUserCount(data.label);
    }

    getUserCount();
  }, []);

  return (
    <Page>
      <section className="about">
        <div className="bio">
          <h2>My name is Ian Mitchell</h2>
          <p>
            I’m a software developer based out of Seattle, Washington. I focus
            primarily on full-stack web development. You can find my{' '}
            <a href="/resume">Résumé here</a>.
          </p>
        </div>
      </section>

      <div className="project-list">
        <div className="project">
          <h4>Current Project: Aquarius</h4>
          <p>
            <a href="https://github.com/IanMitchell/aquarius">Aquarius</a> is a
            chatbot I am developing for{' '}
            <a href="https://discordapp.com/">Discord</a>. This bot has taught
            me a lot - especially about accounting for all forms of user input.
            I've discovered just how evil my friends are - each time I release a
            new command they actively try to break it, forcing me to thoroughly
            think through edge cases and potential errors early on.
          </p>

          <p>
            Not everything I’ve done has worked well or stuck around, but this
            chatbot has been a fantastic playground to try new things with. I
            frequently use it as a platform to learn about Node.js technologies,
            patterns, and packages I want to try out.
          </p>

          {userCount && <p>Aquarius is currently serving {userCount} users.</p>}
        </div>
      </div>
    </Page>
  );
}
