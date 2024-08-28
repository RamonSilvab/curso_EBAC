import Dishes from '../../models/Dishes'
import DishesCard from '../DishesCard'
import { Container, ListDishes } from './styles'

type Props = {
  dishesapi: Dishes[]
}

const DishesList = ({ dishesapi }: Props) => (
  <Container>
    <div className="container">
      <ListDishes>
        {dishesapi.map((dishes) => (
          <DishesCard
            key={dishes.id}
            image={dishes.image}
            title={dishes.title}
            description={dishes.description}
          />
        ))}
      </ListDishes>
    </div>
  </Container>
)

export default DishesList
