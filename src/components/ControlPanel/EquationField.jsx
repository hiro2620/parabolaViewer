import React from 'react'
import { MathComponent } from 'mathjax-react'


export default function EquationField(props) {
  const { texString } = props
  return (
    <MathComponent tex={texString} />
  )
}

