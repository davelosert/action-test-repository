import { describe, it, expect } from 'vitest';
import { sum, sub } from './file';

describe('file', () => {
  it('sum 1+1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });


  // minor change
  it('sum 1+2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

	it('sub 1-1 = 0', () => {
		expect(sub(1, 1)).toBe(0);
	});

});
