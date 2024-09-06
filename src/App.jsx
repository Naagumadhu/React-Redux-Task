import React from 'react'
import { Provider } from 'react-redux'
import HomePage from './components/HomePage'
import Store from './redux/Store'


function App() {
  return <>
      <h1 style={{textAlign:'center', fontFamily:'serif'}}>Products</h1>
      <Provider store={Store}>
        <HomePage/>
      </Provider>
        

  </>
}

export default App
