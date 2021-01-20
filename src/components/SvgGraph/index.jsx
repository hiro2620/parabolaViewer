import React from 'react'
import RuledLinePath from './RuledLinePath'
import ParabolaPath from './ParabolaPath'
import CountInput from '../CountInput'

import {
  Form
} from 'react-bootstrap'

const viewBoxSize = 200
const viewBoxPadding = 30


function CheckBox(props) {
  const { label, value } = props
  return (
    <span style={props.style}>
      <Form.Group>
        <Form.Check type="checkbox" label={label} onChange={props.handleChange} value={value} />
      </Form.Group>
    </span>
  )
}


export default function SvgGraph(props) {
  const { maxValue, funcParams } = props

  const [showControlPoints, setShowControlPoints] = React.useState(false)
  const [showVertexPoint, setShowVertexPoint] = React.useState(false)

  return (
    <section style={{ position: 'relative' }} >
      <svg
        viewBox={`0 0 ${viewBoxSize + viewBoxPadding} ${viewBoxSize + viewBoxPadding}`}
        xmlns="http://www.w3.org/2000/svg"
        // width={size}
        // height={size}
        style={{ width: '100%' }}
      >
        <RuledLinePath viewBoxSize={viewBoxSize} viewBoxPadding={viewBoxPadding} lineCount={maxValue} />
        <ParabolaPath
          viewBoxSize={viewBoxSize}
          viewBoxPadding={viewBoxPadding}
          maxValue={maxValue}
          funcParams={funcParams}
          showControlPoints={showControlPoints}
          showVertexPoint={showVertexPoint}
        />
      </svg>
      <section style={{ position: 'absolute', top: 0, right: 10 }}>
        <CheckBox
          label='制御点を表示'
          value={showControlPoints}
          handleChange={() => setShowControlPoints(!showControlPoints)}
        />  
        <CheckBox
          label='頂点を表示'
          value={showVertexPoint}
          handleChange={() => setShowVertexPoint(!showVertexPoint)}
        />
        <CountInput
          value={maxValue}
          setValue={props.setMaxValue}
          label='軸の範囲'
          allowZero={false}
        />
      </section>
    </section>
  )
}
