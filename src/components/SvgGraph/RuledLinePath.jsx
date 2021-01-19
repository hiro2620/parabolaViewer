import React from 'react'

const textFontSize = '10'

export default function RuledLinePath(props) {
  const { viewBoxSize, lineCount, viewBoxPadding } = props
  const lineInterval = (viewBoxSize / 2) / lineCount

  return (
    <>
      {/* x axis */}
      <path
        d={`M0 ${viewBoxSize / 2 + viewBoxPadding} h${viewBoxSize + viewBoxPadding / 2} l-5 2 l2 -2 l-2 -2 l5 2`}
        fill='gray'
        stroke='gray'
        strokeWidth='0.5'
      />
      <text
        x={`${viewBoxSize + viewBoxPadding / 2}`}
        y={`${viewBoxPadding + viewBoxSize / 2}`}
        dx={8}
        dy={3}
        fontFamily='serif'
        fontSize={textFontSize}
        strokeWidth='0'
        fill='gray'
      >
        x
      </text>
      {/* y axis */}
      <path
        d={`M${viewBoxSize / 2} ${viewBoxPadding / 2} l2 5 l-2 -2 l-2 2 l 2 -5 v${viewBoxSize + viewBoxPadding / 2}`}
        fill='gray'
        stroke='gray'
        strokeWidth='0.5'
      />
      <text
        x={`${viewBoxSize / 2}`}
        y={`${viewBoxPadding / 2}`}
        dx={-3}
        dy={-8}
        fontFamily='serif'
        fontSize={textFontSize}
        strokeWidth='0'
        fill='gray'
      >
        y
      </text>
      <text
        x={`${viewBoxSize / 2}`}
        y={`${viewBoxSize / 2 + viewBoxPadding}`}
        dx={2}
        dy={10}
        fontFamily='serif'
        fontSize={textFontSize}
        strokeWidth='0'
        fill='gray'
      >
        O
      </text>
      {/* horizontal ruled line */}
      {[...Array(lineCount * 2 + 1).keys()].map((v) =>
        <path
          d={`M0 ${lineInterval * v + viewBoxPadding} h200`}
          fill='none'
          stroke='gray'
          strokeWidth='0.15'
          key={v.toString()} />
      )}
      {/* vertical ruled line */}
      {[...Array(lineCount * 2 + 1).keys()].map((v) =>
        <path
          d={`M${lineInterval * v} ${viewBoxPadding} v200`}
          fill='none'
          stroke='gray'
          strokeWidth='0.15'
          key={v.toString()} />
      )}
    </>
  )
}
