interface String {
    readonly first: string;
    readonly last: string;
}

Object.defineProperty(String.prototype, "last", {
    get: function () {
        return this[this.length - 1]
    }
});

Object.defineProperty(String.prototype, "first", {
    get: function () {
        return this[0]
    }
});