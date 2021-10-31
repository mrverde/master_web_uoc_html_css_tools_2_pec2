import React from 'react'
import { render } from 'react-dom'

import './assets/styles/main.scss'

import Router from "./assets/components/Router"
import Header from "./assets/components/Header"
import Footer from "./assets/components/Footer"


const Home = () => (
  <>
    <Router>
      <Header />
      <Footer />
    </Router>
  </>
)

render(<Home />, document.getElementById('app'))