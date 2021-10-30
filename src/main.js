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

import './assets/styles/main.scss'

import logo from './assets/images/logo.png'

import Header from "./assets/components/Header"
import Footer from "./assets/components/Footer"


const Home = () => (
  <>
    <Header />
    <div className="uoc-container">
      <picture>
        <img src={logo} className="uoc-logo" alt="test image" />
      </picture>
      <h1 className="uoc-title">Hello, UOC!</h1>
      <p>
        This is a starter template for the Advanced HTML and CSS Tools courses
        from the Master's Program in Multimedia Applications and the Master's
        Program in Web App and Website Development at the Universitat Oberta de
        Catalunya.
      </p>
    </div>
    <Footer />

  </>
)

render(<Home />, document.getElementById('app'))