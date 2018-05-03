import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Persiapan from './Persiapan';
import Penyelenggaraan from './Penyelenggaraan';
import Header from '../../common/Header'; 


export default class Tahapan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
        };
    }    

    handleChangeTab(index) {
        this.setState({ selected: index.i });
    }

  render() {
    return (
        <View style={styles.headContainer}>         
            <View style={styles.contentContainer}>
                <ScrollableTabView
                    onChangeTab={(index) => this.handleChangeTab(index)}
                    tabBarUnderlineColor="#fff"
                    tabBarUnderlineStyle={{backgroundColor: "transparent"}}
                    tabBarBackgroundColor ="#2da2e5"
                    tabBarActiveTextColor="#fff"
                    tabBarInactiveTextColor="#88b0ac"
                    tabBarPosition='bottom'
                    >
                    <Persiapan tabLabel="PERSIAPAN" {...this.props} />
                    <Penyelenggaraan tabLabel="PENYELENGGARAAN" {...this.props} />                    
                </ScrollableTabView>
            </View>           
        </View> 
    );
  }
}

const styles = StyleSheet.create({
    headContainer: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems:"center",
        paddingRight: 5,
        paddingLeft: 5,
    },
    textHead: {
        color: 'white',
        fontSize: 20,
    },
    imageHead: {
        height: 30,
        width: 30,
    },
    headerRight: {
        alignItems: "flex-end",
        flexDirection: "row"
    },
    headerLeft: {
        alignItems: "flex-start",
        flexDirection: "row"
    },
    contentContainer: {
        flex: 9,
    },
    footer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
        right: 20,
        justifyContent: 'flex-end',
        flexGrow: 2,
        flex: 1,
    },
    addButton: {
        position: 'absolute',
        backgroundColor: '#363636',
        alignSelf: 'flex-end',
        width: 55,
        height: 55,
        borderRadius: 50,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        tintColor: '#fff',
        height: 20,
        width: 20,
        margin: 4,
        paddingRight: 25,
     },
});
