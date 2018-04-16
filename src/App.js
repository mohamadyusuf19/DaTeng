import React from 'react';
import Navigasi from './Routes';
import Backend from './Backend';
import Store from './Store'

class App extends React.Component {
    constructor(props) {
        super(props)
        Backend.init()
        Backend.setStore(Store)
    }
    render() {
        return (
            <Navigasi />
        )
    }
}

export default App;
