import React from 'react'
import ReactDOM from 'react-dom/client'
import Champions from "./component/Champions"
import Container from './component/Container'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Champions/>
    </Container>
  </React.StrictMode>,
)
