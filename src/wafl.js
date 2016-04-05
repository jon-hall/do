import RunnerBase from './runner-base.js';

class Wafl {
    constructor(runner) {
        if(!(runner instanceof RunnerBase)) {
                throw new TypeError('Runner must be an instance of RunnerBase.');
        }

        this.runner = runner;
    }

    async run(flow) {
        // TODO:
        return this.runner.run(flow);
    }
}

export default function(runner) {
    return new Wafl(runner);
}
