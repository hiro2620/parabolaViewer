import React, { useState } from 'react'
import RangeInput from './RangeInput'
import EquationField from './EquationField'
import CountInput from '../CountInput'

function Wrap(props) {
  return (
    <section style={{ padding: '10px 20px', border: '3px solid #0075FF', borderRadius: 4, marginBottom: 10 }}>
      {props.children}
    </section>
  )
}

export default function ControlPanel(props) {

  const { funcParams, maxInputValue } = props

  const handleChange = (vals) => {
    // vals: e.g. {a:1, c:0}
    props.setFuncParams({
      ...funcParams,
      ...vals
    })
  }

  return (
    <>
      <Wrap>
        <EquationField texString={String.raw`y=ax^2+bx+c`} />
      </Wrap>
      <Wrap>
        {['a', 'b', 'c'].map(v =>
          <RangeInput
            letter={v}
            funcParams={funcParams}
            handleChange={handleChange}
            maxInputValue={maxInputValue}
            key={v}
          />
        )}
      </Wrap>
      <Wrap>
        <EquationField texString={String.raw`y=a(x-p)^2+q`} />
      </Wrap>
      <Wrap>
        {['a', 'p', 'q'].map(v =>
          <RangeInput
            letter={v}
            funcParams={funcParams}
            handleChange={handleChange}
            maxInputValue={maxInputValue}
            key={v}
          />
        )}
      </Wrap>
      <CountInput
        value={maxInputValue}
        setValue={props.setMaxInputValue}
        allowZero={false}
        label='スライダーの範囲'
      />
    </>
  )
}
