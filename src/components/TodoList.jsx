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
  margin: 8px;
  border: 1px solid #eee;
  padding: 16px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;
