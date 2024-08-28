import styled from 'styled-components'
import { Imagem, Texto } from '../Header/styles'

export const TextoFooter = styled.p`
  ${Texto} {
    font-size 10px;
    font-weight: 400;
  }
`
export const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px;
  ${Imagem}
`
export const RedesSociais = styled.ul`
  display: flex;
  justify-content: center;

  li {
    padding: 32px 4px 80px;
  }
`
