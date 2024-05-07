import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    item: {
      backgroundColor: '#D3D3D3',
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
      borderRadius:10
    },
    title: {
      fontSize: 32,
    },
  });

  export default styles;