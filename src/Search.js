import React, { Fragment } from 'react'

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      search: 'beer'
    }
  }

  // getBeers = (event) => {
  //   event.preventDefault()
  //   const search = this.state.search
  //   axios(`${apiUrl}?beer_name=${search}`)
  // }
  //
  // handleChange = (event) => {
  //   this.setState({ search: event.target.value })
  // }

  render () {
    return (
      <Fragment>
        <form onSubmit={this.props.getBeers}>
          <input onChange={this.props.handleChange} placeholder="Search for beer..." />
          <button>Search</button>
        </form>
      </Fragment>
    )
  }
}

export default Search
