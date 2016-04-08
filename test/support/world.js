import { expect } from 'chai';
import { run } from '../../src/wafl.js';

export default function() {
    this.run = run;
    this.expect = expect;
}
