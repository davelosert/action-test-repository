import { describe, it, expect } from 'vitest';
import { sum } from './file';

describe('file', () => {
  it('sum 1+1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
