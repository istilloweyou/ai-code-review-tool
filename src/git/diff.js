exports.getDiff = async function() {
    const { exec } = require('child_process');
    const util = require('util');
    const execPromise = util.promisify(exec);

    try {
        const { stdout } = await execPromise('git diff master...HEAD');
        return stdout;
    } catch (error) {
        console.error('Error retrieving code changes:', error);
        throw new Error('Failed to get code differences');
    }
};