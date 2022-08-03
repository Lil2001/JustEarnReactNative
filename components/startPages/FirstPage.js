import React, { Component } from 'react';
import { StyleSheet,Image } from 'react-native';

export default class FirstPageComponent extends Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        return (
            <Image 
            source={require('../../assets/images/Loading.png')} 
            
            style={styles.backgroundImages}/>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImages: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});