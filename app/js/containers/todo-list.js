import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo, deleteTodo, completeTodo} from '../actions/index';
import uuid from 'node-uuid';

// List
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import Checkbox from 'material-ui/lib/checkbox';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';

// Input field
import TextField from 'material-ui/lib/text-field';


const styles = {
    height: 500,
    overflowY: 'auto'
}

const TODO_FILTERS = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: todo => !todo.completed,
  SHOW_COMPLETED: todo => todo.completed
}

class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { filter: TODO_FILTERS.SHOW_ALL }

    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    localStorage.setItem('todos', JSON.stringify(nextProps.todoItems));
  }

  handleSubmit(e) {
    if (e.which === 13) {
      // Dispatch props
      this.props.addTodo({todoItem: e.target.value, id: uuid.v4(), completed: false});
      // Reset input.
      e.target.value = '';
    }
  }
  
  handleDelete(id) {
    this.props.deleteTodo(id);
  }

  handleComplete(id) {
    this.props.completeTodo(id);
  }

  handleCompleteStyle(bool) {
    if(bool){
      return {color: "green", textDecoration: "line-through"};
    }
  }

    renderList() {
      if (this.props.todoItems != null) {
        let shownTodoList = this.props.todoItems.filter(this.state.filter);
        return shownTodoList.map((item) => {
            return(   
              <div key={item.id}>
                <ListItem
                  className="list-group-item"
                  style={this.handleCompleteStyle(item.completed)}
                  primaryText={item.todoItem} 
                  leftCheckbox={
                      <Checkbox 
                          checked={item.completed} 
                          onCheck={() => this.handleComplete(item.id)}
                      />
                  }
                  rightIconButton={
                      <IconButton 
                      onTouchTap={() => this.handleDelete(item.id)} >
                          <NavigationClose />
                      </IconButton>
                  }
                />
                <Divider />
              </div>
            );
        });
      }
    }

  render() {
    return (
      <div>
        <Tabs>
          <Tab
            icon={<FontIcon className="material-icons">assignment</FontIcon>}
            label="All"
            onActive={ () => {
              this.setState({filter: TODO_FILTERS.SHOW_ALL});} 
            }
          />
          <Tab
            icon={<FontIcon className="material-icons">alarm</FontIcon>}
            label="Active"
            onActive={() => {
              this.setState({filter: TODO_FILTERS.SHOW_ACTIVE});}
          }
          />
          <Tab
            icon={<FontIcon className="material-icons">delete</FontIcon>}
            label="Completed"
            onActive={ () => {
              this.setState({filter: TODO_FILTERS.SHOW_COMPLETED});} 
          }
          />
        </Tabs>
        <TextField
          hintText="What needs to be done?"
          onKeyDown={this.handleSubmit.bind(this)}
        />
        <Divider />
        <List style={styles}>
          {
            this.renderList()
          }
        </List>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    todoItems: state.todoItems
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo, 
    deleteTodo,
    completeTodo 
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);