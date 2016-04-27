import { restore } from '../../src/plugins/';

export default function() {
    this.When(/^we have a restore point "([^"]*)"$/, (restore_point) => {
        this.flows.push(restore.save(restore_point));
    });

    this.When(/^we have a step which sets state to "([^"]*)"$/, (state) => {
        // A simple step which assigns the specified properties onto state
        // Uses eval, rather than JSON.parse, so we don't have to write JSON in specs
        let parsed;
        eval(`parsed = ${state}`);
        this.flows.push(s => Object.assign(s, parsed));
    });

    this.When(/^we have a step which restores to point "([^"]*)"$/, (restore_point) => {
        this.flows.push(() => restore.reset(restore_point));
    });
}
