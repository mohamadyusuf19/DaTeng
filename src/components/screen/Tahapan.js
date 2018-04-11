import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import Header from '../common/Header';
import Modal from "react-native-modal";
const heightModal = Dimensions.get('window').height*0.85

export default class Tahapan extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  state = {
    data: [],
    visibleModal: null
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

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={{color: '#fff'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderClose = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonClose}>
        <Text style={{color: '#fff'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )

  _renderModalPersiapan = () => (
    <View style={styles.modalContent}>      
      <View style={styles.viewModal}>
        <View style={{paddingRight: 40}}><Text style={{color: '#000', fontSize: 20}}>Persiapan</Text></View>
        <View style={{paddingLeft: 40}}>{this._renderClose("Close", () => this.setState({ visibleModal: null }))}</View>
      </View>
      <FlatList
        ref='listRef'
        data={this.state.data.persiapan}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
        />
    </View>
  );

  _renderModalPenyelenggaraan = () => (
    <View style={styles.modalContent}>
      <View style={styles.viewModal}>
        <View style={{paddingRight: 40}}><Text style={{color: '#000', fontSize: 20}}>Penyelenggaraan</Text></View>
        <View style={{paddingLeft: 40}}>{this._renderClose("Close", () => this.setState({ visibleModal: null }))}</View>
      </View>
      <FlatList
        ref='listRef'
        data={this.state.data.penyelenggaraan}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
        />
    </View>
  );

  renderItem({item, index}) {
  
      return (     
          <View style={styles.row}>                                    
            <View>  
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

  render() {
    return (
      <View style={styles.container}> 
        <Header text="Tahapan"/>              
        <View style={styles.tahapan}> 
          <ScrollView>
            <View style={styles.tahapanSchedule}>                
                {this._renderButton("Persiapan", () =>
                  this.setState({ 
                    visibleModal: 1 
                  })
                )}              
                {this._renderButton("Penyelenggaraan", () =>
                  this.setState({ 
                    visibleModal: 2 
                  })
                )}              
            </View>          
          </ScrollView>                        
        </View>
        <Modal
          isVisible={this.state.visibleModal === 1}
          style={styles.bottomModal}          
        >
          {this._renderModalPersiapan()}
        </Modal>
        <Modal
          isVisible={this.state.visibleModal === 2}
          style={styles.bottomModal}          
        >
          {this._renderModalPenyelenggaraan()}
        </Modal>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   
  },
  tahapan: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 5,  
  },
  tahapanSchedule: {   
    height: 300,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#c1b4b9',
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 100,
    marginBottom: 10 
  },
  text: {
    color: '#fff',
    fontSize: 13,
  },
  button: {   
    backgroundColor: '#228cc1',
    padding: 12,
    margin: 16,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,    
  },
  buttonClose: {
    backgroundColor: "#c02d28",
    padding: 12,
    margin: 16,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "#fff",  
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: heightModal
  },
  bottomModal: {    
    margin: 0,
    paddingBottom: 0,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,           
  },   
  waktuAkhir: {
    height: 20,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
    width: 300,
    padding: 10,
    marginTop: 3,
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
    fontSize: 16
  },
  isiDeskripsi: {
    fontSize: 16,
    color: '#fff'
  },
  viewModal: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',      
  } 
})