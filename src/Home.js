import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import Search from './Search.js'
import ShowBeers from './ShowBeers.js'

const Home = () => {
  return (
    <Fragment>
      <div style={ { backgroundColor: '#00cfa2' } }>
        <Link style={ { float: 'right' } } to='/favorites'>Favourites</Link>
        <Link style={ { float: 'right' } } to='/'>Home</Link>
        <h1>Beans Love Beers</h1>

      </div>
      <ShowBeers />

    </Fragment>
  )
}

export default Home
