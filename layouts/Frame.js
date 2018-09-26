import React, { Fragment } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { runPrism } from '../lib/prism';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Social from '../components/Social';

// Run Syntax Highlighting on Page Transitions
// and remove scroll lock
Router.onRouteChangeComplete = () => {
  document.body.classList.remove('js-overflow');
  runPrism();
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      url: process.env.NOW_URL,
      menuActive: false,
    };
  }

  componentDidMount() {
    // Remove transition blocking
    document.body.classList.remove('preload');

    // Update URL
    this.setState({ url: window.document.location });
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.menuActive) {
      document.body.classList.remove('js-overflow');
      runPrism();
    } else {
      document.body.classList.add('js-overflow');
    }

    this.setState({ menuActive: !this.state.menuActive });
  }

  render () {
    const { menuActive, url } = this.state;

    return (
      <Fragment>
        <Head>
          <title>Ian Mitchell | Web Developer</title>

          <link rel="icon" href="static/favicons/favicon.ico" type="image/ico" />
          <link rel="icon" href="static/favicons/favicon-16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="static/favicons/favicon-32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="static/favicons/favicon-48.png" sizes="48x48" type="image/png" />
          <link rel="icon" href="static/favicons/favicon-62.png" sizes="62x62" type="image/png" />
          <link rel="icon" href="static/favicons/favicon-192.png" sizes="192x192" type="image/png" />
        </Head>

        <Social
          title="Ian Mitchell | Web Developer"
          image="/static/favicons/favicon-192.png"
          description="A web developer from Seattle, Washington"
          url={url}
        />

        <header className="logo">
          <Header menuActive={menuActive} onClick={this.handleClick} />
          <Navigation menuActive={menuActive} />
        </header>

        { this.props.children }

        <Footer />
      </Fragment>
    );
  }
}
