import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaTrash, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
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
    <TodoItem>
      <BtnContainer>
        <BtnItem onClick={() => onUpdateTodo(todo.id)}>
          {todo.isDone ? (
            <FaRegCheckCircle size="24" color="green" />
          ) : (
            <FaRegCircle size="24" />
          )}
        </BtnItem>
      </BtnContainer>
      <div style={{ flex: 3 }}>
        <h2>{todo.title}</h2>
        <p>{todo.content}</p>
        <DetailLink to={`/${todo.id}`} key={todo.id}>
          자세히보기
        </DetailLink>
      </div>
      <BtnContainer>
        <BtnItem onClick={() => onDeleteTodo(todo.id)}>
          <FaTrash size="24" />
        </BtnItem>
      </BtnContainer>
    </TodoItem>
  );
};

export default Todo;

const TodoItem = styled.div`
  margin: 1rem;
  background-color: white;
  border: 2px solid gray;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  border-radius: 5px;
  height: 200px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const BtnItem = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const DetailLink = styled(Link)`
  text-decoration: none;
`;
