import AddForm from "../components/Form";
import Layout from "../components/Layout";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Home() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <Layout>
      <AddForm />
      <TodoListContainer>
        <TodoList title={"🔥 Working 🔥"} todos={todos} status={false} />
        <TodoList title={"⭐ Done ⭐"} todos={todos} status={true} />
      </TodoListContainer>
    </Layout>
  );
}

const TodoListContainer = styled.div`
  display: flex;
  margin: 1.5rem 1rem;
  align-items: flex-start;
`;
