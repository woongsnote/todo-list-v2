import { useState } from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const AddForm = () => {
  const id = nextId("todo-");

  const dispatch = useDispatch();

  const initialState = { id: 0, title: "", content: "", isDone: false };

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;

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
      <AddContainer>
        <AddBtn>
          <FaPlus size="16" color="white" />
        </AddBtn>
      </AddContainer>
    </FormContainer>
  );
};

export default AddForm;

const FormContainer = styled.form`
  margin: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const InputItem = styled.input`
  font-size: 20px;
  margin: 0.4rem;
`;

const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const AddBtn = styled.button`
  width: 64px;
  border: 1px solid skyblue;
  background-color: skyblue;
  border-radius: 5px;
`;
