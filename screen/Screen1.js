import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import { React, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function Screen1() {
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    var accoutArray = [
        {
            username: 'admin',
            password: 'admin',
        },
        {
            username: 'huuphuoc',
            password: '123456',
        },
        {
            username: 'phuochuynh',
            password: '654321',
        },
    ]

    const checkLogin = () => {
        let found = false;
    
        accoutArray.forEach((acc) => {
            if (acc.username === username && acc.password === password) {
                alert('Login success');
                found = true;
                return;
            }
        });
    
        if (!found) {
            alert('Login fail');
        }
    }  
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["rgba(251, 203, 0, 1)", "rgba(191, 154, 0, 1)"]}
                style={{ width: "100%", height: "100%", alignItems: "center" }}
            >
                <View style={{ alignItems: 'flex-start', width: '100%', marginLeft: 80 }}>
                    <Text style={styles.title}>LOGIN</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../assets/img/avatar_user 1.png')}
                            style={{ width: 30, height: 30, position: 'absolute', left: 5, marginTop: 15 }}
                        />
                        <TextInput placeholder="Name" style={styles.input} onChangeText={setUsername}/>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                         <Image source={require('../assets/img/lock-1528791.png')}
                            style={{ width: 30, height: 30, position: 'absolute', left: 5, marginTop: 15 }}
                        />
                        <TextInput placeholder='Password'
                            secureTextEntry={!showPassword} style={styles.input} onChangeText={setPassword}/>
                        <TouchableOpacity onPress={toggleShowPassword}
                            style={{ position: 'absolute', right: 20, marginTop: 20 }}
                        >
                            <Ionicons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={checkLogin}>
                    <Text style={styles.btnLoginTxt}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={{fontFamily: 'Roboto', fontSize: 20, fontWeight:'700', marginTop: 50}}>CREATE ACCOUNT</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 30,
        marginTop: 50,
    },

    inputWrapper: {
        width: '100%',
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#D9BB3C',
        marginTop: 20,
        width: 380,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 40,
        borderColor: '#fff',
        borderWidth: 1,
    },
    btnLogin: {
        width: 380,
        height: 50,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',   
        marginTop: 50,
    },
    btnLoginTxt: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
        color: '#fff',
    },
})