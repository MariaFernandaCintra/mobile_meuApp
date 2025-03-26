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
import {Ionicons} from '@expo/vector-icons'


export default function Login({navigation}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword:false
  });

  async function handleLogin() {
    await api.postLogin(user).then(
      (response) => {
        //console.log(response.data.message);
        Alert.alert("OK", response.data.message);
        navigation.navigate("Home");
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        //console.log(error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
      />
      <View style={styles.passwordContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Senha"
        secureTextEntry={user.showPassword}
        value={user.password}
        onChangeText={(value) => {setUser({...user,'password':value})
        }}
      />
      <TouchableOpacity onPress={()=> setUser({...user,showPassword:!user.showPassword})}>
            <Ionicons name={user.showPassword?"eye-off":"eye"} size={24} color='#D9007B'/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E69EC3",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#AD4596",
    padding: 10,
    borderRadius: 5,
    color: "black",
  },
  passwordContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:"100%",
    borderBottomWidth:1,
    paddingRight:10,
},
passwordInput:{
    flex:1,
    height:'40',
},
});
