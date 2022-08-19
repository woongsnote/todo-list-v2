import styled from "styled-components";
import Todo from "../components/Todo";
const TodoList = ({ todos, title, status }) => {
  return (
    <Container>
      <Header>{title}</Header>
      {todos.map((todo) => {
        if (todo.isDone === status) {
          return <Todo key={todo.id} todo={todo} />;
        } else {
          return null;
        }
      })}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex: 1;
`;

const Header = styled.h2`
  margin: 1rem;
`;
