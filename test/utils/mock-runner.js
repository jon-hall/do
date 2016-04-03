import RunnerBase from '../../src/runner-base.js';

export default class MockRunner extends RunnerBase {
    async run(prompts, state) {
        this.prompts = Array.isArray(prompts) ? prompts : [prompts];
        this.current = this.prompts.shift();
        this.state = state || {};
        this.waiter = new Promise(resolve => this.resolve = resolve);
        await this.waiter;
    }

    respond(value) {
        this.state[this.current.name] = value;

        if(!this.prompts.length) {
            return this.resolve(this.state);
        }

        this.current = this.prompts.shift();
    }
}
