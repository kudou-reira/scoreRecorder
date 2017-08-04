import React, { Component } from 'react';
import {Players} from './../../imports/api/players';

class AddPlayer extends Component{
    
    handleSubmit = (e) => {
        e.preventDefault();
        //target is the form
        let playerName = e.target.playerName.value;

        //reset form
        if(playerName){
            e.target.playerName.value = '';
        }

        Players.insert({
            name: playerName,
            score: 0
        });
    }

    render(){
        return(
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name="playerName" placeholder="player name" />
                    <button className="button">Add player</button>
                </form>
            </div>
        );
    }
};

export default AddPlayer;