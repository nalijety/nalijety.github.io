import React from 'react';
import ReactDOMServer from 'react-dom/server';

class DisplayMessage extends React.Component {
  render() {
    return <h2>Welcome to my page</h2>;
  }
}

const messageString = ReactDOMServer.renderToStaticMarkup(<DisplayMessage />);
alert(messageString);
