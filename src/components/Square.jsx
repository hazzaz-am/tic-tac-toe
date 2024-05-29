/* eslint-disable react/prop-types */
export default function Square({ value, onValueChange }) {
	return (
		<button
			onClick={onValueChange}
			className="h-16 w-16 border border-gray-400 text-2xl font-semibold"
		>
			{value}
		</button>
	);
}
