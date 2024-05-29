// function Board({ xIsNext, squares, onPlay }) {
// 	const winner = calculateWinner(squares);

// 	function handleClick(i) {
// 		if (squares[i] || calculateWinner(squares)) {
// 			return;
// 		}
// 		const nextSquares = squares.slice();
// 		if (xIsNext) {
// 			nextSquares[i] = "X";
// 		} else {
// 			nextSquares[i] = "O";
// 		}
// 		onPlay(nextSquares);
// 	}
// 	return (
// 		<Square value={squares[6]} onValueChange={() => handleClick(6)} /
// 	);
// }

// // Play Game
// export default function Game() {
// 	const [history, setHistory] = useState([Array(9).fill(null)]);
// 	const [xIsNext, setXIsNext] = useState(true);
// 	const [currentMove, setCurrentMove] = useState(0);

// 	const currentSquares = history[currentMove];

// 	function handlePlay(nextSquares) {
// 		setXIsNext(!xIsNext);
// 		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
// 		setHistory(nextHistory);
// 		setCurrentMove(nextHistory.length - 1);
// 	}

// 	function jumpTo(move) {
// 		setCurrentMove(move);
// 		setXIsNext(move % 2 === 0);
// 	}

// 	const moves = history.map((squares, move) => {
// 		let description;
// 		if (move > 0) {
// 			description = `Go to the move # ${move}`;
// 		} else {
// 			description = `Go to start the game`;
// 		}
// 		return (
// 		<li className="bg-gray-700 text-white rounded-sm mb-1 p-1" key={move}>
// 			<button onClick={() => jumpTo(move)}>{description}</button>
// 		</li>
// 		);
// 	});

// 	return (

// 		<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

// 	<ol>{moves}</ol>

// 	);
// }
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameHistory from "./components/GameHistory";

export default function App() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [xIsNext, setXisNext] = useState(true);
	const [currentMove, setCurrentMove] = useState(0);

	const currentSquares = history[currentMove];

	const handlePlay = (newSquares) => {
		setXisNext(!xIsNext);
		const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const goToHistoryNum = (move) => {
		setCurrentMove(move);
		setXisNext(move % 2 === 0);
	};

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = `Go to move # ${move}`;
		} else {
			description = `Go to start the Game`;
		}

		return (
			<li className="bg-gray-700 text-white rounded-sm mb-1 p-1" key={move}>
				<button onClick={() => goToHistoryNum(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="p-4 flex gap-10 items-start justify-center">
			<div>
				<GameBoard
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
				/>
			</div>
			<div>
				<GameHistory moves={moves} />
			</div>
		</div>
	);
}
