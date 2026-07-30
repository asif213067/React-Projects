// import React from 'react'
import './App.css'

import Accordion from "./components/01.accordion/Accordion"
import RandomColor from './components/02.random-color-generate/RandomColor'
import StarRating from './components/03.star-rating/StarRating'

const App = () => {
  return (
    <div className="app">
      <section className="project">

        <h2 className="project-title">
          Accordion Component
        </h2>

        <Accordion />

      </section>

      <section className="project">

        <h2 className="project-title">
          Random Color Generator
        </h2>

        <RandomColor />

      </section>

      <section className="project">

        <h2 className="project-title">
          Star Rating System
        </h2>

        <StarRating noOfStars={10} />

      </section>
    </div>
  )
}

export default App