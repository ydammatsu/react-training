import React from 'react';
import { Player } from '../types/Player'
import { Square } from '../components/Square'

type BoardProps = {
  squares: Player[];
  onClick: (i :number) => void;
};

export const Board: React.FC<BoardProps> = ({squares, onClick}) => {
  return (
    <div>
      {[...Array(3)].map((_, i) => {
        return (
          <div className="board-row" key={i}>
            {[...Array(3)].map((_, j) => {
              const index = 3 * i + j;
              return (
                <Square
                  value={squares[index]}
                  onClick={() => onClick(index)}
                  key={j}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
