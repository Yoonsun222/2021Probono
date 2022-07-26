import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import DeleteButton from './DeleteButton';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const TodoItem = ({ title, done, remove, toggle }) => {
  return (
    <Swipeable renderRightActions={() => <DeleteButton onPress={remove} />}>
      <View style={styles.container}>
        <View style={styles.todo}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggle}
            style={done ? styles.done : styles.check}
          >
            <FontAwesome
              name="check"
              color={done ? '#FFFFFF' : 'pink'}
              size={14}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  title: {
    fontSize: 16,
    color: '#424242',
  },
  check: {
    borderWidth: 2,
    borderColor: 'pink',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 14,
  },
  done: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 14,
    backgroundColor: 'pink',
  },
});

export default TodoItem;
