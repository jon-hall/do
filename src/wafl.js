export default function(runner) {
    return new Wafl(runner);
}

class Wafl {
    constructor(runner) {
        // TODO: Validation etc.
        this.runner = runner;
    }

    async run(flow) {
        // TODO:
        return this.runner.run(flow);
    }
}
