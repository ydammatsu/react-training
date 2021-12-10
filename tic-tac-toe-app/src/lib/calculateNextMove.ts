import { Player } from '../types/Player'

export const calculateNextMove = (board: Player[]): number => {
  // TODO: ランダムだと同じ箇所にコンピューターが打とうとするので直す。
  return (Math.floor(Math.random() * 9))
};
