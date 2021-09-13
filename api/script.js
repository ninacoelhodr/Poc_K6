import http from 'k6/http';
import { check} from 'k6';
import env from '../environments/environment';

const url = env.url

export let options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m30s', target: 10 },
        { duration: '20s', target: 0 },
      ],
};

export default function () {
  let res = http.get(url);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'body size is 1176 bytes': (r) => r.body.length == 1176,
  });
}