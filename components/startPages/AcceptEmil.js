import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import {
    SafeAreaView,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    ImageBackground,
    StyleSheet
} from "react-native";

export default class AcceptEmilComponent extends React.Component {
    constructor(props) {
        super(props)
        this.pin1Ref = React.createRef()
        this.pin2Ref = React.createRef()
        this.pin3Ref = React.createRef()
        this.pin4Ref = React.createRef()
        this.pin5Ref = React.createRef()
        this.pin6Ref = React.createRef()


        this.state = {
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
            pin5: "",
            pin6: "",
            modalVisible: false,
            wrongVerificationMessage: false,
            sendBan: false,
            sendAgainTime: 10,
            modalEmail: false

        };
    }
    goToRegistration = () => {
        this.props.navigation.navigate('Registration')
    }

    goToLogin = () => {
        this.props.navigation.navigate('Login')
    }

    openModalEmail = async () => {
        await this.setState({
            modalEmail: true
        })

        setTimeout(() => {
            this.setState({
                modalEmail: false
            })
            this.props.navigation.navigate('ListDarkPage')
        }, 2000)
    }


    render() {
        const { pin1, pin2, pin3, pin4, pin5, pin6 } = this.state
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#17171F',
                position: "relative",
                alignItems: 'center'
            }}>

                <Modal
                    visible={this.state.modalEmail}
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
                                ???? ?????????????? {'\n'} ????????????????????????????????????
                            </Text>
                        </View>
                    </ImageBackground>
                </Modal>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        left: 26.66,
                        top: 18.29,
                        width: 40,
                        height: 40,
                    }}
                    onPress={() => {
                        this.goToRegistration()
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
                    marginTop: 112,
                    color: '#fff',
                    fontSize: 36,
                    textAlign: "center",
                    fontWeight: "700",
                }}>
                    ?????????????????????????? ????.??????????
                </Text>
                <Text style={{
                    color: '#fff',
                    marginTop: 22,
                    fontSize: 13,
                    fontWeight: "500",
                    lineHeight: 15.85
                }}>
                    ???? ?????????????????? 6-???? ?????????????? ?????? ???? ???????? ????. ?????????? {'\n'} ?????? ?????????????????????????? ????????????????
                </Text>
                <View style={{
                    flexDirection: "row",
                    width: '90%',
                    justifyContent: "space-between",
                    marginTop: 40,
                }}>
                    <TextInput style={{
                        width: 45,
                        height: 60,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        textAlign: "center",
                        alignItems: "center"
                    }}
                        ref={this.pin1Ref}
                        value={pin1}
                        keyboardType={"numeric"}
                        onChangeText={(pin1) => {
                            this.setState({ pin1 })
                            if (pin1.length) {
                                this.pin2Ref.current.focus()
                            } else {
                                this.pin1Ref.current.blur()
                            }
                        }}
                        maxLength={1} />


                    <TextInput style={{
                        width: 45,
                        height: 60,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        textAlign: "center",
                        alignItems: "center"
                    }}
                        ref={this.pin2Ref}
                        value={pin2}
                        keyboardType={"numeric"}
                        onChangeText={(pin2) => {
                            this.setState({ pin2 })
                            if (pin2.length) {
                                this.pin3Ref.current.focus()
                            } else {
                                this.pin1Ref.current.blur()
                            }
                        }}
                        maxLength={1} />


                    <TextInput style={{
                        width: 45,
                        height: 60,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        textAlign: "center",
                        alignItems: "center"
                    }}
                        ref={this.pin3Ref}
                        value={pin3}
                        keyboardType={"numeric"}
                        onChangeText={(pin3) => {
                            this.setState({ pin3 })
                            if (pin3.length) {
                                this.pin4Ref.current.focus()
                            } else {
                                this.pin2Ref.current.blur()
                            }
                        }}
                        maxLength={1} />



                    <TextInput style={{
                        width: 45,
                        height: 60,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        textAlign: "center",
                        alignItems: "center"
                    }}
                        ref={this.pin4Ref}
                        value={pin4}
                        keyboardType={"numeric"}
                        onChangeText={(pin4) => {
                            this.setState({ pin4 })
                            if (pin4.length) {
                                this.pin5Ref.current.focus()
                            } else {
                                this.pin3Ref.current.blur()
                            }
                        }}
                        maxLength={1} />



                    <TextInput style={{
                        width: 45,
                        height: 60,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        textAlign: "center",
                        alignItems: "center"
                    }}
                        ref={this.pin5Ref}
                        value={pin5}
                        keyboardType={"numeric"}
                        onChangeText={(pin5) => {
                            this.setState({ pin5 })
                            if (pin5.length) {
                                this.pin6Ref.current.focus()
                            } else {
                                this.pin4Ref.current.blur()
                            }
                        }}
                        maxLength={1} />


                    <TextInput style={{
                        width: 45,
                        height: 60,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#fff',
                        color: '#fff',
                        textAlign: "center",
                        alignItems: "center"
                    }}
                        ref={this.pin6Ref}
                        value={pin6}
                        keyboardType={"numeric"}
                        onChangeText={(pin6) => {
                            this.setState({ pin6 })
                            if (pin6.length) {
                                this.pin6Ref.current.focus()
                            } else {
                                this.pin5Ref.current.blur()
                            }
                        }}
                        maxLength={1} />
                </View>
                <Text style={{
                    marginTop: 10,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: "400"
                }}>
                    ?????????????????? ?????? ????????????????
                </Text>
                <TouchableOpacity
                    style={{
                        marginTop: 40,

                    }}
                    onPress={() => this.openModalEmail()}>
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
                        }}>??????????????????????</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}