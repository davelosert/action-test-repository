import { describe, it, expect } from 'vitest';
import { sum, sub } from './file';

describe('file', () => {
  it('sum 1+1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

	it('sub 1-1 = 0', () => {
		expect(sub(1, 1)).toBe(0);
	});
});
