// /* eslint-disable react/prop-types */
// import { useState } from "react";

import GameBoard from "./components/GameBoard";

// function Square({ value, onValueChange }) {
// 	return (
// 		<button
// 			className="w-16 h-16 border border-gray-400 bg-white m-1 leading-9 text-2xl font-bold"
// 			onClick={onValueChange}
// 		>
// 			{value}
// 		</button>
// 	);
// }

// // Game Board
// function Board({ xIsNext, squares, onPlay }) {
// 	const winner = calculateWinner(squares);
// 	let status;

// 	if (winner) {
// 		status = `Winner: ${winner}`;
// 	} else {
// 		status = "Next Player " + (xIsNext ? "X" : "O");
// 	}

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
// 		<>
// 			<h1 className="text-2xl font-bold mb-2">{status}</h1>
// 			<div className="flex">
// 				<Square value={squares[0]} onValueChange={() => handleClick(0)} />
// 				<Square value={squares[1]} onValueChange={() => handleClick(1)} />
// 				<Square value={squares[2]} onValueChange={() => handleClick(2)} />
// 			</div>

// 			<div className="flex">
// 				<Square value={squares[3]} onValueChange={() => handleClick(3)} />
// 				<Square value={squares[4]} onValueChange={() => handleClick(4)} />
// 				<Square value={squares[5]} onValueChange={() => handleClick(5)} />
// 			</div>

// 			<div className="flex">
// 				<Square value={squares[6]} onValueChange={() => handleClick(6)} />
// 				<Square value={squares[7]} onValueChange={() => handleClick(7)} />
// 				<Square value={squares[8]} onValueChange={() => handleClick(8)} />
// 			</div>
// 		</>
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
// 			<li className="bg-gray-700 text-white rounded-sm mb-1 p-1" key={move}>
// 				<button onClick={() => jumpTo(move)}>{description}</button>
// 			</li>
// 		);
// 	});

// 	return (
// 		<div className="flex justify-center items-start p-4 mt-12">
// 			{/* Game Board */}
// 			<div className="mr-16">
// 				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
// 			</div>

// 			{/* Game History */}
// 			<div className="border border-gray-400 text-lg p-1 mt-4">
// 				<ol>{moves}</ol>
// 			</div>
// 		</div>
// 	);
// }

// // Calculate Who is Winner
// function calculateWinner(squares) {
// 	const lines = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];

// 	for (let i = 0; i < lines.length; i++) {
// 		const [a, b, c] = lines[i];

// 		if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
// 			return squares[a];
// 		}
// 	}
// 	return null;
// }

export default function App() {
	return (
		<div className="p-4">
			<>
				<GameBoard />
			</>
			<div></div>
		</div>
	);
}
