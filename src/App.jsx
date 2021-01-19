import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import Graph from './components/SvgGraph'
import ControlPanel from './components/ControlPanel'
import Header from './components/Header'

const defaultFuncParams = {
  a: 1,
  b: 0,
  c: 0
}

const maxValue = 10
const maxInputValue = 3

function App() {

  // const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [funcParams, setFuncParams] = useState(defaultFuncParams)

  // useEffect(() => {
  //   const handleResizeWindow = () => {
  //     setWindowSize(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handleResizeWindow)
  //   handleResizeWindow()
  //   return () => {
  //     window.removeEventListener('resize', handleResizeWindow)
  //   }
  // }, [])

  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: 70 }}>
        <Row>
          <Col xs={12} lg={4}>
            <section>
              <ControlPanel
                funcParams={funcParams}
                setFuncParams={setFuncParams}
                maxInputValue={maxInputValue}
              />
            </section>
          </Col>
          <Col xs={12} lg={8}>
            <Graph
              maxValue={maxValue}
              funcParams={funcParams}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
