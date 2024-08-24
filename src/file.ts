// Add something!
function sum(a: number, b: number): number {
  return a + b;
};

function sub(a: number, b: number): number {
	if(b === 0) {
		return a;
	}

	return a - b;
};

function mult(a: number, b: number): number {
	return a * b;
};

export { sum, sub, mult };
