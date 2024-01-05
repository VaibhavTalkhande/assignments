import { useState } from 'react'
import Card from './components/Card';
import Form from './components/Form';

import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <h1>Card generator</h1>
      <Form/>
      <Card />
    </div>
    </>
  )
}

export default App
