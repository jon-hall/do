import wafl from '../../src/wafl.js';
import MockRunner from '../utils/mock-runner.js';

export default function() {
    this.wafl = wafl;
    this.MockRunner = MockRunner;
    this.expect = require('chai').expect;
};
