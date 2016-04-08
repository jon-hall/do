// Simple flow just demonstrates awaiting and adds b to a
export default async function(state) {
    // Wait on something
    await new Promise(resolve => setTimeout(resolve));

    // Manipulate state
    state.a += state.b;
}
