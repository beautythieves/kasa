/* create home page */
import React from 'react';
/* import header component */
import Header from '../components/header';
/* home page */
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Home</h1>
      </div>
    );
  }
}
