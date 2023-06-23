
const alphabet_object = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z'
}

function print_encoding(str, res = "") {

    console.log(str, res);
    const firstLetter = str.charAt(0)
    if (firstLetter !== '') {
        return print_encoding(str, res + alphabet_object[firstLetter]);
    } else if (firstLetter === '') {
        console.log(res);
        return
    }


    if (str.length >= 2) {
        const firstTwo = str.substring(0, 2)
        if (alphabet_object[+firstTwo]) {


            return  print_encoding(str.substring(2), res + alphabet_object[+firstTwo]);

     
        }
    }

    return
}


console.log(print_encoding('123'));