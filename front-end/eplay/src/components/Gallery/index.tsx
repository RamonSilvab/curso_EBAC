import Section from '../Section'
import hogwartsImg from '../../assets/images/hogwartsLegacy.png'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={hogwartsImg} alt="Hogwarts Legacy" />
      </Item>
      <Item>
        <img src={hogwartsImg} alt="Hogwarts Legacy" />
      </Item>
      <Item>
        <img src={hogwartsImg} alt="Hogwarts Legacy" />
      </Item>
      <Item>
        <img src={hogwartsImg} alt="Hogwarts Legacy" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
