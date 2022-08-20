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
          <FaPlus size="28" />
        </AddBtn>
      </AddContainer>
    </FormContainer>
  );
};

export default AddForm;

const FormContainer = styled.form`
  margin: 1rem;
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

const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const AddBtn = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid #3399ff;
  background-color: white;
  border-radius: 12px;
  color: #3399ff;
  &:hover {
    cursor: pointer;
    background-color: #3399ff;
    color: #fff;
  }
`;
