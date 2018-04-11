import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Discus from './pages/Discus';
import Home from './pages/Home';

const DiskusiScreen = StackNavigator({
 home: {screen: Home},
 discus: {screen: Discus},
});

module.exports = DiskusiScreen
