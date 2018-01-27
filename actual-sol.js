// after looking at other solution...

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function mix(s1, s2) {
    return alphabet
            .map(function (char) {
                // this map see if the both sentences include any letters and removes the letters not in the alphabet
                // we get the length
                var s1Count = s1.split('').filter(function (x) {
                    return x === char;
                }).length,
                s2Count = s2.split('').filter(function (x) {
                    return x === char
                }).length,
                // get the max one from both length;
                maxCount = Math.max(s1Count, s2Count);
                // return some data so we can use it later
            return {
                char: char,
                count: maxCount,
                src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
            }
        }).filter(function (c) {
            // removes any number that is less than one
            return c.count > 1;
        }).sort(function (objA, objB) {
            // orders the object by length.. then orders it by alphabetical/digit order..
            return objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1)
        }).map(function (c) {
            // evaluates the expression to repeat the letter and adds a colon
            return `${c.src}:${c.char.repeat(c.count)}`
        }).join("/");
}

console.log(mix(" In many languages", " there's a pair of functions"))
// "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")