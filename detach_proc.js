async function runDetached(command) {
    let stuf = command.split(' ')

    let cmd = stuf[0]
    
    stuf.shift();

    const child = spawn(cmd, stuf.join(' '), {
        detached: true,
        stdio: 'ignore'  // Ignore stdio so the child process runs independently
    });
}

module.exports = { runDetached }