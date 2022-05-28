import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
function Welcome(props) {
    return (
        <View style={styles.container}>
            <Text>Welcome Page</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"orange"
    }
})
export default Welcome;