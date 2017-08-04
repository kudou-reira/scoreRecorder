import React, { Component } from 'react';
import {Players} from './../../imports/api/players';

class Player extends Component{

    constructor(props){
        super(props);

//        this.increment.bind(this);
//        this.decrement.bind(this);
//        this.remove.bind(this);
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

    render(){
        const itemAddOn = 'item item--position-' + this.props.player.rank;
        return(
            <div key={this.props.player._id} className={itemAddOn} >
                <div className="player">
                    <div>
                        <h3 className="player__name">{this.props.player.name}</h3>
                        <p className="player__stats">
                            {this.props.player.position} {this.props.player.score} point(s).
                        </p>
                    </div>
                    <div className="player__actions">
                        <button className="button button--round" onClick={() => this.increment(this.props.player._id)}>+1</button>
                        <button className="button button--round"  onClick={() => this.decrement(this.props.player._id)}>-1</button>
                        <button className="button button--round" onClick={() => this.remove(this.props.player._id)}>X</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
