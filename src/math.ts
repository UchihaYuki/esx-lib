interface Math {
    /** Returns a pseudorandom integer between start (include) and end (exclude). */
    randomInt(start: number, end: number): number;
}

Math.randomInt = function (start: number, end: number) {
    return Math.floor(start + Math.random() * (end - start))
}