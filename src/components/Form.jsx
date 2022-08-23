import { useState } from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

export default function Form() {
  const dispatch = useDispatch();

  const initialState = { id: "1", title: "", content: "", isDone: false };

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;

    const id = nextId("todo-");

    dispatch(addTodo({ ...todo, id }));

    setTodo(initialState);
  };

  return (
    <FormContainer onSubmit={onSubmitHandler}>
      <InputGroup>
        <label htmlFor="title">제목</label>
        <InputItem
          id="title"
          name="title"
          required
          type="text"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label htmlFor="content">내용</label>
        <InputItem
          id="content"
          name="content"
          required
          type="text"
          value={todo.content}
          onChange={onChangeHandler}
        />
      </InputGroup>

      <AddBtn color="#3399ff">추가하기</AddBtn>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  margin: 1.6rem;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const InputItem = styled.input`
  font-size: 24px;
  margin: 0.4rem;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 0 20px 0;
  height: 40px;
`;

const AddBtn = styled.button`
  align-self: center;
  border: 2px solid ${(props) => props.color || ""};
  color: ${(props) => props.color || ""};
  &:hover {
    background-color: ${(props) => props.color || ""};
  }
`;
