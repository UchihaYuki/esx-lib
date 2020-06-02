import '../src/index';
import { assert } from 'chai';

describe("test math", function() {

    it("randomInt", function() {
        const ranges = [
            [0, 100],
            [-100, 0],
            [-100, 100]
        ]

        for (let range of ranges) {
            for (let i = 0; i < 1e6; ++i) {
                const r = Math.randomInt(range[0], range[1])
                assert(range[0] <= r && r < range[1]);
            }
        }
    });
})