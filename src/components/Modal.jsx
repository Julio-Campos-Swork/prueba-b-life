import React from 'react'

const Modal = () => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">
            <img className="vector1" src="../assets/Group 2.png" />
            AI trained to generate realistic 3D objects
          </h3>
          <div>
            <button className="buton-header">
              <img className="vector" src="../assets/Vector.png" />
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="modal-list">
          <div>
            <div>
              <h5>
                <img className="vectorH" src="../assets/VectorStyle.png" />
                Style
              </h5>
            </div>
            <p className="modal-subtitle">Chose your style</p>
          </div>
          <div>
            <h5>
              <img className="vectorH" src="../assets/VectorMaterial.png" />
              Material
            </h5>
            <p className="modal-subtitle">Chose material</p>
          </div>
          <div>
            <h5>
              <img className="vectorH" src="../assets/VectorCreativity.png" />
              Creativity
            </h5>
            <p className="modal-subtitle">Chose High-level</p>
          </div>
          <div>
            <h5>
              <img className="vectorH" src="../assets/VectorIa.png" />
              AI model
            </h5>
            <p className="modal-subtitle">Midjourney 5.0</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
