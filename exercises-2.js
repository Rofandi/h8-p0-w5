function changeVocals (str) {
    var changedVocals = '';
    for(let i=0; i<str.length; i++)
    {
        switch(str[i])
        {
            case 'a': changedVocals += 'b'; break;
            case 'i': changedVocals += 'j'; break;
            case 'u': changedVocals += 'v'; break;
            case 'e': changedVocals += 'f'; break;
            case 'o': changedVocals += 'p'; break;
            case 'A': changedVocals += 'B'; break;
            case 'I': changedVocals += 'J'; break;
            case 'U': changedVocals += 'V'; break;
            case 'E': changedVocals += 'F'; break;
            case 'O': changedVocals += 'P'; break;
            default: changedVocals += str[i]; break;
        }
    }
    return changedVocals;
}

function reverseWord (str) {
    var reversedWord = '';
    for(let i=str.length-1; i>=0; i--)
    {
        reversedWord += str[i];
    }
    return reversedWord;
}

function setLowerUpperCase (str) {
    var lowerUpperCased = '';
    for(let i=0; i<str.length; i++)
    {
        if(str[i] === str[i].toUpperCase())
        {
            lowerUpperCased += str[i].toLowerCase();
        }
        else
        {
            lowerUpperCased += str[i].toUpperCase();
        }
    }
    return lowerUpperCased;
}

function removeSpaces (str) {
    var removedSpaces = '';
    for(let i=0; i<str.length; i++)
    {
        if(str[i]===' ')
        {
            removedSpaces += '';
        }
        else
        {
            removedSpaces += str[i];
        }
    }
    return removedSpaces;
}

function passwordGenerator (name) {
    var changedVocals = changeVocals(name);
    var reversedWord = reverseWord(changedVocals);
    var lowerUpperCased = setLowerUpperCase(reversedWord);
    var removedSpaces = removeSpaces(lowerUpperCased);
    if(removedSpaces.length<5)
    {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    return removedSpaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'