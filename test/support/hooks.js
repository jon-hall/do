export default function() {
    /*eslint-disable no-unused-vars*/
    this.Before((scenario) => {
        this.flows = [];
        this.plugins_unregisters = [];
    });

    this.After((scenario) => {
        this.plugins_unregisters.forEach(unregister => unregister());
    });
    /*eslint-enable no-unused-vars*/
}
