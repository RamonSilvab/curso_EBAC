import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import { Container } from '../Header/styles'
import imgHeader from '../../assets/images/fundo.png'
import { TextoFooter, FooterContainer, RedesSociais } from './styles'
import logoInstagram from '../../assets/images/instagram.svg'
import logoFacebook from '../../assets/images/facebook.svg'
import logoTwiter from '../../assets/images/twitte.svg'

const Footer = () => (
  <FooterContainer style={{ backgroundImage: `url(${imgHeader})` }}>
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="logo do restaurant" />
        </Link>
      </div>
      <RedesSociais>
        <li>
          <a href="#" target="_blank">
            <img src={logoInstagram} alt="logo Instagram" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src={logoFacebook} alt="logo Facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src={logoTwiter} alt="logo Twiter" />
          </a>
        </li>
      </RedesSociais>
      <TextoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </TextoFooter>
    </Container>
  </FooterContainer>
)

export default Footer
