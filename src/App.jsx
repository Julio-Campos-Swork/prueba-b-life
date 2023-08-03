import NavBar from './components/NavBar'
import Cuerpo from './components/Cuerpo'
import Modal from './components/Modal'
function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Cuerpo />
        <Modal />
      </div>
      <h6 style={{ color: 'white' }}>
        Created By Julio Campos for Web Browser, not optimized yet for Movil
      </h6>
    </>
  )
}

export default App
