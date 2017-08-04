import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import {Players, calcPlayerPosition} from './../imports/api/players';
import App from './../imports/components/app'

Meteor.startup(() => {

    Tracker.autorun(() => {
        const players = Players.find({}, {
            sort: {
                score: -1
            }
        }).fetch();
      
        let positionedPlayers =  calcPlayerPosition(players);
        let title = 'Point Keeper';
        let subtitle = 'created by kudou reira';

        ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers} />, document.getElementById('app'));
    });
});
