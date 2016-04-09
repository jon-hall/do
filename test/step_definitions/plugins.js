import * as plugins from '../../src/plugins/';

export default function() {
    // Given we use the "restore" plugin
    this.Given(/^we use the "([^"]*)" plugin$/, (plugin) => {
        this.plugins_unregisters.push(this.run.use(plugins[plugin]));
    });
}
