import React from 'react'
import LaptopNg from '../laptopng'
import CozaStore from '../cozastore'

const Projects = () => {
  return (
    <div id="projects">
      <h3>Some of my work</h3>
      <div className="project-card-container">
        <a href="https://laptopng.herokuapp.com" className="project-card">
          <LaptopNg />
          <div className="desc">
            <em>
              Online laptop e-commerce store built with <b>React.js</b>,{' '}
              <b>Node.js</b> and <b>express.js.</b>
            </em>
          </div>
        </a>
        <a href="https://github.com/ECJ222/Coza-Store" className="project-card">
          <CozaStore />
          <div className="desc">
            <em>
              Online clothing e-commerce store with guest checkout build with{' '}
              <b>Python</b> and <b>Django</b>
            </em>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects
