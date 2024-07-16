import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendentes'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura do Gmail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Treinar',
    descricao: 'Fazer treino de perna',
    prioridade: 'importante',
    status: 'pendentes'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
