import styled from "styled-components";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin: 0.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Todo List</Title>
      <Title>React</Title>
    </HeaderContainer>
  );
};

export default Header;
