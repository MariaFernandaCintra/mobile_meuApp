import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";


export default function Home({ navigation }) {
  return (
    <View style={styles.header}>
       <Button
       title="Cadastrar Evento"
       onPress={() => navigation.navigate("Evento")}
       />

       <Button
       title="Cadastrar Ingresso"
       onPress={() => navigation.navigate("Ingresso")}
       />

       <Button style={styles.button}
       title="Cadastrar Organizador"
       onPress={() => navigation.navigate("Organizador")}
       />
    </View>
  )
}

const styles = StyleSheet.create({
header:{

},
button: {
backgroundColor: "#AD4596",
alignContent: "center",
},
});


