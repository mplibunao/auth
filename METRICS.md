
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v14.16.1`
* __Run:__ Sun Mar 20 2022 08:30:24 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                         | startup(ms) | listen(ms) |
| -                       | -           | -          |
| gateway-service-1.js    | 265.00      | 314.85     |
| gateway-service-2.js    | 235.28      | 283.54     |
| gateway-with-auth.js    | 260.27      | 279.89     |
| gateway-without-auth.js | 235.03      | 254.18     |
| normal-with-auth.js     | 259.90      | 304.28     |
| normal-without-auth.js  | 236.43      | 279.95     |
