import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Personal blog by <Themed.a href="http://example.com/">Tinuade Adeleke</Themed.a>
      {` `}
      .
      <br />
      A seeker who thinks...
    </>
  )
}
