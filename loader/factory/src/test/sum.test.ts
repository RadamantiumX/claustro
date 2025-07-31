import { sum } from "./sum";

import {expect, test} from 'vitest';

test('expect sum be correct', ()=>{
    expect(sum(1,2)).toBe(3)
})