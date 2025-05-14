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
    <View style={styles.container}>
       <Button
       style={styles.button}
       title="Cadastrar Evento"
       onPress={() => navigation.navigate("Evento")}
       />

       <Button
       style={styles.button}
       title="Cadastrar Ingresso"
       onPress={() => navigation.navigate("Ingresso")}
       />

       <Button style={styles.button}
       title="Cadastrar Organizador"
       onPress={() => navigation.navigate("Organizador")}
       />

       <Button
        style={styles.button}
        title="Lista de Eventos"
        onPress={() => navigation.navigate("EventosScreen")}
       />
    </View>
  )
}

const styles = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: "#E69EC3",
},
button: {
marginTop: 20,
backgroundColor: "pink",
alignContent: "center",
},
});


