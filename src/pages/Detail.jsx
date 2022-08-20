import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import { getTodo } from "../redux/modules/todos";
const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodo(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <DetailContainer>
        <DetailDialog>
          <DetailHeader>
            <p>ID: {todo.id}</p>
            <BackButton
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </BackButton>
          </DetailHeader>
          <ContentsContainer>
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
          </ContentsContainer>
          <DetailFooter>상태: {todo.isDone ? "완료" : "진행중"}</DetailFooter>
        </DetailDialog>
      </DetailContainer>
    </Layout>
  );
};

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
`;

const DetailDialog = styled.div`
  width: 600px;
  height: 480px;
  border: 2px solid #eee;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  height: 60px;
`;

const BackButton = styled.button`
  background-color: #fff;
  border-radius: 12px;
  width: 120px;
  height: 32px;
  border: 1px solid #eee;
  &:hover {
    cursor: pointer;
    border: 2px solid #ddd;
  }
`;

const ContentsContainer = styled.div`
  padding: 2rem;
  height: 300px;
`;

const DetailFooter = styled.div`
  display: flex;
  bottom: 0;
  height: 48px;
  align-items: center;
  padding: 2rem;
`;
