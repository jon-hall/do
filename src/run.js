export default async function run(state, flows) {
    for(let flow of flows) {
        await flow(state);
    }
}
