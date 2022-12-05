import './Footer.css'
import { about, } from '../../portfolio'

const Footer = () => (
  <footer className='footer'>
    Made with 🤎 by Bhor sharma;
    <a
      href={about.social.github}
      className='link footer__link'
    >
      {about.name}
    </a>
  </footer>
)

export default Footer
