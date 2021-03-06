import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  
  const Input = ({ addTodo }) => {
    const [todo, setTodo] = useState("");
  
    const handleBtnAdd = () => {
      if (todo !== "") {
        const newTodo = { name: todo, done: false };
        addTodo(newTodo);
        setTodo("");
      } else {
        alert("You must enter a todo name !");
      }
    };
  
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={todo}
          onChangeText={setTodo}
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleBtnAdd}>
          <Text style={styles.textButton}>EKLE</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      backgroundColor: "#AAAAAA",
    },
    input: {
      flex: 5,
      height: 50,
      backgroundColor: "white",
      fontSize: 20,
      padding: 10,
      margin: 10,
      borderRadius: 15,
    },
    button: {
      flex: 1,
      height: 50,
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#009688",
      borderRadius: 15,
    },
    textButton: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
  });

  export default Input;