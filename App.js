import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/componens/navbar";
import {AddTodo} from "./src/componens/AddTodo";
import {useState} from "react";

export default function App() {
    let arr = []
    const [todo,setTodo] = useState([]);

    const addTodo = (todo) => {
        setTodo(prevState => [
            ...prevState,
            {
                id:Date.now().toString(),
                titel:todo
            }
            ]
        )
    }

    return (
        <View>
            <Navbar titel={'Todo app!'}/>
            <View style={styles.container}>
                <AddTodo adTodo={addTodo}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
});
