import React from 'react'
import {
  Form
} from 'react-bootstrap'

function orgRound(value, base) {
  // base: digits to be rounded e.g. 0.1
  return Math.round(value * base) / base;
}

export default function RangeInput(props) {
  const { letter, funcParams, maxInputValue } = props
  const { a, b, c } = funcParams

  const convInputToValue = v => (v - 50) / (100 / (maxInputValue * 2))
  const convValueToInput = v => (v + maxInputValue) * 100 / (maxInputValue * 2)

  const value = (() => {
    if (letter === 'p') return -b / (2 * a)
    if (letter === 'q') return c - (b ** 2) / (4 * a)
    return Number(funcParams[letter])
  })()

  const handleSliderChange = e => {
    // console.log(convInputToValue(e.target.value))
    const value = convInputToValue(e.target.value)
    commitValueChange(value)
  }

  const handleNumberFormChange = e => {
    commitValueChange(e.target.value)
  }

  const commitValueChange = value => {
    props.handleChange((() => {
      if (letter === 'p') return ({
        b: Number(-2 * a * value),
        c: Number(a * (value ** 2) + c - (b ** 2) / (4 * a)),
      })

      if (letter === 'q') return ({
        c: Number(a * (-b / (2 * a)) ** 2 + value),
      })
      return { [letter]: Number(value) }
    })())
  }

  return (
    <Form style={{ width: '100%', marginBottom: 30 }}>
      <Form.Group>
        <Form.Label style={{ fontFamily: 'serif', fontSize: 20, color: '#333' }}>
          {letter}
        </Form.Label>
        <Form.Control
          value={orgRound(value, 100)}
          onChange={handleNumberFormChange}
          type="number"
          style={{ display: 'inline-block', width: '7rem', marginLeft: 20 }}
        />
        <Form.Control
          type="range"
          onChange={handleSliderChange}
          // value={inputValue}
          value={convValueToInput(value)}
          style={{ color: 'black' }}
        />
      </Form.Group>
    </Form>
  )
}
