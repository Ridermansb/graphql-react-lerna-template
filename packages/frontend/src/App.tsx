import {useEffect} from 'react'
import {useQuery, gql} from 'urql'
import './index.css'

interface TodosQuery {
    id: number
    completed: string
    title: string
    userId: number
}

const todosQueryDocument = /* GraphQL */ gql`
    query Todos {
        todos {
            id
            completed
            title
            userId
        }
    }
`

function App() {
    const [result] = useQuery<TodosQuery>({query: todosQueryDocument})
    return (
        <div className="mt-10">
            <header className="mx-20">
                <h1 className="text-3xl font-bold underline">
                    Hello GraphQL + React!
                </h1>
                {result.fetching ? <p>Loading...</p> : <p>{result.data.todos.length} tasks loaded</p>}
            </header>
        </div>
    )
}

export default App
