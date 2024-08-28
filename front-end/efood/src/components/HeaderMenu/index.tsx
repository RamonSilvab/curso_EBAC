import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import imgHeader from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'
import { Banner, Container, Imagem, NavPage } from './styles'

const HeaderCardapio = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${imgHeader})` }}>
      <Container className="container">
        <Link to="/">
          <NavPage>Restaurantes</NavPage>
        </Link>
        <h1>
          <img src={logo} alt="logo do restaurant" />
        </h1>
        <NavPage>0 produto(s) no carrinho</NavPage>
      </Container>
    </Imagem>
    <Banner src={apresentacao} alt="apresentacao" />
  </>
)

export default HeaderCardapio
