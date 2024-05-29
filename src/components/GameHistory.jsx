/* eslint-disable react/prop-types */

export default function GameHistory({ moves }) {
	return (
		<div className="border border-gray-400 text-lg p-1 mt-4">
			<ol>{moves}</ol>
		</div>
	);
}
