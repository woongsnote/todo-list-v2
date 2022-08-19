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
        <div>ID: {todo.id}</div>
        <br />
        {todo.title}
        <br />
        {todo.content}
        <div>상태: {todo.isDone ? "완료" : "진행중"}</div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          back
        </button>
      </DetailContainer>
    </Layout>
  );
};

export default Detail;

const DetailContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  border: 2px solid gray;
  margin: 20px auto;
`;
