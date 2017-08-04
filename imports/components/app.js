import React, { Component } from 'react';
import TitleBar from './titleBar';
import AddPlayer from './addPlayer';
import PlayerList from './playerList';

class App extends Component {
    render(){
        return(
            <div>
                <TitleBar title={this.props.title} subtitle={this.props.subtitle} />
                <div className="wrapper">
                    <PlayerList players={this.props.players} />
                    <AddPlayer />
                </div>
            </div>
        );
    }
};

export default App;