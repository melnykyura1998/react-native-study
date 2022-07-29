import React from 'react';
import {View,Button, TextInput,StyleSheet} from "react-native";


export const AddTodo = ({adTodo}) => {
    const pressTodo = () => {

    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title = {'add'} onPress={pressTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    block:{
        flexDirection:'row',
        justifyContent:'',
        alignItems:'center',

    },
    input:{
        borderStyle:'solid',
        borderBottomColor:'black',
        borderBottomWidth:'2',
        width:'70%'
    }
})