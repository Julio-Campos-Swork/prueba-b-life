import React from 'react'

const Cuerpo = () => {
  return (
    <>
      <div className="body-container">
        <h1 className="title-body">
          Make it
          <br /> awesome.
        </h1>
        <p className="subtitle-body">
          &nbsp;AI trained to generate realistic 3D Objects
        </p>
        <button className="btn-get-started">
          Get started&nbsp;{' '}
          <img className="flecha" src="../assets/flecha.png" />
        </button>
      </div>
    </>
  )
}

export default Cuerpo
