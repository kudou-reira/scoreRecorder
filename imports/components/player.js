import React, { Component } from 'react';
import {Players} from './../../imports/api/players';

class Player extends Component{

    constructor(props){
        super(props);

        this.state = {
            editName: false,
            tempId: ''
        }

        this.handleSubmit.bind(this);
        this.renameClick.bind(this);
    }

    increment = (id) => {
        Players.update({_id: id}, {$inc: {score: 1}});
    }

    decrement = (id) => {
        Players.update({_id: id}, {$inc: {score: -1}});
    }

    remove = (id) => {
        Players.remove({_id: id})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //target is the form
        let playerName = e.target.playerName.value;

        // console.log(this.props.player._id);

        Players.update({_id: this.props.player._id}, {$set: {name: playerName}});
        this.setState({editName: !this.state.editName});
    }

    renameClick = () => {
        this.setState({editName: !this.state.editName});
    }

    renderPlayerName = (id) => {

        if(this.state.editName === false){
            return(
                <h3 className="player__name">{this.props.player.name}</h3>
            );
        }

        else if(this.state.editName === true){
            return(
                <form className="form" onSubmit={this.handleSubmit}>
                       <input className="form__input--rename" type="text" ref="singleName" name="playerName" placeholder="player name" defaultValue={this.props.player.name} />
                       <button className="button--rename">Rename</button>
                </form>
            );
        }
    }

    render(){
        const itemAddOn = 'item item--position-' + this.props.player.rank;
        return(
            <div key={this.props.player._id} className={itemAddOn} >
                <div className="player">
                    <div>
                        {this.renderPlayerName(this.props.player._id)}
                        <p className="player__stats">
                            {this.props.player.position} {this.props.player.score} point(s).
                        </p>
                    </div>
                    <div className="player__actions">
                        <button className="button button--round" onClick={() => this.increment(this.props.player._id)}>+1</button>
                        <button className="button button--round"  onClick={() => this.decrement(this.props.player._id)}>-1</button>
                        <button className="button button--round" onClick={() => this.remove(this.props.player._id)}>X</button>
                        <button className="button button--round" onClick={this.renameClick}>e</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
