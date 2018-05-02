import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, Alert } from 'react-native';
import HeaderFunction from '../common/HeaderFunction'

import { Circle, G, Line, Rect, Svg } from 'react-native-svg';

import { Puzzles } from './puzzles/index';
import GameScreen from './GameScreen';

export default class HomeScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        let title = ["H","A","N","G","M","A","N"]
        return (
            <View style={{flex: 1}}>
                <HeaderFunction 
                    onPress={() => this.props.navigation.goBack()}
                    text="Permainan"
                />
                <View style={styles.homeContainer}>
                    <Svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" class="svg-content" width="250" height="250">
                        <Rect fill="#053544" width="10" height="400" x="20" y="0" />
                        <Rect fill="#053544" width="300" height="10" x="20" y="0" />
                        <Rect fill="#053544" width="300" height="10" x="0" y="400" />
                        <Line x1="250" y1 = "0" x2="250" y2 = "120" stroke="#895917" strokeWidth="5"/>
                        <Circle cx="250" cy="150" r="30" fill="#ecd2b7" />
                        <Rect width="10" height="100" x="245" y="150" fill="#ecd2b7"/><Line x1="250" y1="200" x2="220" y2="230" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="handLeft"/><Line x1="250" y1="200" x2="280" y2="230" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="handRight"/><Line x1="250" y1="250" x2="230" y2="300" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="legLeft"/><Line x1="250" y1="250" x2="270" y2="300" stroke="#ecd2b7" stroke-Linecap="round" strokeWidth="10" id="legRight"/>
                    </Svg>
                    <View style={styles.gameTitleView}>
                    {title.map((titleItem,index)=>{
                        return <Text key={index} style={styles.gameTitle}>{titleItem}</Text>
                    })}
                    </View>
                    <Button
                        onPress={() => navigate('GameScreen')}
                        title="klik disini untuk main"
                        style={styles.startGameBtn}
                        accessibilityLabel="Click here to start the game"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeContainer: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gameTitleView:{
        flexDirection:"row"
    },
    gameTitle:{
        fontSize:35,
        borderBottomWidth:1,
        margin:10
    },
    keyboard: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection:"column"
    },
    keyboardRow: {
        flex: 1,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyItem:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        margin:2
    },
    usedKey:{
        color:"grey",
        fontSize:20,
        width:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter:{
        color:"black",
        fontSize:20,
        width:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startGameBtn: {
        color: '#841584',
        fontSize:25,
        margin:10
    },
    dashInputStyle:{
        height: 40, 
    },
    dashes:{
        flex: 1,
        flexDirection:"row",
        alignItems: 'center',
        alignSelf:"auto",
        justifyContent: 'center',
        flexWrap:"wrap"
    },
    dashItemContainer:{
        flex:0,
        padding:5,
        margin:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dashItem:{
        width:20,
        color: '#841584',
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:"black"
    },
    dashBlankItem:{
        width:20,
        fontSize:20,
    },
    hintContainer:{
        flexWrap: 'wrap',
        alignItems: "flex-start",
        padding:10,
        backgroundColor:"lightgrey"
    },
    hintText:{
        fontSize:18,
        fontWeight:"500",
    },
    scoreText:{
        fontSize:13,
        textAlign:"right",
        fontWeight:"500",
        justifyContent:"flex-end",
        width:"100%"
    }
});
