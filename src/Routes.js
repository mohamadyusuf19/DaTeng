import React, { Component } from 'react';
import { Image } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import Calon from './components/screen/Calon'
import Tips from './components/screen/Tips';
import Pilkada from './components/screen/Pilkada';
import Profil from './components/screen/Profil';
import VisiMisi from './components/screen/VisiMisi'
import Anggaran from './components/screen/Anggaran';
import Tahapan from '../src/components/screen/tahapan/Tahapan';
import Voting from './components/screen/Voting';
import Persiapan from '../src/components/screen/tahapan/Persiapan';
import Penyelenggaraan from '../src/components/screen/tahapan/Penyelenggaraan';
import Home from './components/screen/Home';
import LaporanDana from './components/screen/LaporanDana';
import HomeChat from './components/screen/HomeChat';
import Channels from './components/screen/Channels';
import Chat from './components/screen/Chat';

const Navigasi = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Pilkada: {
      screen: Pilkada,
      navigationOptions: {
        title: "PILKADA",        
      },
    },
    Profil: {
      screen: Profil,
      navigationOptions: {
        header: null,        
      },
    },
    VisiMisi: {
      screen: VisiMisi,
      navigationOptions: {
        header: null,        
      },
    },       
    Anggaran: {
      screen: Anggaran,
      navigationOptions: {
        title: "Anggaran",        
      },
    },
    Tahapan: {
      screen: Tahapan,
      navigationOptions: {
        title: "Tahapan",
        // headerTintColor: '#fff',  
        // headerStyle: {
        //   backgroundColor: '#37474F'
        // }
      },
    },   
    Persiapan: {
      screen: Persiapan,
      navigationOptions: {
        header: null
      },
    },
    Penyelenggaraan: {
      screen: Penyelenggaraan,
      navigationOptions: {
        header: null
      },
    },
    Paslon: { 
      screen: Calon, 
      navigationOptions: {
        header: null
      },
    },
    LaporanDana: {
      screen: LaporanDana,
      navigationOptions: {
        header: null
      }
    },
    Tahapan: { 
      screen: Tahapan 
    },
    Voting: { 
      screen: Voting,
      navigationOptions: {
        header: null
      } 
    },
    Diskusi: { 
      screen: HomeChat,
      navigationOptions: {
        header: null
      }
    },
    Wacana: { 
      screen: Tips,
      navigationOptions: {
        header: null
      } 
    },
    Channel: {
      screen: Channels,
      navigationOptions : {
        header: null
      }
    },
    Chating : {
      screen : Chat,
      navigationOptions :{
        header: null
      }
    }    
});

export default Navigasi