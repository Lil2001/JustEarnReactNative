import React, { Component } from "react";
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Text,
    TouchableOpacity,
    Image,
    View,
    ActivityIndicator
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import RegistrationComponent from "./Recuest";
import LoginComponent from "./Login";
export default class AuthorizationComponent extends Component {
    constructor(props) {
        super(props)
    }

    goToRecuest = () => {
        this.props.navigation.navigate('Recuest')
    }
    goToLogin = () => {
        this.props.navigation.navigate('Login')
    }
    render() {

        return (
            <SafeAreaView style={styles.MainAuthorization}>
                <Image
                    source={require('../../assets/images/BgLines.png')}
                    style={styles.BgLines} />
                <View style={styles.imageParent}>
                    <Image
                        source={require('../../assets/images/Just_Earn.png')}
                        style={{ width: '100%', height: '100%', }} />
                </View>
                <Text style={styles.wellcome}>Добро пожаловать</Text>
                <Text style={styles.clickRequeir}>Регистрирутесь или зайдите в уже существующий аккаунт</Text>

                <TouchableOpacity
                    onPress={() => this.goToLogin()}
                    style={{ marginBottom: 20 }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#521280', '#C40B83']} style={styles.touchBut}>
                        <Text style={{ color: '#fff', fontSize: 17, }}>Войти</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.goToRecuest()}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#521280', '#C40B83']} style={styles.touchBut}>
                        <Text style={{ color: '#fff', fontSize: 17, }}>Зарегистрироваться</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    MainAuthorization: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: '#17171F'
    },
    register: {
        fontSize: 20,
        fontFamily: 'sans-serif',
    },
    touchBut: {
        borderRadius: 8,
        width: 265,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    imageParent: {
        width: 155,
        height: 123
    },
    BgLines: {
        position: "absolute",
        width: 300,
        height: 300,
        resizeMode: 'contain',
        top: 35,
        right: 0
    },
    wellcome: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 10,
        marginTop: 45,
    },
    clickRequeir: {
        width: 271,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 90,
    }

})
