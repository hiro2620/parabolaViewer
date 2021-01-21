import React from 'react'

const mainColor = '#263165'
const subColor = '#0075FF'


export default function ParabolaPath(props) {
  const { viewBoxSize, viewBoxPadding, maxValue, showControlPoints, showVertexPoint } = props
  const { a, b, c } = props.funcParams

  const convXPos = x => (viewBoxSize / (maxValue * 2)) * x + viewBoxSize / 2
  const convYPos = y => -(viewBoxSize / (maxValue * 2)) * y + viewBoxSize / 2

  const f = x => a * x ** 2 + b * x + c
  const fPrime = x => 2 * a * x + b

  const deltaX = maxValue * 2 / 3 // interval between start/end point and control points

  const ps = {
    x: convXPos(maxValue),
    y: convYPos(f(maxValue)),
  }

  const p1 = {
    x: convXPos(maxValue - deltaX),
    y: convYPos(f(maxValue) - fPrime(maxValue) * deltaX),
  }

  const p2 = {
    x: convXPos(-maxValue + deltaX),
    y: convYPos(f(-maxValue) + fPrime(-maxValue) * deltaX),
  }

  const pe = {
    x: convXPos(-maxValue),
    y: convYPos(f(-maxValue)),
  }

  return (
    <svg width={viewBoxSize} height={viewBoxSize} x={0} y={viewBoxPadding} >
      <path
        d={`M ${ps.x} ${ps.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${pe.x} ${pe.y}`}
        stroke={mainColor}
        fill="transparent"
      />

      {showControlPoints &&
        <>
          <circle cx={ps.x} cy={ps.y} r='2' fill={subColor} opacity={0.5} />
          <circle cx={p1.x} cy={p1.y} r='2' fill={subColor} opacity={0.5} />
          <path d={`M ${ps.x} ${ps.y} L${p1.x} ${p1.y}`} stroke={subColor} opacity={0.5} />
          <circle cx={p2.x} cy={p2.y} r='2' fill={subColor} opacity={0.5} />
          <circle cx={pe.x} cy={pe.y} r='2' fill={subColor} opacity={0.5} />
          <path d={`M ${pe.x} ${pe.y} L${p2.x} ${p2.y}`} stroke={subColor} opacity={0.5} />
        </>
      }
      {showVertexPoint && a !== 0 &&
        <rect
          x={convXPos(-b / (2 * a)) - 3}
          y={convYPos(f(-b / (2 * a))) - 3}
          width='6'
          height='6'
          fill={subColor}
          opacity={0.8}
        />
      }
    </svg>
  )
}
