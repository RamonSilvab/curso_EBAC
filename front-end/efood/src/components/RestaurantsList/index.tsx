import { RestaurantCard } from '../RestaurantCard'
import { Container, List } from './styles'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            title={restaurant.title}
            avaliacao={restaurant.avaliacao}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
