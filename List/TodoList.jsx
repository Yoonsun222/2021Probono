import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, AsyncStorage } from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';
import TaskModal from './TaskModal';

export default class TodoList extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('@todo:state').then((state) => {
      this.setState(JSON.parse(state));
    });
  }

  state = {
    todos: [],
    showModal: false,
  };

  save = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          show={() => {
            this.setState({ showModal: true });
          }}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                keyExtractor={(id, index) => {
                  return id + '${index}';
                }}
                remove={() => {
                  this.setState(
                    {
                      todos: this.state.todos.filter((_, i) => i !== index),
                    },
                    this.save
                  );
                }}
                toggle={() => {
                  const newTodos = [...this.state.todos];
                  newTodos[index].done = !newTodos[index].done;
                  this.setState({ todos: newTodos }, this.save);
                }}
              />
            );
          }}
        />
        <TaskModal
          isVisible={this.state.showModal}
          add={(title) => {
            this.setState(
              {
                todos: this.state.todos.concat({
                  title: title,
                  done: false,
                }),
                showModal: false,
              },
              this.save
            );
          }}
          hide={() => {
            this.setState({ showModal: false });
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
