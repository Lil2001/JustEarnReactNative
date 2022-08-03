import React, { Component } from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    Text,
    ScrollView

} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import EyeIconComponent from "../../assets/images/EyeIcon";
import ArowPinkComponent from "../../assets/images/ArrowPink";


export default class CustomerPageComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#17171f'
                }}>
                <StatusBar animated={true} backgroundColor={'#17171F'} />
                <View style={styles.header}>
                    <View
                        style={{
                            width: '90%',
                            alignItems: 'center',
                            flexDirection: 'row',
                            textAlign: 'center'
                        }}
                    >
                        
                        <Text style={{
                            fontSize: 25,
                            color: '#C40B83',
                            lineHeight: 28,
                            textAlign: 'center',
                            marginLeft:150
                        }}>
                            STECH
                        </Text>
                    </View>


                </View>
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 15
                    }}>

                    <ScrollView style={{ marginTop: 12, }}>

                    </ScrollView>


                </View>

                <View
                    style={styles.footer}
                >

                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#17171F',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        shadowColor: '#fff',
        elevation: 5,
        padding: 20
    },
    button: {
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#E5C2E0B2',
        height: 38,
        marginHorizontal: 6,
        borderRadius: 5
    },
    buttonParent: {
        height: 38,
        marginTop: 15,
        width: '100%',
        flexDirection: "row",
        backgroundColor: 'transparent'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
    },
    workes: {
        width: '100%',
        height: 183,
        borderRadius: 10,
        marginBottom: 15,
        padding: 10

    },
    footer: {
        height: 83
    }
})