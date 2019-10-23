import App from 'next/app';
import React from 'react';
import '../sass/main.scss';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
