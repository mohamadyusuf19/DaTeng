import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight, Alert, AsyncStorage } from 'react-native';
import HeaderFunction from '../common/HeaderFunction'

import { Puzzles } from './puzzles/index';

export default class GameScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "answer":"",
            "hint":"",
            "correct":0,
            "wrong":0,
            "usedLetters":[],
            "lettersLeft":[],
            "input":"",
            "score":0
        }
    this.init = this.init.bind(this);
    this.puzzles = new Puzzles();
    } 
    componentDidMount(){
        this.init();
    }
    static navigationOptions = {
        title: 'Back',
    };
    init(){
    let puzzle = this.puzzles.getRandom();
    let answer = puzzle.answer.replace(/[^a-zA-Z]/gmi, " ").trim();
    let hint = puzzle.hint;
    let lettersLeft = Array(answer.length);
    for(let index=0;index<answer.length;index++){
      lettersLeft[index] = answer[index]==" "?"*":" ";
    }
    this.setState({
            answer:answer,
            hint:hint,
            correct:0,
            wrong:0,
            usedLetters:[],
            lettersLeft:lettersLeft,
            input:""
        });
    }
    componentWillMount() {
        AsyncStorage.getItem('nilai', (error, result) => {
            if (result) {
                const resultParsed = JSON.parse(result);
                this.setState({
                    score: resultParsed,
                });
            }
        });
    }
    validate(usedLetters,letter){
        usedLetters.push(letter);
        let correct = this.state.correct,
            wrong = this.state.wrong,
            answer = this.state.answer,
            lettersLeft = this.state.lettersLeft,
            score = this.state.score;
        if(answer.toUpperCase().indexOf(letter)==-1){
            wrong++;
            if(score>0){
                score --;
            }
        } else{
            answer.toUpperCase().split("").map((value,index)=>{
                if(value==letter){
                    lettersLeft[index] = letter;
                    correct ++;
                    score++;
                }
            });
        }
        if(lettersLeft.join("").replace(/\*/g," ").toUpperCase() == answer.toUpperCase()){
            Alert.alert(
                'Kamu dapat nilai',
                'Kamu telah menebak dengan tebakan yang benar',
                [
                {text: 'Lanjut', onPress: () => this.init()},
                ],
                { cancelable: false }
            )
            AsyncStorage.setItem('nilai', JSON.stringify(this.state.score))
        }
        if(wrong>4){
            Alert.alert(
                'Kalah',
                'Jawaban: '+answer.toUpperCase() +" "+this.state.hint,
                [
                {text: 'OK', onPress: () => this.init()},
                ],
                { cancelable: false }
            )
        }
        this.setState({
                usedLetters:usedLetters,
                correct:correct,
                wrong:wrong,
                lettersLeft:lettersLeft,
                score:score
        });
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <HeaderFunction 
                    onPress={() => this.props.navigation.navigate("Home")}
                    text="Permainan"
                    scoreHeader={`Score: ${this.state.score}`}
                />
                <View>
                    <Text>Kamu masih punya {this.state.wrong} kesempatan lagi</Text>
                </View>
                <View style={styles.container}>
                    <View style={{marginTop: 50, justifyContent: "center", alignItems: "center"}}>
                        {this.renderDashes()}
                        <View style={styles.hintContainer}><Text style={styles.hintText}>Hint : {this.state.hint}</Text></View>
                        {this.renderKeyBoard()}
                    </View>
                </View>
            </View>
        )
    }
    renderDashes(){
        return(
            <View style={styles.dashes}>
                {this.state.lettersLeft.map((letter,index)=>{
                if(letter=="*"){
                    return (<View style={styles.dashItemContainer} key={index}><Text style={styles.dashBlankItem}>  </Text></View>)
                }else{
                    return(<View style={styles.dashItemContainer} key={index}><Text style={styles.dashItem}>{letter}</Text></View>)
                }
                })}
            </View>
        )
    }
    onKeyPress(letter){
        let usedLetters = this.state.usedLetters;
        if(usedLetters.indexOf(letter)==-1){
        this.validate(usedLetters,letter);
        }else{
        return;
        }
    }
    renderKeyBoard(){
        const keysRows = [
        ["Q","W","E","R","T","Y","U","I","O","P"],
        ["A","S","D","F","G","H","J","K","L"],
        [" ","Z","X","C","V","B","N","M"," "]]

    return(
        <View style={styles.keyboard}>
            {keysRows.map((keys,rowIndex)=>{
            return(
                <View key={rowIndex} style={styles.keyboardRow}>
                {keys.map((letter,index)=>{
                    if(letter==" "){
                    return <Text key={index}> </Text>
                    }else if(this.state.usedLetters.indexOf(letter)!=-1){
                    return <View style={styles.keyItem} key={index}><Text key={index} style={styles.usedKey}>{letter}</Text></View>
                    }else{
                    return <TouchableHighlight
                    onPress={this.onKeyPress.bind(this,letter)} style={styles.keyItem} key={index}><Text style={styles.letter}>{letter}</Text></TouchableHighlight>
                    }
                })}
                </View>
            )
            })}
        </View>
        )
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
        marginTop: 10,
        fontSize:18,
        textAlign:"right",
        fontWeight:"500",
        justifyContent:"center",
        width:"100%",
    }
});