/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   scenarios: {
//     constant_request_rate: {
//       executor: 'constant-arrival-rate',
//       rate: 500,
//       timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
//       duration: '10s',
//       preAllocatedVUs: 1000, // how large the initial pool of VUs would be
//       maxVUs: 1500, // if the preAllocatedVUs are not enough, we can initialize more
//     },
//   },
// };

export const options = {
  stages: [
    { duration: '1m', target: 200 },
    { duration: '2m', target: 200 },
    { duration: '1m', target: 400 },
    { duration: '2m', target: 400 },
    { duration: '1m', target: 500 },
    { duration: '2m', target: 500 },
    { duration: '1m', target: 600 },
    { duration: '2m', target: 600 },
    { duration: '1m30s', target: 800 },
    { duration: '3m', target: 800 },
    { duration: '2m', target: 1000 },
    { duration: '4m', target: 1000 },
    { duration: '2m', target: 1200 },
    { duration: '5m', target: 1200 },
    { duration: '2m', target: 1400 },
    { duration: '5m', target: 1400 },
    { duration: '8m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const id = (Math.floor(Math.random() * (10000000 - 8500000 + 1)) + 8500000);
  const res = http.get(`http://localhost:8003/reviewsItem/${id}`);
  check(res, {
    'status was 200': (r) => r.status === 200,
  });
  sleep(1);
}
