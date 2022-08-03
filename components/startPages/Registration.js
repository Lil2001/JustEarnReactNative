import React, { Component } from "react"
import {
    ImageBackground,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Rect } from "react-native-svg";

export default class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,

            
        }
    }

    goToAuthorization = () => {
        this.props.navigation.navigate('Recuest')
    }

    goToAcceptEmail = () => {
        this.props.navigation.navigate('AcceptEmil')
    }


    render() {
        return (
            <SafeAreaView style={styles.parent}>
                <TouchableOpacity style={styles.goBack} onPress={() => this.goToAuthorization()}>
                    <Image
                        source={require('../../assets/images/BackArrow.png')}
                        style={{ width: 10.21, height: 20.42, }} />
                </TouchableOpacity>

                <View style={{
                    width: 270,
                    height: 290,
                    position: 'absolute',
                    right: 0,
                }}>
                    <Image
                        style={{
                            width: '100%',
                            height: '100%',
                            position: "absolute",
                            right: -30,
                            padding: 10

                        }}
                        resizeMode="contain"

                        source={require('../../assets/images/Group.png')}

                    />
                </View>

                <Text style={{
                    marginTop: 100,
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: 36
                }}>Регистрация</Text>
                <ScrollView style={{ width: '100%', }}>
                    <View style={{ alignItems: "center", paddingTop: 40 }}>
                        <View style={styles.fieldset}>
                            <Text style={styles.legend}>Имя</Text>
                            <TextInput style={styles.input} />

                        </View>
                        <View style={styles.fieldset}>
                            <Text style={styles.legend}>Фамилия</Text>
                            <TextInput style={styles.input} />
                        </View>



                        <View style={styles.fieldset}>
                            <Text style={styles.legend}>Эл. почта</Text>
                            <TextInput style={styles.input} />
                        </View>



                        <View style={styles.fieldset}>
                            <Text style={styles.legend}>Пароль</Text>
                            <TextInput style={styles.input} password={true} secureTextEntry={true} au />
                        </View>



                        <View style={styles.fieldset}>
                            <Text style={styles.legend}>Повторите пароль</Text>
                            <TextInput style={styles.input} password={true} secureTextEntry={true} autoCorrect={false} />
                        </View>



                        <View style={styles.checkBoxParent}>

                            <TouchableOpacity onPress={() => { this.setState({ checked: !this.state.checked }) }}>
                                <View>
                                    {!this.state.checked &&
                                        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M4 2H24V0H4V2ZM26 4V24H28V4H26ZM24 26H4V28H24V26ZM2 24V4H0V24H2ZM4 26C2.89543 26 2 25.1046 2 24H0C0 27.3137 0.686291 28 4 28V26ZM26 24C26 25.1046 25.1046 26 24 26V28C27.3137 28 28 27.3137 28 24H26ZM24 2C25.1046 2 26 2.89543 26 4H28C28 0.686292 27.3137 0 24 0V2ZM4 0C0.686292 0 0 0.686291 0 4H2C2 2.89543 2.89543 2 4 2V0Z" fill="#C40B83" />
                                        </Svg>
                                    }

                                    {this.state.checked &&
                                        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Rect width="28" height="28" rx="4" fill="#C40B83" />
                                            <Path d="M7 15L11.4118 20L22 7" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </Svg>
                                    }
                                </View>
                            </TouchableOpacity>
                            <Text style={{
                                color: '#fff'
                            }}>Согласен с правилами
                                <Text style={{ color: '#C40B83' }}> бренда</Text> и
                                <Text style={{ color: '#C40B83' }}> политикой конфиденциальности</Text>
                            </Text>

                        </View>
                        <TouchableOpacity style={{ marginTop: 20, }}
                            onPress={() => this.goToAcceptEmail()}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#521280', '#C40B83']}
                                style={styles.buttonGradient}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 17,
                                }}>Зарегистрироваться</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#17171F',
        paddingHorizontal: 25
    },
    goBack: {
        position: "absolute",
        left: 26.66,
        top: 18.29,
        width: 40,
        height: 40,
    },
    checkBoxParent: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    buttonGradient: {
        borderRadius: 8,
        width: 265,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        color: '#fff',
        width: '100%',
        height: '100%',
        padding: 10
    },
    fieldset: {
        width: '100%',
        height: 62,
        borderColor: '#fff',
        borderWidth: 0.5,
        position: "relative",
        borderRadius: 10,
        marginBottom: 25
    },
    legend: {
        position: "absolute",
        color: '#fff',
        top: -10,
        left: 10,
        backgroundColor: '#17171f'
    },
})