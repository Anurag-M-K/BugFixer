import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
<div class=" spinner">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default Spinner