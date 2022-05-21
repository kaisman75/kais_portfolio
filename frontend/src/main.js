import React from 'react'
import App from "./App"
import Context from './constants/Context'
const Main = () => {
  return (
    <Context>
        <App/>
    </Context>
  )
}

export default Main