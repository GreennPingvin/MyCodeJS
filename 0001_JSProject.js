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

const getDistance = ([x1, y1], [x2, y2]) => {
	const xs = x2 - x1;
	const ys = y2 - y1;

	return Math.sqrt(xs ** 2 + ys ** 2);
};

const getTheNearestLocation = (locations, currentCoordinates) => {
	if (locations.length === 0) return null;

	let nearestLocation = locations[1];
	const nearestLocationCoordinates = nearestLocation[1];
	let lowestDistance = getDistance(currentCoordinates, nearestLocationCoordinates);

	for (const location of locations) {
		const locationCoordinates = location[1];
		const distance = getDistance(currentCoordinates, locationCoordinates);
		if (distance < lowestDistance) {
			nearestLocation = location;
			lowestDistance = distance;
		}
	}
	return nearestLocation;
};

const getIntersectionOfSortedArrays = (arr1, arr2) => {
	const length1 = arr1.length;
	const length2 = arr2.length;

	let i = 0;
	let j = 0;
	const result = [];

	while (i < length1 && j < length2) {
		const firstItem = arr1[i];
		const secondItem = arr2[j];
		const lastCommon = result[result.length - 1];

		if (firstItem === secondItem && firstItem !== lastCommon) {
			result.push(firstItem);
			i += 1;
			j += 1;
		} else if (firstItem > secondItem) {
			j += 1;
		}	else {
			i += 1;
		}
		console.log(result);
	}
	return result;
};