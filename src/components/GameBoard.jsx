import { useState } from "react";
import { chooseWinner } from "../utilities/winner";
import Square from "./Square";

export default function GameBoard() {
	const [history, setHistory] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);

	const winner = chooseWinner(history);
	let status;

	if (winner) {
        console.log('winner')
		status = `Winner is: ${winner}`;
	} else {
		status = `Next Player is: ${xIsNext ? "X" : "O"}`;
	}

	const handleChangeValue = (i) => {
		const squares = history.slice();
		if (squares[i] || chooseWinner(history)) {
			return;
		}
		if (xIsNext) {
			squares[i] = "X";
		} else {
			squares[i] = "O";
		}

		setXisNext(!xIsNext);
		setHistory(squares);
	};

	return (
		<>
			<div>{status}</div>
			<div className="flex">
				<Square value={history[0]} onValueChange={() => handleChangeValue(0)} />
				<Square value={history[1]} onValueChange={() => handleChangeValue(1)} />
				<Square value={history[2]} onValueChange={() => handleChangeValue(2)} />
			</div>
			<div className="flex">
				<Square value={history[3]} onValueChange={() => handleChangeValue(3)} />
				<Square value={history[4]} onValueChange={() => handleChangeValue(4)} />
				<Square value={history[5]} onValueChange={() => handleChangeValue(5)} />
			</div>
			<div className="flex">
				<Square value={history[6]} onValueChange={() => handleChangeValue(6)} />
				<Square value={history[7]} onValueChange={() => handleChangeValue(7)} />
				<Square value={history[8]} onValueChange={() => handleChangeValue(8)} />
			</div>
		</>
	);
}
