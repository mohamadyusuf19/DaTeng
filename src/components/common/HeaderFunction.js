import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
const imageWidth = Dimensions.get('window').width
const iconBack = require('../../icon/back.png')

const HeaderFunction = ({ text, onPress }) => (
        <View style={styles.header}>
            <TouchableOpacity style={{ left: 10, position: 'absolute' }} onPress={onPress}>
                <Image source={iconBack} style={{height: 20, width: 20}} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center'}}> 
                <Text style={styles.textHeader}>{text}</Text>
            </View>            
        </View>        
)

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems:"center",
        paddingRight: 5,
        paddingLeft: 5,
        top: 0,        
        height: 60,
        width: '100%',
        elevation: 3,
        flexDirection: 'row',        
    },
    textHeader: {
        color: '#000',
        fontSize: 20,
        fontWeight: "900",             
    }
});

HeaderFunction.propTypes = {
   text: PropTypes.string,
   onPress: PropTypes.func,
};

export default HeaderFunction