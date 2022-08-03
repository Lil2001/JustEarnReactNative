import React, { Component } from "react"
import {
    ImageBackground,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    goToAuthorization = () => {
        this.props.navigation.navigate('Authorization')
    }
    goToForgetPassword = () => {
        this.props.navigation.navigate('ForgetPassword')
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                position: 'relative',
                alignItems: 'center',
                backgroundColor: '#17171F'
            }}>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        left: 26.66,
                        top: 18.29,
                        width: 40,
                        height: 40,
                    }}
                    onPress={() => {
                        this.goToAuthorization()
                    }}>
                    <Image
                        source={require('../../assets/images/BackArrow.png')}
                        style={{
                            width: 10.21,
                            height: 20.42,
                        }} />
                </TouchableOpacity>
                <Image
                    style={{
                        width: 257.52,
                        height: 297.98,
                        position: 'absolute',
                        right: 0,
                        resizeMode: 'contain',

                    }}
                    source={require('../../assets/images/BgLines.png')} 
                    
                    />
                <Text style={{
                    marginTop: 207,
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: 36
                }}>Вход</Text>


                <View style={{
                    width: '90%',
                    height: 62,
                    borderColor: '#fff',
                    borderWidth: 0.5,
                    position: "relative",
                    borderRadius: 10,
                    marginTop: 40,
                    marginBottom: 25
                }}>
                    <Text style={{
                        position: "absolute",
                        color: '#fff',
                        top: -10,
                        left: 10,
                        backgroundColor: '#17171f'
                    }}>Эл. почта</Text>
                    <TextInput style={{
                        color: '#fff',
                        width: '100%',
                        height: '100%',
                        padding: 10
                    }} />

                </View>
                <View style={{
                    width: '90%',
                    height: 62,
                    borderColor: '#fff',
                    borderWidth: 0.5,
                    position: "relative",
                    borderRadius: 10,
                    marginBottom: 5
                }}>
                    <Text style={{
                        position: "absolute",
                        color: '#fff',
                        top: -10,
                        left: 10,
                        backgroundColor: '#17171f'
                    }}>Пароль</Text>
                    <TextInput style={{
                        color: '#fff',
                        width: '100%',
                        height: '100%',
                        padding: 10
                    }} password={true} secureTextEntry={true} autoCorrect={false}/>
                </View>
                <View style={{
                    width: '90%',

                }}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'right',
                        textDecorationLine: "underline",
                        textDecorationColor: '#fff',
                        textDecorationStyle: 'solid',
                        paddingBottom: 6,
                        margin: 0,
                        fontSize: 13,
                        lineHeight: 15.85,
                        
                    }}
                        // onPress={() => Linking.openURL('')}
                        onPress={() => this.goToForgetPassword()}
                    >
                        Забыли пароль?
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        marginTop: 88,

                    }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#521280', '#C40B83']}
                        style={{
                            borderRadius: 8,
                            width: 265,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 17,
                        }}>Войти</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}