import httpProxy from "http-proxy"
import fs from "fs"

let [listenPort, targetPort] = process.argv[2].split(":")

console.log("🖖 Starting ssl-proxy " + [listenPort, targetPort].join(":"))

// https://www.npmjs.com/package/http-proxy

const sslProxy = httpProxy.createServer({
    target: {
        host: 'localhost',
        port: targetPort
    },
    ssl: {
        key: fs.readFileSync('localhost.key', 'utf8'),
        cert: fs.readFileSync('localhost.crt', 'utf8')
    }
})

sslProxy.listen(listenPort)
