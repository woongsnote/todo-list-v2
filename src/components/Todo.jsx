import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaTrashAlt, FaCheck, FaUndo } from "react-icons/fa";
import { deleteTodo, updateTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const onUpdateTodo = (id) => {
    dispatch(updateTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <TodoContainer>
      <ContentContainer>
        <TodoTitle>{todo.title}</TodoTitle>
        <TodoContent>{todo.content}</TodoContent>
        <DetailLink to={`/${todo.id}`} key={todo.id}>
          상세보기
        </DetailLink>
      </ContentContainer>
      <BtnControlContainer>
        <BtnItem onClick={() => onUpdateTodo(todo.id)}>
          {todo.isDone ? (
            <FaUndo size="24" color="red" />
          ) : (
            <FaCheck size="24" color="green" />
          )}
        </BtnItem>
        <BtnItem onClick={() => onDeleteTodo(todo.id)}>
          <FaTrashAlt size="24" color="#66b2ff" />
        </BtnItem>
      </BtnControlContainer>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  margin: 0.8rem;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

const BtnControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 1rem;
`;

const BtnItem = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  flex: 4;
`;

const TodoTitle = styled.h2`
  margin: 1rem;
`;

const TodoContent = styled.p`
  margin: 1rem;
`;

const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 1rem;
`;
