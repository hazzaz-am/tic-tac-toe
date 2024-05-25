import { useState } from "react";

function Square({ value, onValueChange }) {
	return (
		<button
			className="w-12 h-12 border border-gray-400 bg-white m-1 leading-9 text-lg"
			onClick={onValueChange}
		>
			{value}
		</button>
	);
}

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const winner = calculateWinner(squares);
	let status;

	if (winner) {
		status = `Winner: ${winner}`;
	} else {
		status = xIsNext ? "Next Player is X" : "Next Player is O";
	}

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		const nextSquares = squares.slice();

		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}

		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}
	return (
		<>
			<div>{status}</div>
			<div className="flex">
				<Square value={squares[0]} onValueChange={() => handleClick(0)} />
				<Square value={squares[1]} onValueChange={() => handleClick(1)} />
				<Square value={squares[2]} onValueChange={() => handleClick(2)} />
			</div>

			<div className="flex">
				<Square value={squares[3]} onValueChange={() => handleClick(3)} />
				<Square value={squares[4]} onValueChange={() => handleClick(4)} />
				<Square value={squares[5]} onValueChange={() => handleClick(5)} />
			</div>

			<div className="flex">
				<Square value={squares[6]} onValueChange={() => handleClick(6)} />
				<Square value={squares[7]} onValueChange={() => handleClick(7)} />
				<Square value={squares[8]} onValueChange={() => handleClick(8)} />
			</div>
		</>
	);
}

// Calculate Winner Function

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		console.log("a---", a, squares[a]);
		console.log("b---", b, squares[b]);
		console.log("c---", c, squares[c]);

		if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
