import styled from 'styled-components'
import { cores } from '../../syles'

export const Container = styled.section`
  padding: 80px 0 120px;
  background-color: ${cores.pessegoClaro};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
`
