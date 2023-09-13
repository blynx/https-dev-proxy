## Start Proxy

- install node packages `npm install` if not done yet (http-proxy has few dependencies. Thats nice.)
- start proxy `npm start <listening port>:<target port>` or just `node proxy.js <port>:<port>`
    - e.g. `npm start 8080:9000`
- visit "securely" `https://localhost:8080`

Or start multiple proxys like so: `(trap 'kill 0' SIGINT; node proxy.js 8081 & node proxy.js 8082:9000)`  
From https://stackoverflow.com/a/52033580/3004669 👍

## Make cert/key

Already provided. Yet, you may be interested in:

- Now, simply: https://letsencrypt.org/docs/certificates-for-localhost/
- Previously, still interesting: https://blog.arrogantrabbit.com/ssl/Root-CA-macOS/
