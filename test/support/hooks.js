export default function() {
    const self = this;

    this.Before(function(scenario, callback) {
        self.runner = new self.MockRunner();
        callback();
    });

    this.After(function(scenario, callback) {
        callback();
    });
}
