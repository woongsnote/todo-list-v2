import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <hr />
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
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;
