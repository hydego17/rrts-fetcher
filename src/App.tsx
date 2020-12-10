import styled from "styled-components";

export default function App() {
  return (
    <StyledApp>
      <h1>Test</h1>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
