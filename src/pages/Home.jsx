import AddForm from "../components/AddForm";
import Layout from "../components/Layout";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Home = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <Layout>
      <AddForm />
      <TodoListContainer>
        <TodoList title={"Working"} todos={todos} status={false} />
        <TodoList title={"Done"} todos={todos} status={true} />
      </TodoListContainer>
    </Layout>
  );
};

export default Home;

const TodoListContainer = styled.div`
  display: flex;
  margin: 1.5rem 1rem;
  align-items: flex-start;
`;
