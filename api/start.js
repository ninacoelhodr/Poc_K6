import http from "k6/http";
import { sleep, check } from "k6";
import runTestOne from "./script.js";
import runTestTwo from "./script2.js";
import runTestThree from "./script3.js";
export let options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m30s', target: 10 },
        { duration: '20s', target: 0 },
      ],
};

export default function() {
    runTestOne();
    runTestTwo();
    runTestThree();
};