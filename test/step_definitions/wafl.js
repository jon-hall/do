export default function() {
    // Given an "input" prompt for "text" [with message "xxx", with values "a,b,c" etc.]
    this.Given(/^an "([^"]*)" prompt for "([^"]*)"$/, (type, key, callback) => {
        this.prompts = this.prompts || [];
        this.prompts.push({
            type: type,
            name: key
        });
        callback();
    });

    this.When(/^wafl is run$/, (callback) => {
        this.flow = this.wafl(this.runner);
        this.flow.run(this.prompts);
        callback();
    });

    this.When(/^the user responds "([^"]*)"$/, (response, callback) => {
        this.runner.respond(response);
        callback();
    });

    this.Then(/^the output "([^"]*)" should be "([^"]*)"$/, (key, output, callback) => {
        this.expect(this.runner.state[key]).to.equal(output);
        callback();
    });
}
