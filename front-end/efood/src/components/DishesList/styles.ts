import styled from 'styled-components'
import { cores } from '../../syles'

export const Container = styled.div`
  padding: 56px 0 120px;
  background-color: ${cores.pessegoClaro};
`
export const ListDishes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
