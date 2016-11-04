/* function to swap array elements */
function swap(v, i, j) {
    var t;

    t = v[i];
    v[i] = v[j];
    v[j] = t;
}

/* recursive function to generate permutations */
function perm(v, n, i) {

    /* this function generates the permutations of the array
     * from element i to element n-1
     */
    var j = 0;

    /* if we are at the end of the array, we have one permutation
     * we can use (here we print it; you could as easily hand the
     * array off to some other function that uses it for something
     */
    if (i == n) {
        //console.log(v);
        garr.push(v.join(''));
    } else
    /* recursively explore the permutations starting
     * at index i going through index n-1
     */
        for (j = i; j < n; j++) {

        /* try the array with i and j switched */
        swap(v, i, j);
        perm(v, n, i + 1);

        /* swap them back the way they were */
        swap(v, i, j);
    }
}


function sameChar(str) {
    var arr = str.split('');
    var ret = 0;

    for (var i = 0; i < (arr.length - 1); i++) {
        if (arr[i] !== arr[i + 1]) {
            ret = 1;
        }
    }

    return ret;
}

var garr = [];
function permAlone(str) {

    var ret = 0, count = 0;
    garr = [];
    //if there is only on char, ret 1
    if (str.length == 1) {
        ret = 1;
    } else if (0 === sameChar(str)) {
        ret = 0;
    } else {
        //generate the combination here
        perm(str.split(''), str.length, 0);
        //console.log('------------------' + garr.length);
        //console.log(garr);

        for(var i = 0; i < garr.length; i++) {
            if(!(/([a-zA-Z])\1/).test(garr[i])) {
                count++;
            }
        }
        console.log('count -----------'+count);
    //    var a = (/([a-zA-Z])\1/).test('ccb') ;
    //    console.log(a);
        ret = count;
    }



    return ret;
}

permAlone('aab');
