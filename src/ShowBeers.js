import React, { Fragment } from 'react'
import Search from './Search.js'
import axios from 'axios'
import apiUrl from './apiConfig.js'
import Beer from './Beer.js'

const style = {
  container: {
    width: '100vw',
    display: 'flex',
    flexWrap: 'wrap'
  }
}

class ShowBeers extends React.Component {
  constructor () {
    super()
    this.state = {
      search: '',
      beers: []
    }
  }
  getBeers = (event) => {
    event.preventDefault()
    const search = this.state.search
    axios(`${apiUrl}?beer_name=${search}`)
      .then(res => {
        this.setState({ beers: res.data })
      })
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }

  render () {
    return (
      <Fragment>
        <Search getBeers={this.getBeers} handleChange={this.handleChange}/>
        <div style={style.container}>
          {this.state.beers.map(beer => {
            return (
              <Beer
                key={beer.id}
                name={beer.name}
                description={beer.description}
                img={beer.image_url}
              />)
          })}
        </div>
      </Fragment>
    )
  }
}

export default ShowBeers
