import React, { Component } from "react"
import {
    ImageBackground,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Modal
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

export default class NewPasswordComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
        }
    }

    openModal = async () => {
        await this.setState({
            modal: true
        })

        setTimeout(() => {
            this.setState({
                modal: false
            })
            this.props.navigation.navigate('Login')
        }, 2000)
    }



    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                position: 'relative',
                alignItems: 'center',
                backgroundColor: '#17171F'
            }}>

                <Modal
                    visible={this.state.modal}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: 'center',
                    }}
                >
                    <ImageBackground
                        source={require('../../assets/images/BlurBg.png')}
                        resizeMode="cover"
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                        <View style={{
                            position: 'relative',
                            width: '100%',
                            height: 433,
                        }}>
                            <Image
                                source={require('../../assets/images/PopUp.png')}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                }} />
                            <Text style={{
                                width: '100%',
                                textAlign: 'center',
                                fontWeight: '500',
                                color: '#fff',
                                position: "absolute",
                                bottom: 71,
                                fontSize: 22,
                            }}>
                                Ваш пароль {'\n'} успешно изменён
                            </Text>
                        </View>
                    </ImageBackground>
                </Modal>



                <Image
                    style={{
                        width: 257.52,
                        height: 297.98,
                        position: 'absolute',
                        right: 0,
                        resizeMode: 'contain',

                    }}
                    source={require('../../assets/images/BgLines.png')} />
                <Text style={{
                    marginTop: 110,
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: 36,
                    textAlign: 'center',
                    lineHeight: 39.96
                }}>Задайте {'\n'} новый пароль</Text>

                <Text style={{
                    marginTop: 15,
                    color: '#fff',
                    fontWeight: '400',
                    fontSize: 13,
                    textAlign: 'left',
                    lineHeight: 15.85
                }}>
                    Придумайте сложный пароль,содержащий {'\n'}
                    строчные и прописные буквы,а так же цифры {'\n'}
                    и символы
                </Text>


                <View style={{
                    width: '90%',
                    height: 62,
                    borderColor: '#fff',
                    borderWidth: 0.5,
                    position: "relative",
                    borderRadius: 10,
                    marginTop: 50,
                    marginBottom: 25
                }}>
                    <Text style={{
                        position: "absolute",
                        color: '#fff',
                        top: -10,
                        left: 10,
                        backgroundColor: '#17171f'
                    }}>Новый пароль</Text>
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
                    }}>Повторите новый пароль</Text>
                    <TextInput style={{
                        color: '#fff',
                        width: '100%',
                        height: '100%',
                        padding: 10
                    }} />
                </View>
                <View style={{
                    width: '90%',

                }}>

                </View>
                <TouchableOpacity
                    style={{
                        marginTop: 80,

                    }}
                    onPress={() => this.openModal()}>
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
                        }}>Подтвердить</Text>
                    </LinearGradient>
                </TouchableOpacity>


            </SafeAreaView>
        )
    }






}