import React from "react";

import {
  View,
  Text,
  Button,
  FlatList
} from "react-native";

import { connect } from "react-redux";

import { deleteTodo } from "../redux/actions";

function TodoList(props) {

  return (
    <View>

      <FlatList
        data={props.todos}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View>

            <Text>
              {item.text}
            </Text>

            <Button
              title="Delete"
              onPress={() =>
                props.deleteTodo(item.id)
              }
            />

          </View>

        )}
      />

    </View>
  );
}


// mapStateToProps
const mapStateToProps = (state) => ({
  todos: state.todos,
});


// connect component to Redux
export default connect(
  mapStateToProps,
  { deleteTodo }
)(TodoList);