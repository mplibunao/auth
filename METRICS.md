
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v14.16.1`
* __Run:__ Sun Mar 20 2022 10:29:21 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                         | startup(ms) | listen(ms) |
| -                       | -           | -          |
| gateway-with-auth.js    | 237.77      | 255.90     |
| gateway-without-auth.js | 219.35      | 237.27     |
| normal-with-auth.js     | 243.50      | 285.85     |
| normal-without-auth.js  | 221.59      | 261.86     |
