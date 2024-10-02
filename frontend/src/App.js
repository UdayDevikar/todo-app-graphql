
import './App.css';
import { useQuery, gql } from '@apollo/client';

const getTodos = gql`
  query Examplequey {
    getTodos {
      id
      title
      completed
      user {
        name
        username
        email
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(getTodos);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <h1>todo app</h1>
      <table>
        <th>title</th>
        <th>id</th>
        <th>completed</th>
        <th>author name</th>
        <th>username</th>
        <th>email</th>
      {data.getTodos?.map((todo, index) => (
        <tr key={index}>
          <td>{todo?.title}</td>
          <td>{todo?.id}</td>
          <td>{todo.completed ? "Completed" : "Not Completed"}</td>
          <td>{todo?.user?.name}</td>
          <td>{todo?.user?.username}</td>
          <td>{todo?.user?.email}</td>
        </tr>
      ))}
    </table>
    </>

  );
}

export default App;
