import logo from '../../assets/images/logo.png'
import { Container, Imagem, Texto } from './styles'
import imgHeader from '../../assets/images/fundo.png'

export const Header = () => (
  <Imagem style={{ backgroundImage: `url(${imgHeader})` }}>
    <Container>
      <div>
        <h1>
          <img src={logo} alt="logo do restaurant" />
        </h1>
      </div>
      <Texto>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Texto>
    </Container>
  </Imagem>
)
