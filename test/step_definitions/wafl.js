export default function() {
    const self = this;

    // Given an "input" prompt for "text" [with message "xxx", with values "a,b,c" etc.]
    this.Given(/^an "([^"]*)" prompt for "([^"]*)"$/, function(type, key, callback) {
        self.prompts = self.prompts || [];
        self.prompts.push({
            type: type,
            name: key
        });
        callback();
    });

    this.When(/^wafl is run$/, function(callback) {
        self.flow = self.wafl(self.runner);
        self.flow.run(self.prompts);
        callback();
    });

    this.When(/^the user responds "([^"]*)"$/, function(response, callback) {
        self.runner.respond(response);
        callback();
    });

    this.Then(/^the output "([^"]*)" should be "([^"]*)"$/, function(key, output, callback) {
        self.expect(self.runner.state[key]).to.equal(output);
        callback();
    });
};
