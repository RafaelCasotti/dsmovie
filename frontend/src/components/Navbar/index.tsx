import {ReactComponent as GithubIcon} from 'assets/img/Github.svg.svg';
import './styles.css';

function Navbar(){

    return (
        <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
        <h1>DSMovie</h1>
        <a href="https://github.com/RafaelCasotti" title="Github" target="_blank" rel="noopener noreferrer">
          <div className='dsmovie-contact-container' style={{ textDecoration: 'none' }}><GithubIcon />
          </div>
        </a>
        </div>
      </nav>
    </header>
    )
}

export default Navbar;