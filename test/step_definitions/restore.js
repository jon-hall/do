import { restore } from '../../src/plugins/';

export default function() {
    this.When(/^we have a restore point "([^"]*)"$/, (restore_point) => {
        this.flows.push(restore.save(restore_point));
    });

    this.When(/^we have a step which sets state to "([^"]*)"$/, (state) => {
        /*eslint-disable no-unused-vars*/
        // A simple step which assigns the specified properties onto state
        this.flows.push(s => eval(`for(let prop in ${state}) { s[prop] = (${state})[prop]; }`));
        /*eslint-enable no-unused-vars*/
    });

    this.When(/^we have a step which restores to point "([^"]*)"$/, (restore_point) => {
        this.flows.push(() => restore.reset(restore_point));
    });
}
