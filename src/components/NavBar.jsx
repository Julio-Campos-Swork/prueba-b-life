const NavBar = () => {
  return (
    <header className="header">
      <h2>noon</h2>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Open sources</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
      <a className="btn" href="#">
        <button>Sign in</button>
      </a>
    </header>
  )
}
export default NavBar
