import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

export default function App() {
  const [person, setPerson] = useState([
    { text: "Bye Coffee", key: "1" },
    { text: "Create an App", key: "2" },
    { text: "Play on the Switch", key: "3" }
  ]);

  const pressHandler = key => {
    setPerson(prevState => {
      return prevState.filter(p => p.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setPerson(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be 3 chars long", [
        { text: "Understood", onPress: () => console.log("Alert closed") }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={person}
              renderItem={({ item }) => (
                <TodoList item={item} pressHandler={pressHandler} />
              )}
            ></FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
