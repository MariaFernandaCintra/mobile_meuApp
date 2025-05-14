import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const DateTimePickerDefault = ({ type, buttonTitle, dateKey, setValue }) => {
  const [isDatePickerVisable, setDatePickerVisibility] = useState(false);

  const showDatePicker= ()=>{
    setDatePickerVisibility(true);
  }
  const hideDatePicker= ()=>{
    setDatePickerVisibility(false);
  }

  const handleConfirm = (date) => {
    if(type === "time"){
        const hour = date.getHours();
        const minute = date.getMinutes();
        const formattedTime = `${hour}:${minute}`;
        setValue((prevState)=> ({
            ...prevState, 
            [dateKey]:formattedTime
        }))
    } else{
        setValue((prevState)=> ({
            ...prevState, 
            [dateKey]:date
        }))
    }
    hideDatePicker();
  }
  
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isDatePickerVisable}
        mode={type}
        locale="pt_BR"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{ backgroundColor: "#fff" }}
        customPropsIOS={{ textColor: "#000" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#fff',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#000',
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default DateTimePickerDefault;
