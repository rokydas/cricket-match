import React from 'react';
import './Player.css';

const Player = ({ player, handleAddedPlayer }) => {
    const { id, name, img, salary, designation } = player;
    return (
        <div className="p-5 col-md-4">
            <div className="player-box shadow rounded">
            <img className="img-fluid" src={img} alt=""/>
            <h3>{name}</h3>
            <h4>{designation}</h4>
            <p>Salary: {salary}</p>
            <button onClick={() => handleAddedPlayer(player)} className="btn btn-success">Add Me</button>
        </div>
        </div>
    );
};

export default Player;