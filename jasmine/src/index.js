Object.assign(String.prototype, {
    hasVowel() {
        return /[aeiou]/ig.test(this);
    }
});

Object.assign(String.prototype, {
    toUpper() {
        var uc = '';
        for(i = 0; i < this.length; i++) {
            uc += String.fromCharCode(this.charCodeAt(i) & 223); 
        }
        return uc;
    }
});

Object.assign(String.prototype, {
    toLower() {
        // create a result variable
        var lc = '';

        for (var i = 0; i < this.length; i++) {
            // get the code of the current character
            var code = this.charCodeAt(i);

            //if character is within the range of the capital letter
            //add to 'lc' the uppercase of the character (by adding 32 to its code)
            //else just add the character
            lc += (code > 64 && code < 91) ? String.fromCharCode(code + 32) : this.charAt(i);
        }
        return lc;
    }
});

Object.assign(String.prototype, {
    ucFirst() {
        //the substr function outputs the substring from the first argument 
        //index to the last argument index
        return this.charAt(0).toUpper() + this.substr(1, this.length);
    }
});

Object.assign(String.prototype, {
    isQuestion() {
        //first trim the sting to remove white space(s)
        //then run the test of '?' at the end of the string if
        //the string lenght is greater than 1 to prevent approving '?' as a question
        return (this.trim().length > 1) ? /\?$/.test(this) : false;
    }
});

Object.assign(String.prototype, {
    words() {
        return this.split(/\s/);
    }
});

Object.assign(String.prototype, {
    wordCount() {
        return this.words().length;
    }
});

//extra function
//commaFormat
Object.assign(String.prototype, {
    commaFormat() {
        var first = this.substr(0, this.length % 3);

        if (this.length > 3) { //if it need the ','
            for (var i = this.length % 3; i < this.length; i += 3) {
                first += ',' + this.substr(i, 3);
            }
        }
        //check for ',' at the begining of string
        return (first.charAt(0) == ',') ? first.substr(1, first.length) : first;
        }
});

//reverseString
Object.assign(String.prototype, {
    reverseString() {
        return this.split('').reverse().join('');
    }
});

//ucCount() to return the number of uppercases in a string
Object.assign(String.prototype, {
    ucCount() {
        return this.match(/[A-Z]/g).length;
    }
});
//end extra function


Object.assign(String.prototype, {
    toCurrency() {
        var str = this.split('.')[0]; //the string before the any available ','
        //concatenate currency with remain part of string
        return str.commaFormat() + '.' + this.split('.')[1];
    }
});

Object.assign(String.prototype, {
    fromCurrency() {
        return Number(this.split(',').join(''));
    }
});

Object.assign(String.prototype, {
    isDigit() {
        return (this.trim().length == 1) ? /\d/.test(this) : false;
    }
});

