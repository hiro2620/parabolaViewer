import React from 'react'
import {
  ButtonGroup,
  Form,
  Button
} from 'react-bootstrap'
import { BiPlus } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'

export default function countInput(props) {

  const { value, allowZero, label } = props

  const add = () => {
    props.setValue(value + 1)
  }

  const subtract = () => {
    if (allowZero || value > 1) {
      props.setValue(value - 1)
    }
  }

  return (
    <Form.Group>
      <Form.Label style={{ display: 'block' }}>{label}</Form.Label>
      <ButtonGroup>
        <Button variant="secondary" onClick={subtract}>
          <BiMinus />
        </Button>
        <Form.Control
          type="text"
          aria-label={label}
          style={{ maxWidth: '3rem' }}
          value={value}
          readOnly
        />
        <Button variant="secondary" onClick={add}>
          <BiPlus />
        </Button>
      </ButtonGroup>
    </Form.Group>
  )
}
