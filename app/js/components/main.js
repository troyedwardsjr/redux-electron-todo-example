import React from 'react';

import TodoList from '../containers/todo-list';
import TodoAppBar from '../containers/todo-appbar';

import Paper from 'material-ui/lib/paper';

const styles = {
    textAlign: 'center'
};

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles}>
        <Paper zDepth={2}>
          <TodoAppBar />
          <TodoList />
        </Paper>
      </div>
    );
  }
}

