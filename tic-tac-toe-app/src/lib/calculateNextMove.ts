import { Player } from '../types/Player'

export const calculateNextMove = (squares: Player[]): number => {
  const nullSquareIndex: number[] = [];
  squares.forEach((player, index) => {
    if (player) { return }
    nullSquareIndex.push(index);
  });
  const nextMove = nullSquareIndex[Math.floor(Math.random() * nullSquareIndex.length)];
  return (nextMove);
};
