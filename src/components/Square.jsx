export default function Square({ value, onValueChange }) {
	return (
		<button
			onClick={onValueChange}
			className="h-12 w-12 border border-gray-400"
		>
			{value}
		</button>
	);
}
