import { Component } from "react";
import styled from "styled-components";

export default class App extends Component {
  render() {
    const StyledDiv = styled.div`
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

    return <StyledDiv>Hi there</StyledDiv>;
  }
}
