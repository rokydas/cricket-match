import React, { useState } from 'react';
import players from '../fakeData/fakeData';
import Player from '../Player/Player';

const Home = () => {

    const [addedPlayers, setAddedPlayers] = useState([]);

    const handleAddedPlayer = (player) => {
        const newPlayers = [...addedPlayers, player];
        setAddedPlayers(newPlayers);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                            players.map(player => <Player handleAddedPlayer={handleAddedPlayer} player={player} key={player.id} />)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <ol>
                        {
                            addedPlayers.map(player => <li>{`${player.name} - ${player.salary}`}</li>)
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Home;