import RunnerBase from '../../src/runner-base.js';

export default class MockRunner extends RunnerBase {
    async run(prompts, state = {}) {
        this.prompts = Array.isArray(prompts) ? prompts : [prompts];
        this.state = state;
        return new Promise(resolve => this.resolve = resolve);
    }

    respond(value) {
        // Respond to next prompt by setting state
        const responded = this.prompts.shift();
        this.state[responded.name] = value;

        // And resolve when no more prompts to respond to
        if(!this.prompts.length) {
            return this.resolve(this.state);
        }
    }
}
