import styled from 'styled-components'
import { cores } from '../../syles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  position: relative;
  background-color: ${cores.branco};

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Img = styled.img`
  margin-bottom: -6px;
`

export const AvaliacaoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Avaliacao = styled.h3`
  padding-right: 8px;
`

export const Descricao = styled.p`
  padding: 16px 0;
  font-size: 14px;
  text-align: justify;
  height: 100%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid ${cores.vermelhoRosado};
  border-top: none;
  height: 181px;

  ${TagContainer} {
    width: 82px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
