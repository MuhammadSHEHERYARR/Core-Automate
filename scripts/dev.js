const { spawn } = require('child_process');
const path = require('path');

// Start Next.js dev server
const nextDev = spawn('npx', ['next', 'dev', '--port', '3001'], {
    stdio: 'inherit',
    shell: true
});

// Wait for 3 seconds to ensure the server is up, then open browser
setTimeout(() => {
    const openCli = spawn('npx', ['open-cli', 'http://localhost:3001'], {
        stdio: 'inherit',
        shell: true
    });
}, 3000);

// Handle process termination
process.on('SIGINT', () => {
    nextDev.kill('SIGINT');
    process.exit(0);
}); 