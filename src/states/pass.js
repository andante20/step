

function pass(name, spec, input) {
    const { Result = input } = spec;
    return Promise.resolve(Result);
}

module.exports = pass;
