const snapshots = {};

let state_ref;
async function restore(flow, state) {
    // TODO: Track all flows which pass through, allowing us to 'rewind' to any restore
    // point in terms of both state AND flows

    // Keep an up-to-date reference to state, so we can restore
    state_ref = state;
}

restore.save = function(restore_point) {
    return (state) => {
        // Snapshot state against restore_point
        snapshots[restore_point] = Object.assign({}, state);
    };
};

restore.reset = function(restore_point) {
    // Reset state back to restore point
    let previous_state = snapshots[restore_point];

    if(!previous_state) {
        // TODO: Debug logging
        /*eslint-disable no-console*/
        console.warn(`Invalid restore point requested (${restore_point})`);
        /*eslint-enable no-console*/
        return;
    }

    // Blank out state ref
    for(let prop in state_ref) {
        delete state_ref[prop];
    }

    // Then assign-in from previous_state
    Object.assign(state_ref, previous_state);

    // TODO: Return the flow at which to resume execution
};

export default restore;
