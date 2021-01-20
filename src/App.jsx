import React, { useState } from 'react'
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

const defaultMaxValue = 10
const defaultMaxInputValue = 10

function App() {

  // const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [funcParams, setFuncParams] = useState(defaultFuncParams)
  const [maxValue, setMaxValue] = useState(defaultMaxValue)
  const [maxInputValue, setMaxInputValue] = useState(defaultMaxInputValue)

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
                setMaxInputValue={setMaxInputValue}
              />
            </section>
          </Col>
          <Col xs={12} lg={8}>
            <Graph
              maxValue={maxValue}
              setMaxValue={setMaxValue}
              funcParams={funcParams}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
