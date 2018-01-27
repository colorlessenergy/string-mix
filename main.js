// first working go

//psuedo code...

// remove all special characters

// then start...

// 1. loop through the string and store each letter that is lowercase... 
    // 1a. the storing should in the same objects one for every letter..
// 2. after looping and the objects are filled respectively. 
//    check if the length of each prop:value is length > 1;
//    if it isn't length > 1 remove it from the object..
// 3. starting the checks and entering it into the string..
//    3a. alphabetize the letters
// 4. loop through the object and check if the current letter is in both sentences
//    4a if they both have it and one is bigger return the length of the bigger one and push that amount of that letter
//       into the finalString.
//    4b. if they are both the same length return the number with a =:n ; n = current amount of letters
//

function mix(s1, s2) {

    console.log(s1, "string2: " + s2)

    var finalStr = "";
    // remove all unnecessary characters in the string..
    s1 = s1.replace(/[^a-z]/gi, '');
    s2 = s2.replace(/[^a-z]/gi, '');

    var letterOccurrenceInSentences = {};

    // moves all the occurrence of every letter into a object with two properties


    countLetterOccurrence(s1, letterOccurrenceInSentences, 'first');
    countLetterOccurrence(s2, letterOccurrenceInSentences, 'second');

    // now need to check each value length if greater than 1, if it isn't remove it from the object

    // i dont think we need to actually check if it is bigger than one...

    // when doing the final check i can just only count it if is bigger than one...

    // console.log("first string " + s1, "second string " + s2)
    // for (var key in letterOccurrenceInSentences) {
    //     if (letterOccurrenceInSentences.hasOwnProperty(key)) {
    //         console.log(letterOccurrenceInSentences)
    //     }
    // }

    // starting to insert the maxium of letters into a string..

    console.log(letterOccurrenceInSentences);

    for (var key in letterOccurrenceInSentences) {
            if (
                letterOccurrenceInSentences[key].first > letterOccurrenceInSentences[key].second ||
                letterOccurrenceInSentences[key].second == undefined) {
                if (trueString(letterOccurrenceInSentences[key].first)) {
                    finalStr += "1:"
                    for (var i = 0; i < letterOccurrenceInSentences[key].first; i++) {
                        finalStr += key;
                    }
                    finalStr += "/"
                }
            } else if (letterOccurrenceInSentences[key].first < letterOccurrenceInSentences[key].second ||
                letterOccurrenceInSentences[key].first == undefined) {
                if (trueString(letterOccurrenceInSentences[key].second)) {
                    finalStr += "2:"
                    for (var j = 0; j < letterOccurrenceInSentences[key].second; j++) {
                        finalStr += key;
                    }
                    finalStr += "/"
                }
            } else if (letterOccurrenceInSentences[key].first == letterOccurrenceInSentences[key].second) {
                if (letterOccurrenceInSentences[key].first !== 1 && letterOccurrenceInSentences[key].second !== 1) {
                    finalStr += "=:"
                    for (var k = 0; k < letterOccurrenceInSentences[key].first; k++) {
                        finalStr += key;
                    }
                    finalStr += "/"
                }
            }            
    }

    finalStr = finalStr.split("/").sort(function (a, b) {
        if (b.length === a.length) {
            return (a > b ? 1 : -1);
        } else {
            return b.length - a.length;
        }
    }).join("/");

    // remove the last slash...
    finalStr = finalStr.slice(0, -1);
    console.log(finalStr);

    return console.log(finalStr);

  }

function countLetterOccurrence (str, obj, whichSent) {
    str.split("").forEach(function (current) {
        if (!(obj[current]) && current.toLowerCase() === current) {
            obj[current] = {};
        }

        if (current.toLowerCase() === current && obj[current][whichSent]) {
            obj[current][whichSent] += 1;
        } else if (current.toLowerCase() === current) {
            obj[current][whichSent] = 1;
        }
    });

}

function trueString (a) {
    if (a > 1) {
        return true;
    }

    return false;
}

mix(" In many languages", " there's a pair of functions");
// "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")


// 1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt