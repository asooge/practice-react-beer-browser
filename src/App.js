import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home.js'

const Dashboard = () => (
  <div>
    <h3>Dashboard</h3>
    <p>This is separate route.</p>
  </div>
)

const App = () => (
  <div>
    <Route path="/" component ={Home} />

    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </div>
)

export default App
