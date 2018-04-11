import React, { Component } from 'react';
import { Image } from 'react-native'
import BottomNavigation, { Tab,  NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Calon from './components/screen/Calon'
import DiskusiScreen from '../src/components/screen/diskusi/index';
import Tips from './components/screen/Tips';
import Pilkada from './components/screen/Pilkada';
import Profil from './components/screen/Profil';
import VisiMisi from './components/screen/VisiMisi'
import Anggaran from './components/screen/Anggaran';
import Partisipasi from './components/screen/Partisipasi';
import Tahapan from '../src/components/screen/tahapan/Tahapan';
import Voting from './components/screen/Voting';
import Persiapan from './components/screen/Persiapan';
import Penyelenggaraan from './components/screen/Penyelenggaraan';
import Header from './components/common/Header';

const TabNav = TabNavigator(
  {
    Paslon: { screen: Calon },
    Tahapan: { screen: Tahapan },
    Voting: { screen: Voting },
    Diskusi: { screen: DiskusiScreen },
    Wacana: { screen: Tips },    
  },
  {
    swipeEnabled: false,
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'black',
        backgroundColor: 'red',
        rippleColor: 'white',
        tabs: {
          Paslon: {
            barBackgroundColor: '#fff',
            labelColor: 'black',
            icon: <Image source={require('./icon/avatar.png')} style={{ height: 18, width: 18}}/>
          },
          Tahapan: {
            barBackgroundColor: '#fff',
            labelColor: 'black',
            icon: <Image source={require('./icon/calendar.png')}style={{ height: 18, width: 18}} />
          },
          Diskusi: {
            barBackgroundColor: '#fff',
            labelColor: 'black',
            icon: <Image source={require('./icon/speech-bubble.png')} style={{ height: 18, width: 18}} />,
            badgeSize: 20,
            isBadgeVisible: true
          },
          Wacana: {
            barBackgroundColor: '#fff',
            labelColor: 'black',
            icon: <Image source={require('./icon/lightbulb.png')} style={{ height: 18, width: 18}} />
          },
          Voting: {
            barBackgroundColor: '#fff',
            labelColor: 'black',
            icon: <Image source={require('./icon/elections.png')} style={{ height: 20, width: 20}} />
          },
        }
      }
    }
  }
)

const Navigasi = StackNavigator({
    Home: {
      screen: TabNav,
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
    Partisipasi: {
      screen: Partisipasi,
      navigationOptions: {
        title: "Partisipasi",
        // headerTintColor: '#fff',  
        // headerStyle: {
        //   backgroundColor: '#37474F'
        // }
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
    Header: {
      screen: Header,
      navigationOptions: {
        header: null
      },
    },
});

export default Navigasi