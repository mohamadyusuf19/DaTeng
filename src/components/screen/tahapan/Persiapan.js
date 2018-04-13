import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Header from '../../common/Header';
const imageWidth = Dimensions.get('window').width

export default class Persiapan extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    state = {
      data: []
    }

    componentWillMount() {
      this.fetchData()
    }

    fetchData = () => {
      fetch('http://api.pemiluapi.org/pilgubjateng/api/v1/tahapanpilgub')
      .then((res) => res.json())
      .then((data) => this.setState({
        data,
      }))
      .catch((error) => console.log('error'))
    }

    render() {       
        return (
            <View style={styles.container}>                                    
                <FlatList
                    ref='listRef'
                    data={this.state.data.persiapan}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>                    
            </View>
        );
    }

    renderItem({item, index}) {
      
        return (     
            <View style={styles.row}>                           
              {/* <View style={styles.center}>  
                <View style={styles.garisAtas}/>        
                <TouchableOpacity style={styles.titik}>  
                    <Text style={styles.text}>{index + 1}</Text>                            
                </TouchableOpacity>
                <View style={styles.garis}/>                                                          
              </View> */}
              <View style={{marginTop: 15}}>  
                <View style={styles.waktuAkhir}>
                  <Text style={styles.isi}>{item.tgl_awal}    s/d    {item.tgl_akhir}</Text>
                </View>              
                <View style={styles.deskripsi}>                  
                  <Text style={styles.isiDeskripsi}>{item.detail}</Text>
                </View>                
              </View>                            
            </View>          
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,          
      justifyContent: 'center',
      alignItems: 'center',  
    },
    row: {
      flexDirection: 'row',          
    },   
    waktuAkhir: {
      height: 20,
      width: 250,
      borderRadius: 15,
      backgroundColor: '#e66225',
      justifyContent: 'center',
      alignItems: 'center',
    },
    garis: {
      height: 150,
      width: 2,
      backgroundColor: '#9099a8',
      marginRight: 30, 
    },
    garisAtas: {
        height: 15,
        width: 2,
        backgroundColor: '#9099a8',
        marginRight: 30, 
    },
    deskripsi: {
      height: 100,
      width: 250,
      marginTop: 10,
      padding: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,            
      backgroundColor: '#383838',   
    },
    titik: {
      backgroundColor: '#c02d28',
      height: 20,
      width: 20,
      borderRadius: 10, 
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 30

    },
    center: {
      alignItems: 'center',
    },
    isi: {
      color: '#fff',
      fontSize: 13
    },
    isiDeskripsi: {
      fontSize: 16,
      color: '#fff'
    },       
});
