const plugins = [];

async function run(state, flows) {
    for(let flow of flows) {
        flow = await process_plugins(flow, state);

        // Run the flow
        await flow(state);

        // Allow post processing
        await process_plugins(flow, state, true);
    }
}

// Pass flow and state through all plugins, plugins are free to return a new flow object
async function process_plugins(flow, state, post) {
    for(let plugin of plugins) {
        if(post && typeof plugin.post === 'function') {
            // Post-processing has no need to replace 'flow', and is done using a property of the pugin fn
            await plugin.post(flow, state);
            continue;
        }

        // Whatever a plugin returns will replace 'flow', unless it returns falsey, then 'flow' remains
        flow = (await plugin(flow, state)) || flow;
    }

    return flow;
}

run.use = function use(plugin) {
    plugins.push(plugin);

    // Return unregister function
    return () => plugins.splice(plugins.indexOf(plugin), 1);
}

export default run;
