import * as examples from './examples';

export default function() {
    // Given a[n|nother] "<example name>" flow
    this.Given(/^a(?:n|nother)? "([^"]*)" flow$/, (example_name, callback) => {
        this.flows.push(examples[example_name]);
        callback();
    });

    // When we run it with "<state object>" state
    this.When(/^we run it with "([^"]*)" state$/, (state, callback) => {
        this.state = eval('this.state = ' + state);
        this.run(this.state, this.flows)
            .then(callback, callback);
    });

    // Then it should set "<property>" to "<value>" on state
    this.Then(/^it should set "([^"]*)" to "([^"]*)" on state$/ , (property, value, callback) => {
        this.expect(this.state[property]).to.equal(eval(value));
        callback();
    });
}
