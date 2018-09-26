import React from 'react';

export default function Visibility({ isVisible, children }) {
  return isVisible ? React.Children.only(children) : null;
}
