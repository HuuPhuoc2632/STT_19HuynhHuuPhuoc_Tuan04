import { useState } from "react";
import { Text, TextInput, View, CheckBox, StyleSheet, TouchableOpacity } from "react-native";

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const specialSymbol = '`~!@#$%^&*()_+-={}[]\|;:,.<>/?'

export default function Screen3() {
    const [generatedString, setGeneratedString] = useState('')
    const [length, setLength] = useState()
    const [isLowerCase, setIsLowerCase] = useState(false)
    const [isUpperCase, setIsUpperCase] = useState(false)
    const [isNumber, setIsNumber] = useState(false)
    const [isSpecialSymbol, setIsSpecialSymbol] = useState(false)

    const checkNumberInput = (text) => {
        const cleanedText = text.replace(/[^0-9]/g, '');
        setLength(cleanedText);
    }

    const handleGenerate = () => {
        let string = ''
        let generateString = ''

        if (!(length > 0 && length < 21))
            alert('Invalid length of password, length of pass word: [1-20]')
        else if (!(length > 0 && length < 21) && !isLowerCase && !isNumber && !isUpperCase && !isSpecialSymbol)
            alert('Please pick a selection')
        else if (!isLowerCase && !isNumber && !isUpperCase && !isSpecialSymbol) {
            alert('Please pick a selection')
        }
        else if (isLowerCase && isNumber && isUpperCase && isSpecialSymbol) {
            if (length < 4) {
                alert('Lenght of password must be greater than 4 because you choose all selection')
                setLength(4)
                generateString += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
                generateString += number.charAt(Math.floor(Math.random() * number.length))
                generateString += upperCase.charAt(Math.floor(Math.random() * upperCase.length))
                generateString += specialSymbol.charAt(Math.floor(Math.random() * specialSymbol.length))
                setGeneratedString(generateString)
            }
            else {
                generateString += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
                generateString += number.charAt(Math.floor(Math.random() * number.length))
                generateString += upperCase.charAt(Math.floor(Math.random() * upperCase.length))
                generateString += specialSymbol.charAt(Math.floor(Math.random() * specialSymbol.length))
                string = upperCase + lowerCase + number + specialSymbol
                for (let i = 4; i < length; i++) {
                    generateString += string.charAt(Math.floor(Math.random() * string.length))
                }
                setGeneratedString(generateString)
            }

        }
        else if (isLowerCase || isUpperCase || isNumber || isSpecialSymbol) {
            var count = 0
            if (isLowerCase) {
                string += lowerCase
                count += 1
                generateString += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
            }
            if (isUpperCase) {
                string += upperCase
                count += 1
                generateString += upperCase.charAt(Math.floor(Math.random() * upperCase.length))
            }
            if (isNumber) {
                string += number
                count += 1
                generateString += number.charAt(Math.floor(Math.random() * number.length))
            }
            if (isSpecialSymbol) {
                string += specialSymbol
                count += 1
                generateString += specialSymbol.charAt(Math.floor(Math.random() * specialSymbol.length))
            }
            if (length < count) {
                alert('Lenght of password must be greater than ' + count + ' because you choose ' + count + ' selection')
                setLength(count)
                setGeneratedString(generateString)
            }
            else{
            for (let i = count; i < length; i++) {
                generateString += string.charAt(Math.floor(Math.random() * string.length))
            }
            setGeneratedString(generateString)
        }
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>PASSWORD{'\n'}GENERATOR</Text>
                <View style={styles.bodyWrapper}>
                    <View style={styles.passwordWrapper}>
                        <Text style={styles.password}>{generatedString}</Text>
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Password length</Text>
                        <TextInput style={styles.lengthInput} value={length} onChangeText={checkNumberInput} keyboardType="numeric"
                            keyboardAppearance="none" />
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include lower case letters</Text>
                        <CheckBox style={styles.conditionCheckbox} value={isLowerCase} onValueChange={setIsLowerCase} />
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include upcase letters</Text>
                        <CheckBox style={styles.conditionCheckbox} value={isUpperCase} onValueChange={setIsUpperCase} />
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include number</Text>
                        <CheckBox style={styles.conditionCheckbox} value={isNumber} onValueChange={setIsNumber} />
                    </View>
                    <View style={styles.conditionWrapper}>
                        <Text style={styles.conditionTxt}>Include special symbol </Text>
                        <CheckBox style={styles.conditionCheckbox} value={isSpecialSymbol} onValueChange={setIsSpecialSymbol} />
                    </View>
                </View>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.btnGenerate} onPress={handleGenerate}>
                        <Text style={styles.generateBtnTitle}>GENERATE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B3B98',
        backgroundImage: 'radial-gradient(circle, rgba(196,196,196,1) 0%, rgba(59,59,152,1) 100%)',
    },
    wrapper: {
        height: '90%',
        margin: 20,
        borderRadius: 15,
        backgroundColor: '#23235B',
        paddingBottom: 38,
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    bodyWrapper: {
        margin: 15,
    },
    passwordWrapper: {
        backgroundColor: '#000',
        width: '100%',
        height: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    password: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 25,
    },
    conditionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    conditionTxt: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 20,
    },
    lengthInput: {
        width: 120,
        height: 30,
        backgroundColor: '#fff',
        marginTop: -3,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 20,
    },
    conditionCheckbox: {
        width: 25,
        height: 25,
    },
    btnWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btnGenerate: {
        width: 270,
        height: 55,
        backgroundColor: '#3B3B98',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    generateBtnTitle: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
    },
})