const sort = (arr) => {
	if (arr.length < 2) return arr;

	let stepsCount = arr.length - 1;
	let swapped = false;
	do {
		swapped = false;
		for (let i = 0; i < stepsCount; i += 1) {
			if (arr[i + 1] < arr[i]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
		stepsCount -= 1;
	} while (swapped);

	return arr;
};

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (str) => {
	const stack = [];
	for (const char of str) {
		if (openingSymbols.includes(char)) {
			stack.push(char);
		} else {
			const openingSymbol = stack.pop();
			const closingSymbol = closingSymbols[openingSymbols.indexOf(openingSymbol)];

			if (closingSymbol !== char) {
				return false;
			}
		}
	}

	return stack.length === 0;
};