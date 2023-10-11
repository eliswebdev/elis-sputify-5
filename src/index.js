import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";


// entry point for react, redux, react-router-dom and all 'root' entries
function render() {

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}

render();

// hmr webpack refresh
if (module.hot) {
  module.hot.accept('./App', () => render())
}