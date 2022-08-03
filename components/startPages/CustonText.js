// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default class CustomText extends Component {
//     setFontType = type => {
//         switch (type) {
//             case 'black':
//                 return 'Montserrat-Black.ttf';
//             case 'bold':
//                 return 'Montserrat-Bold.ttf';
//             case 'semi-bold':
//                 return 'Montserrat-SemiBold.ttf';
//             case 'regular':
//                 return 'Montserrat-Regular.ttf';
//             default:
//                 return 'Montserrat-Medium.ttf';
//         }
//     };

//     render() {
//         const font = this.setFontType(this.props.type ? this.props.type : 'normal');
//         const style = [{ fontFamily: font }, this.props.style || {}];
//         const allProps = Object.assign({}, this.props, { style: style });
//         return <Text {...allProps}>{this.props.children}</Text>;
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
