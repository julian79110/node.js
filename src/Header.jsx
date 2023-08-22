const Header = () => {

    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">REACT_PROJECT</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link active" href="">Iniciar Sesion</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link active" href="#">Registrar</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contactenos
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link active" href="#">Noticias</a>
      </li>
    </ul>
  </div>
</nav>
        </header>
    )
}
export default Header;