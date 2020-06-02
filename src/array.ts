interface Array<T> {
    first: T | undefined;
    last: T | undefined;
    swap(position1: number, position2: number): void;
}

Object.defineProperty(Array.prototype, "first", {
    get: function () {
        return this[0]
    },
    set: function (v) {
        this[0] = v;
    }
});

Object.defineProperty(Array.prototype, "last", {
    get: function () {
        return this[this.length - 1]
    },
    set: function (v) {
        this[this.length - 1] = v;
    }
});

Array.prototype.swap = function(position1, position2) {
    const t = this[position1];
    this[position1] = this[position2];
    this[position2] = t;
}