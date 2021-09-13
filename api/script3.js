import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m30s', target: 10 },
        { duration: '20s', target: 0 },
      ],
};
let url = 'http://computer-database.gatling.io';

export default function () {
    http.get(url + "/computers");
}