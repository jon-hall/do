export default function() {
    // When we run it with "<state object>" state
    this.When(/^we set state to "([^"]*)"$/, (state) => {
        eval(`this.state = ${state}`);
    });

    // Then it should set "<property>" to "<value>" on state
    this.Then(/^it should set "([^"]*)" to "([^"]*)" on state$/ , (property, value) => {
        this.expect(this.state[property]).to.equal(eval(value));
    });

    // Then state should equal "<value>"
    this.Then(/^state should equal "([^"]*)"$/ , (value) => {
        let expected;
        eval(`expected = ${value}`);
        this.expect(this.state).to.deep.equal(expected);
    });
}
