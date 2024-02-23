import React from 'react'

function Quote({ quote}) {
  return (
    <div className='quote'>{quote.text}</div>
  )
}

export default Quote