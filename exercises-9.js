function cariPelaku(str) {
    var regex = /abc/;
    var counter = 0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i]==='a')
        {
            if(regex.test(str[i]+str[i+1]+str[i+2])===true)
            {
                counter++;
            }
        }
    }
    return counter;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2