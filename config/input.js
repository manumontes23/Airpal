/**
 * Input for DB connection should be in format password=@pass user=@user
 */

const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key;
        return args;
    }, {});

module.exports = args;