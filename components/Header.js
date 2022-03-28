import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Todo List ReactNative Example
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor : 'black',
  },
  title: {
    color: '#FF6F00',
 
    fontSize: 40,
 
    fontStyle: 'italic',
 
    fontWeight: 'bold',
 
    lineHeight: 40,
 
    textAlign: 'center',
 
    textDecorationLine: 'underline',
    
    textShadowColor: '#D50000',
 
    fontFamily: 'sans-serif',
 
    textShadowRadius: 4,
 
    textShadowOffset: {width: 2, height: 2},
 
    textTransform: 'uppercase',
 
    textAlignVertical : 'top',
    
  },
});

export default Header;