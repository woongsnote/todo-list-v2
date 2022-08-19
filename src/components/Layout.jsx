import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;

  padding: 0.8rem;
  border-radius: 15px;
  background-color: white;
`;
