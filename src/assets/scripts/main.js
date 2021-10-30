/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import React from 'react'
import { render } from 'react-dom'

import '../styles/main.scss'

const Home = () => (
  <div className="uoc-container">
    <picture>
      <source srcSet="./assets/images/logo.png?as=webp&width=350" type="image/webp" />
      <img src="./assets/images/logo.png?width=350" alt="test image" />
    </picture>
    <h1 className="uoc-title">Hello, UOC!</h1>
    <p>
      This is a starter template for the Advanced HTML and CSS Tools courses
      from the Master's Program in Multimedia Applications and the Master's
      Program in Web App and Website Development at the Universitat Oberta de
      Catalunya.
    </p>
  </div>
)

render(<Home />, document.getElementById('app'))