import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default Form = ({ submitHandler }) => {
  const [Text, setText] = useState("");
  const changeHandler = val => {
    setText(val);
  };
  const onPress = () => {
    setText("");
    submitHandler(Text);
  };

  return (
    <View>
      <TextInput
        placeholder="new todos..."
        onChangeText={changeHandler}
        style={styles.input}
        value={Text}
      />
      <Button onPress={onPress} title="Add Todo" color="coral" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6
  }
});
