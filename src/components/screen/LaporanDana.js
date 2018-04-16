import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import HeaderFunction from '../common/HeaderFunction'
import _ from 'lodash';
const imageWidth = Dimensions.get('window').width*0.85
const imageHeight = Dimensions.get('window').height*0.4
export default class LaporanDana extends Component {
    state = {
        data: []
    }

    componentWillMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch('http://api.pemiluapi.org/pilgubjateng/api/v1/danapaslon')
        .then((res) => res.json())
        .then((data) => this.setState({
            data,
        }))
        .catch((error) => console.log('error'))
    }

        render() {   
        const dataCalon = _.get(this.props.navigation.state, 'params.detail');
        const dataState = this.state.data;
        const dataFilter = this.state.data.filter(item => item.nama_kepala_daerah == dataCalon);
        console.log(dataFilter);
        const callData = () => {
            return (
                <FlatList
                    data={dataFilter}                                             
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>
            )
        }
            
        return(
                <View style={styles.container}>
                    <HeaderFunction 
                    onPress={() => this.props.navigation.goBack()}
                    text="Laporan Dana Paslon"
                    />
                    {callData()}          
                </View>      
            )
        }
        renderItem = ({item, index}) => {
            return(
                <View>
                    <View style={styles.column}>    
                        <View style={styles.main}>
                            <View style={styles.profil}>
                                <Text style={{color: '#fff', fontSize: 14}} >Dana Kampanye</Text>                     
                            </View>                                                   
                            <Text style={styles.textCenter}>NAMA : {item.nama_kepala_daerah}</Text>
                            <Text style={styles.textCenter}>NAMA WAKIL : {item.nama_wakil_kepala_daerah}</Text>
                            <Text style={styles.textCenter}>TANGGAL PENYERAHAN : {item.tanggal_penyerahan}</Text>
                            <Text style={styles.textCenter}>WAKTU PENYERAHAN : {item.waktu_penyerahan}</Text>
                            <Text style={styles.textCenter}>LAPORAN AWAL DANA KAMPANYE : {item.laporan_awal_dana_kampanye}</Text>
                        </View>                                     
                    </View>  
                </View>        
            )
        }

    }



const styles = StyleSheet.create({
  container: {
      flex: 1,        
  },
  column: {
      flexDirection: 'column',      
      alignItems: 'center',
  },
  main: {   
      height: imageHeight, 
      width: imageWidth,         
      borderRadius: 10,
      backgroundColor: '#383838', 
      marginTop: 10,       
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
      backgroundColor: '#e66225',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
  }
});









// render() {   
//     const filterData = this.state.data.filter(item => item.nama_wakil_kepala_daerah == "H. TAJ YASIN")
//     return(
//         <FlatList 
//             data={filterData}
//             keyExtractor={item => item.toString()}
//             renderItem={({item}) => <Text>{item.nama_wakil_kepala_daerah}</Text>}
//         />   
//     )

// }

// console.log(this.props.navigation.state.params.detail[0] === "KARANGANYAR") 
// const data0 = this.state.data[0];
// const data1 = this.state.data[1];
// console.log(data0)

// const callData = () => {
//     if(this.props.navigation.state.params.detail[0] === "KARANGANYAR") {
//         return(
//             <FlatList
//             data={[data0]}                                             
//             renderItem={this.renderItem}
//             keyExtractor={(item, index) => index.toString()}/> 
//         )
//     }
//     return (
//         <FlatList
//             data={[data1]}                                             
//             renderItem={this.renderItem}
//             keyExtractor={(item, index) => index.toString()}/>
//     )
// }

// return(
//   <View style={styles.container}>
//       <HeaderFunction 
//         onPress={() => this.props.navigation.goBack()}
//         text="Laporan Dana Paslon"
//       />
//         {callData()}          
//   </View>      
// )
// }
// renderItem = ({item}) => {
// return(
//     <View>
//         <View style={styles.column}>    
//             <View style={styles.main}>
//                 <View style={styles.profil}>
//                     <Text style={{color: '#fff', fontSize: 14}} >Dana Kampanye</Text>                     
//                 </View>                       
//                 <Text style={styles.textCenter}>NAMA : </Text>                                    
//                 {/* <Text style={styles.textCenter}>NAMA WAKIL : {item.nama_wakil_kepala_daerah}</Text>
//                 <Text style={styles.textCenter}>tanggal_penyerahan : {item.tanggal_penyerahan}</Text>
//                 <Text style={styles.textCenter}>waktu_penyerahan : {item.waktu_penyerahan}</Text>
//                 <Text style={styles.textCenter}>laporan_awal_dana_kampanye : {item.laporan_awal_dana_kampanye}</Text>                                                                                                           */}
//             </View>                                     
//         </View>  
//     </View>        
// )
// }


