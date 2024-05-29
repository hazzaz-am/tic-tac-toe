/* eslint-disable react/prop-types */
import { chooseWinner } from "../utilities/winner";
import Square from "./Square";

export default function GameBoard({ xIsNext, squares, onPlay }) {
	const winner = chooseWinner(squares);
	let status;

	if (winner) {
		console.log("winner");
		status = `Winner is: ${winner}`;
	} else {
		status = `Next Player is: ${xIsNext ? "X" : "O"}`;
	}

	const handleChangeValue = (i) => {
		if (squares[i] || chooseWinner(squares)) {
			return;
		}
		const newSquares = squares.slice();
		if (xIsNext) {
			newSquares[i] = "X";
		} else {
			newSquares[i] = "O";
		}
		onPlay(newSquares);
	};

	return (
		<>
			<h1 className="mb-2 text-2xl font-semibold">{status}</h1>
			<div className="flex">
				<Square value={squares[0]} onValueChange={() => handleChangeValue(0)} />
				<Square value={squares[1]} onValueChange={() => handleChangeValue(1)} />
				<Square value={squares[2]} onValueChange={() => handleChangeValue(2)} />
			</div>
			<div className="flex">
				<Square value={squares[3]} onValueChange={() => handleChangeValue(3)} />
				<Square value={squares[4]} onValueChange={() => handleChangeValue(4)} />
				<Square value={squares[5]} onValueChange={() => handleChangeValue(5)} />
			</div>
			<div className="flex">
				<Square value={squares[6]} onValueChange={() => handleChangeValue(6)} />
				<Square value={squares[7]} onValueChange={() => handleChangeValue(7)} />
				<Square value={squares[8]} onValueChange={() => handleChangeValue(8)} />
			</div>
		</>
	);
}
