import '../src/index';
import { assert } from 'chai';

describe("test array", function() {

    it("first", function() {
        const a = [1, 2, 3];

        assert(a.first == 1);

        a.first = 0;

        assert(a.first == 0);
    });

    it("last", function() {
        const a = [1, 2, 3];

        assert(a.last == 3);

        a.last = 0;

        assert(a.last == 0);
    });

    it("swap", function() {
        const a = [1, 2, 3];
        a.swap(0, 2)

        assert(a.join("") == "321");
    });

});