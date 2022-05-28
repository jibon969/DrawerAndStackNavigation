import React from 'react';
import {
    SafeAreaView, 
    View, 
    StyleSheet, 
    Text, 
    TextInput, 
    ScrollView,
    TouchableOpacity,
    Button,
    Image,

} from 'react-native'


function ContactUsScreen() {
    return (
        <SafeAreaView style={styles.contactUsContainer}>
            <Text style={styles.contactUsSubTitle}>Contact Us</Text>
            {/* Contact Header */}
            {/* <View style={styles.contactUsHeader}>
                <Text style={styles.contactTitle}>Contact Us</Text>
                <Text style={styles.contactHide}>
                    <Text style={styles.contactHideTitle}>Hide</Text>
                </Text>
            </View> */}
            
            <ScrollView>
                {/* Contact Form */}
                <View style={styles.contactUsForm}>
                    <TextInput placeholder="Subject *" style={styles.input} />
                    <TextInput placeholder="Full Name *" style={styles.input} />
                    <TextInput placeholder="E-mail *" style={styles.input} />
                    <TextInput placeholder="Phone *" style={styles.input} />
                    <TextInput 
                        placeholder="Write your message *" 
                        multiline={true} 
                        style={styles.textArea}
                    />
                    <View style={styles.styleLoginBtn}>
                        <TouchableOpacity>
                            <Button title="Send Message" color="#1572A1" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Contact Address */}
                <View style={styles.contactUsAddress}>
                    <Text style={styles.contactUsAddressTitle}>Address</Text>
                    <View style={{margin:10}}>
                        <Text>Eastern Kamalapur Complex</Text>
                        <Text>64-68 North Kamlapur</Text>
                        <Text>2nd Floor, room 218</Text>
                        <Text>Motijheel, Dhaka-1000</Text>
                        <Text>Bangladesh</Text>
                    </View>
                    <Text style={styles.contactUsAddressPhone}>Phone</Text>
                    <View style={styles.contactUsAddressPhoneList}>
                        <Text>+88 01305-606540</Text>
                    </View>
                    <Text style={styles.contactUsAddressEmail}>E-mail</Text>
                    <View>
                        <Text>help.belasea@gmail.com</Text>
                    </View>
                </View>
                {/* Contact Google Map */}
                <View style={styles.map}>
                    <Image 
                        source={require('../../src/assets/splash.png')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contactUsContainer:{
        flex:1,
    },
    contactUsHeader:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contactUsSubTitle:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        
    },
    contactTitle:{
        width:"50%",
        backgroundColor:"#D9D9D9",
        padding:20,
        fontSize:24,
        fontWeight:"bold",
        color:"black"
    },
    contactHide:{
        width:"50%",
        backgroundColor:"#D9D9D9",
        padding:20,
        fontSize:24,
        textAlign:"right"
    },
    contactHideTitle:{
        fontSize:17,
        backgroundColor:"#9ABAD7",
    },
    contactUsForm:{
        marginTop:15,
        marginLeft:10,
        marginRight:10
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        borderColor:"#D9D9D9",
    },
    textArea:{
        height: 80,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:"#D9D9D9",
    },
    styleLoginBtn: {
        borderRadius: 10,
        padding:10,
        marginBottom:10
    },
    contactUsAddress:{
        flex:1,
        margin:15,
    },
    contactUsAddressList:{
       margin:10
    },
    contactUsAddressTitle:{
        fontWeight:"bold",
        fontSize:24
    },
    contactUsAddressPhone:{
        marginTop:8,
        fontWeight:"bold",
        fontSize:24
    },
    contactUsAddressPhoneList:{
        margin:10
    },
    contactUsAddressEmail:{
        marginTop:10,
        fontWeight:"bold",
        fontSize:24
    },
    map: {
        // width: Dimensions.get("window").width,
        // height: Dimensions.get("window").height,
        width:"100%",
        height:200,
        borderRadius:10,
        marginBottom:30
    },
})

export default ContactUsScreen;