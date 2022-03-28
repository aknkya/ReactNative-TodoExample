import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from 'react'

const toDoView = ({
  nameTodo,
  todoDone,
  updateTodoDone,
  indexTodo,
  deleteTodo,
}) => {
  const titleBtn = todoDone ? "YAPILDI" : "YAPILMADI";

  const styleBtnUpdate = todoDone
    ? [styles.updateBtn, styles.updateBtnYes]
    : [styles.updateBtn, styles.updateBtnNo];

  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity
        style={styleBtnUpdate}
        onPress={() => {
          updateTodoDone(indexTodo);
        }}
      >
        <Text style={styles.textUpdateBtn}>{titleBtn}</Text>
      </TouchableOpacity>
      <Text style={styles.nameTodo}>{nameTodo}</Text>
      <TouchableOpacity style={styles.deleteBtn}>
        <Text
          style={styles.textButton}
          onPress={() => {
            deleteTodo(indexTodo);
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    backgroundColor: "grey",
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 2,
  },
  nameTodo: {
    flex: 3,
    fontSize: 30,
    textAlign: "center",
    color: "white",
    fontWeight:'bold',
  },
  deleteBtn: {
    flex: 1,
    height: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4136",
    borderRadius: 10,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  updateBtn: {
    backgroundColor: "red",
    height: 40,
    margin: 5,
    borderRadius: 10,
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  textUpdateBtn: {
    color: "white",
  },
  updateBtnYes: {
    backgroundColor: "green",
  },
  updateBtnNo: {
    backgroundColor: "red",
  },
});

export default toDoView;