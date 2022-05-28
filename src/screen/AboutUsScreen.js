import React from 'react';
import {
    SafeAreaView, 
    View, 
    StyleSheet, 
    Text, 
    Platform, 
    ScrollView 
} from 'react-native'

function AboutUsScreen() {
    
    return (
        <SafeAreaView style={styles.aboutUsContainer}>
            <View style={styles.aboutUs}>
                <Text style={styles.aboutUsTitle}>About Us</Text>
                <ScrollView>
                    <View style={styles.aboutUsMargin}>
                        <Text style={styles.aboutUsText}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, laborum! Omnis unde reprehenderit autem sunt debitis, magnam tempora repellat non sed nesciunt delectus similique nobis labore, quaerat culpa illum harum blanditiis dolores. Odio accusantium laborum, perspiciatis cupiditate repudiandae eaque aspernatur iste corrupti quas aperiam quia voluptatem expedita minima dolorum voluptatibus!
                        </Text>     
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    aboutUsContainer:{
        flex:1,
    },
    aboutUs:{
        flex:1,
        ...Platform.select({
            ios:{
                marginBottom:"0%"
            },
            android:{
                marginBottom:0
            }
        })
    },
    aboutUsMargin:{
        margin:15
    },
    aboutUsTitle:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        margin:10,
        overflow:"hidden",
    },
    aboutUsText:{
        textAlign:"justify",
        lineHeight:24,
        marginBottom:10
    }
})

export default AboutUsScreen;