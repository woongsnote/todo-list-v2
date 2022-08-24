import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import { getTodo } from "../redux/modules/todos";

export default function Detail() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodo(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <Container>
        <Dialog>
          <Header>
            <p>ID: {todo.id}</p>
            <BackButton
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </BackButton>
          </Header>
          <ContentsContainer>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
          </ContentsContainer>
          <Footer>상태: {todo.isDone ? "완료" : "진행중"}</Footer>
        </Dialog>
      </Container>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled(Wrapper)`
  width: 100%;
  flex-direction: column;
  margin: 20px auto;
  justify-content: center;
`;

const Dialog = styled(Container)`
  width: 600px;
  height: 480px;
  border: 2px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

const Header = styled(Wrapper)`
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  height: 60px;
`;

const BackButton = styled.button`
  border: 2px solid #818181;
  color: #818181;
  &:hover {
    background-color: #818181;
  }
`;

const ContentsContainer = styled.div`
  padding: 16px;
  height: 300px;
`;

const Footer = styled(Wrapper)`
  bottom: 0;
  height: 48px;
  align-items: center;
  padding: 16px;
`;
