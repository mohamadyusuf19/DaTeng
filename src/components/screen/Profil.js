import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions} from 'react-native';
import HeaderFunction from '../common/HeaderFunction'
import _ from 'lodash'
const imageWidth = Dimensions.get('window').width*0.85

export default class Profil extends Component {
  render() {
    console.log(this.props.navigation.state.params.detail)
    return(
      <View style={styles.container}>
          <HeaderFunction 
            onPress={() => this.props.navigation.goBack()}
            text="Profile Paslon"
          />
          <View style={styles.column}>    
              <View style={styles.main}>
                    <View style={styles.profil}>
                      <Text style={{color: '#fff', fontSize: 14}} >PROFIL CAGUB</Text>                     
                    </View>                       
                    <Text style={styles.textCenter}>NAMA : {this.props.navigation.state.params.detail[0]}</Text>                   
                    {/* <Text style={styles.textCenter}>Gender : </Text>                      
                    <Text style={styles.textCenterProfil}>{_.startCase(_.toLower(this.props.navigation.state.params.detail[1]))}</Text>   
                    <Text style={styles.textCenter}>Tempat Lahir : </Text>                     
                    <Text style={styles.textCenterProfil}>{_.startCase(_.toLower(this.props.navigation.state.params.detail[2]))}</Text> */}
                    <Text style={styles.textCenter}>GENDER : {this.props.navigation.state.params.detail[1]}</Text>                                            
                    <Text style={styles.textCenter}>TEMPAT LAHIR : {this.props.navigation.state.params.detail[2]}</Text>                                         
                    <Text style={styles.textCenter}>TANGGAL LAHIR : {this.props.navigation.state.params.detail[3]}</Text>                                           
                    <Text style={styles.textCenter}>PEKERJAAN : {this.props.navigation.state.params.detail[4]}</Text>                                           
              </View>                       
              <View style={styles.main}>
                    <View style={styles.profil}>
                      <Text style={{color: '#fff', fontSize: 14}} >PROFIL CAWAGUB</Text>                     
                    </View>                       
                    <Text style={styles.textCenter}>NAMA : {this.props.navigation.state.params.detail[5]}</Text>                    
                    {/* <Text style={styles.textCenter}>Gender : </Text>                      
                    <Text style={styles.textCenterProfil}>{_.startCase(_.toLower(this.props.navigation.state.params.detail[1]))}</Text>   
                    <Text style={styles.textCenter}>Tempat Lahir : </Text>                     
                    <Text style={styles.textCenterProfil}>{_.startCase(_.toLower(this.props.navigation.state.params.detail[2]))}</Text> */}
                    <Text style={styles.textCenter}>GENDER : {this.props.navigation.state.params.detail[6]}</Text>                                          
                    <Text style={styles.textCenter}>TEMPAT LAHIR : {this.props.navigation.state.params.detail[7]}</Text>                                         
                    <Text style={styles.textCenter}>TANGGAL LAHIR : {this.props.navigation.state.params.detail[8]}</Text>                                           
                    <Text style={styles.textCenter}>PEKERJAAN : {this.props.navigation.state.params.detail[9]}</Text>                                           
              </View>
          </View>                   
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',           
  },
  column: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  main: {   
      elevation: 3,
      height: '43%', 
      width: imageWidth,         
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20,
      backgroundColor: '#383838',   
      margin: 5, 
      paddingLeft: 15,
      paddingTop: 15,      
  },
  images: {        
      height: 180, 
      width: 180,
      borderRadius: 90,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
  },    
  centerButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',         
      padding: 5,
  },
  textCenter: {
      fontSize: 14,
      color: '#fff',
      margin: 7
  },   
  profil: {
      height: 20,
      width: 120,
      borderRadius: 5,
      marginLeft: 78,
      backgroundColor: '#e66225',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
  }
});