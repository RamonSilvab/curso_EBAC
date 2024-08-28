class Restaurant {
  title: string
  infos: string[]
  avaliacao: number
  description: string
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    infos: string[],
    avaliacao: number,
    description: string,
    image: string
  ) {
    this.id = id
    this.title = title
    this.infos = infos
    this.avaliacao = avaliacao
    this.description = description
    this.image = image
  }
}

export default Restaurant
