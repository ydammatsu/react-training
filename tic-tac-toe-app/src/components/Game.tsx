import { Board } from '../components/Board'
import { History } from '../components/History'
import { Start }  from './Start'
import { useGame } from '../hooks/useGame'

export const Game: React.FC = () => {
  const {
    player,
    xIsNext,
    moveHistory,
    currentMove,
    winner,
    setPlayer,
    handleNextMove,
    jumpTo
  } = useGame();

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentMove.squares}
          onClick={(i) => handleNextMove(i)}
        />
      </div>
      <div className="game-info">
        {
          player
            ? 
              <History
                xIsNext={xIsNext}
                moveHistory={moveHistory}
                winner={winner}
                jumpTo={jumpTo}
              />
            : 
              <Start
                setPlayer={setPlayer}
              />
        }
      </div>
    </div>
  );
};
