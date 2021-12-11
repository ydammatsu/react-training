import React from 'react';
import { Player } from '../types/Player';

export type StartProps = {
  setPlayer: (player: Player) => void;
};

export const Start: React.FC<StartProps> = ({setPlayer}) => {
  return (
    <>
      <div>
        Select a player.
      </div>
      <button onClick={() => setPlayer('X')} style={{marginTop: "10px", marginRight: "10px"}}>
        X
      </button>
      <button onClick={() => setPlayer('O')}>
        O
      </button>
    </>
  );
};
