import React, { useState } from "react";

import {
  View,
  TextInput,
  Button
} from "react-native";

import { connect } from "react-redux";

import { addTodo } from "../redux/actions";

function AddTodo(props) {

  // local state ONLY for input
  const [text, setText] = useState("");


  const handleAdd = () => {

    if (text.trim() === "") {
      return;
    }

    props.addTodo({
      id: Date.now().toString(),
      text: text,
    });

    setText("");
  };


  return (
    <View>

      <TextInput
        placeholder="Type a task..."
        value={text}
        onChangeText={setText}
      />

      <Button
        title="Add Todo"
        onPress={handleAdd}
      />

    </View>
  );
}


// mapDispatchToProps
export default connect(
  null,
  { addTodo }
)(AddTodo);