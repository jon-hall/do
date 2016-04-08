export default function() {
    this.Before((scenario, callback) => {
        this.flows = [];
        callback();
    });

    this.After((scenario, callback) => {
        callback();
    });
}
