import React, { Component } from "react"
import {
    ImageBackground,
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView
} from "react-native"


export default class RecuestComponent extends Component {
    constructor(props) {
        super(props)
    }
    goToAuthorization = () => {
        this.props.navigation.navigate('Authorization')
    }
    goToRegistration = () => {
        this.props.navigation.navigate('Registration')
    }
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                position: "relative",
                alignItems: "center",
                backgroundColor: '#17171f',
                overflow: 'hidden',
            }}>
                <Image
                    // source={require('../../assets/images/Group.png')}
                    style={{
                        width: 408.04,
                        height: 472.16,
                        resizeMode: 'contain',
                        position: "absolute",
                        right: 0
                    }}/>
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
                            // source={require('../../assets/images/BackArrow.png')}
                            style={{
                                width: 10.21,
                                height: 20.42,
                            }} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 36,
                            color: '#fff',
                            marginTop: 160,
                            fontWeight: '700',
                            marginBottom: 21
                        }}
                    >Выбор роли</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 17,
                        textAlign: "center",
                        fontWeight: '500'
                    }}>Выберите пожалуйста {'\n'} роль регистрации аккаунта</Text>

                    <View style={{
                        width: '100%',
                        paddingHorizontal: 20,
                        justifyContent: 'space-between',
                        flexDirection: "row",
                        marginTop: 145,

                    }}>
                        <TouchableOpacity style={{
                            width: '48%',
                            height: '100%',
                            position: "relative",
                            height: 250,
                        }} 
                        onPress={() => {
                            this.goToRegistration()
                        }}>
                            <Image style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain'
                            }}
                            
                            source={require('../../assets/images/Zakazchik.png')}
                             />
                            <Text style={{
                                position: "absolute",
                                bottom: 10,
                                textAlign: "center",
                                width: '100%',
                                fontWeight: '700',
                                fontSize: 20,
                                color: '#fff'
                            }}>Заказчик</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: '48%',
                            height: '100%',
                            position: "relative",
                            height: 250,
                        }}
                        onPress={() => {
                            this.goToRegistration()
                        }}>
                            <Image style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain'
                            }} source={require('../../assets/images/FreeLancer.png')} />
                            <Text style={{
                                position: "absolute",
                                bottom: 10,
                                textAlign: "center",
                                width: '100%',
                                fontWeight: '700',
                                fontSize: 20,
                                color: '#fff'
                            }}>Фрилансер</Text>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        )
    }
}