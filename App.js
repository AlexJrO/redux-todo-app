import React from "react";

import {
  Provider
} from "react-redux";

import {
  View,
  Text
} from "react-native";

import store from "./redux/store";

import AddTodo from "./screens/AddTodo";
import TodoList from "./screens/TodoList";

export default function App() {

  return (

    // Provider gives Redux store
    // to the entire app
    <Provider store={store}>

      <View style={{ padding: 40 }}>

        <Text
          style={{
            fontSize: 28,
            marginBottom: 20
          }}
        >
          Redux Todo App
        </Text>

        <AddTodo />

        <TodoList />

      </View>

    </Provider>
  );
}