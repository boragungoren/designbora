import React from 'react'

import { Button } from 'designbora'
import 'designbora/dist/index.css'

const App = () => {
  const buttons = ['Primary', 'Default', 'Dashed', 'Text', 'Link']
  return (
    <>
      {buttons.map((button) => {
        return <Button type={button} />
      })}
    </>
  )
}

export default App
