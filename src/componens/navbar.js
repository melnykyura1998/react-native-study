import React from 'react';
import {Text, View,StyleSheet} from "react-native";

export const Navbar = ({titel}) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.text}>
                {titel}
            </Text>

        </View>
    );
};


const styles = StyleSheet.create({
    navBar:{
        height: 70,
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor: 'blue',
        paddingBottom: 10,
    },
    text:{
        color:'white',
        fontSize: 20,
    }
})