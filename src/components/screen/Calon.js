import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Header from '../common/Header'
import Modal from "react-native-modal";
import _ from 'lodash';

const imageWidth = Dimensions.get('window').width

export default class Calon extends Component {    
    state = {
        data: [],  
        isLoading: true,
        visibleModal: null     
    };

    componentWillMount() {
       this.fetchData();
    }
        
    fetchData = () => {               
        fetch('http://api.pemiluapi.org/pilgubjateng/api/v1/profilpaslon')
        .then((response) => response.json())
        .then((data) => this.setState({ 
            data,
            isLoading: false,
            loadingHeight: 0,
         }))
        .catch((error) => console.log('error'))
    }   

    
    showProfile(indexDetail) {
        console.log(indexDetail);
        //<DetailNewsView detail={indexDetail}/>
        this.props.navigation.navigate('Profil', {detail: indexDetail})
    }

    showVisiMisi(indexDetail) {
        this.props.navigation.navigate('VisiMisi', {detail: indexDetail})
    }  
    
    showLaporan(indexDetail) {
        this.props.navigation.navigate('LaporanDana', {detail: indexDetail})
    }  

    render() {    
        return (
            <View>
                <Header 
                  text="Paslon"
                />       
                <ActivityIndicator
                        color='#009688'
                        size='large'
                        style={styles.ActivityIndicatorStyle}
                        animating={this.state.isLoading}/>    
                <FlatList
                    ref='listRef'
                    data={this.state.data}                                             
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}/>                                                                                
            </View>                               
        );
    } 
    
    renderItem = ({item, index}) => {
        return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.column}>                
                        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 3}}>
                            <Text style={{fontSize: 18, color: 'white'}}>Pasangan Calon Nomor Urut {(parseInt(index) + 1)}</Text>    
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 30}}>                                                      
                                    <Text style={styles.textCenter}>{item.nama_kepala_daerah}</Text>                                   
                                    <Text style={styles.textCenter}>&</Text>                                    
                                    <Text style={styles.textCenter}>{item.nama_wakil_kepala_daerah}</Text>                                    
                        </View>               
                        <View style={styles.centerButton}>
                            <TouchableOpacity style={styles.contactProfile} onPress={()=>this.showProfile([
                                item.nama_kepala_daerah,
                                item.gender_kepala_daerah,
                                item.tempat_lahir_kepala_daerah,                            
                                item.tanggal_lahir_kepala_daerah,
                                item.pekerjaan_kepala_daerah,
                                item.nama_wakil_kepala_daerah,
                                item.gender_wakil_kepala_daerah,
                                item.tempat_lahir_wakil,
                                item.tanggal_lahir_wakil,
                                item.pekerjaan_wakil_kepala_daerah,
                             ])}>
                                <Text style={{color: '#fff'}}>Profile</Text>
                            </TouchableOpacity> 
                            <TouchableOpacity style={styles.contact} onPress={()=>this.showVisiMisi([
                               { title: 'Misi', data: item.visimisi.misi},
                               { title: 'Program', data: item.visimisi.program},
                               { title: 'Detail', data: item.visimisi.detail},
                               { title: 'Visi', data: item.visimisi.visi}
                            ])}>
                                <Text style={{color: '#fff'}}>Visi Misi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contactProfile} onPress={()=>this.showLaporan([
                                item.nama_kepala_daerah, 
                            ])}>                           
                                <Text style={{color: '#fff'}}>Laporan Dana</Text>
                            </TouchableOpacity>                                  
                                 
                        </View>
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
        justifyContent: 'center',
    },
    column: {
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        elevation: 3,
        height: 220, 
        width: '90%',         
        borderRadius: 10,
        backgroundColor: '#383838',   
        margin: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 16,
        color: '#fff'
    },
    contactProfile: {
        height: 27,
        width: 100,      
        borderRadius: 5,
        backgroundColor: '#e66225',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contact: {
        height: 27,
        width: 100,       
        borderRadius: 5,
        backgroundColor: '#e66225',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: "white",      
        height: 500,        
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },    
    ActivityIndicatorStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'    
    },   
});

// _renderButton = (text, onPress) => (
//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.button}>
//         <Text style={{color: '#fff'}}>{text}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// fetchDana = () => {
//     fetch('http://api.pemiluapi.org/pilgubjateng/api/v1/danapaslon')
//     .then((res) => res.json())
//     .then((dana) => this.setState({
//         dana,
//     }))
//     .catch((error) => console.log('error'))
//  }

// {this._renderButton("Penyelenggaraan", () =>
// this.setState({ 
//     visibleModal: 2 
// })
// )}   

// <Modal
// isVisible={this.state.visibleModal === 2}
// style={styles.bottomModal}   
// onSwipe={() => this.setState({ visibleModal: null })}
// swipeDirection="down"       
// >
// {_renderModalPenyelenggaraan()}
// </Modal>
// const dataState =  this.state.data.filter(item => item.nama_kepala_daerah);
// const dataFilter = this.state.dana.filter(item => item.nama_kepala_daerah);
// const DataFix = (dataState == dataFilter);
// console.log(dataState)
// const  _renderModalPenyelenggaraan = () => (
//       <View style={styles.modalContent}>
//         <View style={styles.viewModal}>
//           <View style={{paddingRight: 40}}><Text style={{color: '#000', fontSize: 20}}>Penyelenggaraan</Text></View>
//         </View>
//         <FlatList
//           ref='listRef'
//           data={this.state.dana}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={this.renderItemDana}
//           />
//       </View>
//     );
// renderItemDana = ({item, index}) => {
//     return(
//         <View>
//             <View style={styles.column}>    
//                 <View style={styles.main}>
//                     <View style={styles.profil}>
//                         <Text style={{color: '#fff', fontSize: 14}} >Dana Kampanye</Text>                     
//                     </View>                                                   
//                     <Text style={styles.textCenter}>NAMA : {item.nama_kepala_daerah}</Text>
//                     <Text style={styles.textCenter}>NAMA WAKIL : {item.nama_wakil_kepala_daerah}</Text>
//                     <Text style={styles.textCenter}>TANGGAL PENYERAHAN : {item.tanggal_penyerahan}</Text>
//                     <Text style={styles.textCenter}>WAKTU PENYERAHAN : {item.waktu_penyerahan}</Text>
//                     <Text style={styles.textCenter}>LAPORAN AWAL DANA KAMPANYE : {item.laporan_awal_dana_kampanye}</Text>
//                 </View>                                     
//             </View>  
//         </View>        
//     )
// }