import React, { Component } from 'react'
import SearchMovies from './SearchMovies'
import './App.css'

class App extends Component{
  render(){
    return (
      <div className='container'>
          <h1 className='title'>React Movie Search</h1>
          <SearchMovies />
      </div>
    )
  }
}

export default App