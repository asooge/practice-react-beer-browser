import React from 'react'

const style = {
  beer: {
    border: 'solid gray 1px',
    borderRadius: '3px',
    width: '400px',
    height: '280px',
    display: 'flex',
    padding: '12px',
    overflow: 'scroll'
  },
  image: {
    height: '200px',
    margin: '12px'
  },
  name: {
    margin: 'auto'
  },
  info: {
    padding: '12px'
  },
  container: {
    display: 'block'
  },
  description: {
    overflow: 'scroll'
  }
}

const Beer = (props) => {
  return (
    <div style={style.container}>
      <div style={style.beer}>
        <img style={style.image} src={props.img} />
        <div stye={style.info}>
          <h6 style={style.name}>{props.name}</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Beer
