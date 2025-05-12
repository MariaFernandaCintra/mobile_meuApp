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
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';


export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword:true
  });

  async function saveToken(token) {
    await SecureStore.setItemAsync("token", token);
    console.log(token);
  }

  async function handleLogin() {
    await api.postLogin(user).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
        saveToken(response.data.token)
        navigation.navigate("Home");
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        console.log(error);
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
    borderBottomWidth: 1,
    paddingRight: 10,
    alignItems: "center",
    flexDirection: 'row'
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
