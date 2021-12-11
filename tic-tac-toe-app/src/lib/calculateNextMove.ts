import { Player } from '../types/Player'

// TODO: training3 にて負けない手を出力するようにする
export const calculateNextMove = (squares: Player[]): number => {
  const nullSquareIndex: number[] = [];
  squares.forEach((player, index) => {
    if (player) { return }
    nullSquareIndex.push(index);
  });
  const nextMove = nullSquareIndex[Math.floor(Math.random() * nullSquareIndex.length)];
  return (nextMove);
};
