import { assert } from 'chai';

describe("test string", function() {

    it("first", function() {
        const s = "abc";

        assert(s.first == "a")
    });

    it("last", function() {
        const s = "abc";

        assert(s.last == "c");
    });

});