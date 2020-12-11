import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <li onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </li>
      );
    });
  }

  render() {
    return (
      <StyledApp>
        <div className="container">
          <button onClick={this.onButtonClick}>Fetch Todos!</button>

          {this.state.fetching ? <p>Loading...</p> : null}
          <ul>{this.renderList()}</ul>
        </div>
      </StyledApp>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

const StyledApp = styled.div`
  padding: 2rem;
  background-color: #282c34;
  min-height: 100vh;
  color: white;

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  button {
    border-radius: 2px;
    outline: 0;
    border: 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-family: inherit;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      padding: 0.5rem 0 0.5rem 0.5rem;

      &:hover {
        background: #252525;
        cursor: pointer;
      }
    }
  }
`;
