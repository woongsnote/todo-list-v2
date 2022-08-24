import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
const Todo = ({ id, title, content, isDone }) => {
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
        <TodoTitle>{title}</TodoTitle>
        <TodoContent>{content}</TodoContent>
      </ContentContainer>
      <BtnControlContainer>
        <DetailLink to={`/${id}`} key={id}>
          <StyledBtn color="#04a9eb">상세보기</StyledBtn>
        </DetailLink>

        <StyledBtn color="#2fce44" onClick={() => onUpdateTodo(id)}>
          {isDone ? "취소하기" : "완료하기"}
        </StyledBtn>
        <StyledBtn color="red" onClick={() => onDeleteTodo(id)}>
          삭제하기
        </StyledBtn>
      </BtnControlContainer>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  margin: 0.8rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
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

const BtnControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 1rem;
`;

const StyledBtn = styled.button`
  border: 2px solid ${(props) => props.color || ""};
  color: ${(props) => props.color || ""};
  &:hover {
    background-color: ${(props) => props.color || ""};
  }
`;

const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
