import * as examples from './examples';

export default function() {
    // Given a[n|nother] "<example name>" flow
    this.Given(/^a(?:n|nother)? "([^"]*)" flow$/, (example_name) => {
        this.flows.push(examples[example_name]);
    });

    // When we run
    this.When(/^we run$/, () => {
        return this.run(this.state, this.flows);
    });
}
