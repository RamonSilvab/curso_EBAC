import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  padding: 40px 0;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`

export const Texto = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 136px;

  @media (max-width: 567px) {
    margin-top: 64px;
  }
}
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
