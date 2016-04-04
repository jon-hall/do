export default function() {
    this.Before((scenario, callback) => {
        this.runner = new this.MockRunner();
        callback();
    });

    this.After((scenario, callback) => {
        callback();
    });
}
