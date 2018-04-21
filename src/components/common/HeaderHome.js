import React from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import PropTypes from 'prop-types'
const imageWidth = Dimensions.get('window').width
const iconBack = require('../../icon/back.png')

const HeaderHome = ({ source }) => (
        <View style={styles.header}>            
            <View style={{ alignItems: 'center'}}> 
                <Image source={source} style={{height: 30, width: 100}} />
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
        flexDirection: 'row'
    },
    textHeader: {
        color: '#000',
        fontSize: 20,
        fontWeight: "900",             
    }
});

HeaderHome.propTypes = {
   source: PropTypes.any,
};

export default HeaderHome