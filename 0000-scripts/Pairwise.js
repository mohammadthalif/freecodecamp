function pairwise(arr, arg) {

    if (arr.length === 0) return 0;
    var i = 0,
        j = 0;
    var looper = [];
    var result = [];

    for (i = 0; i < arr.length; i++) {
        looper.push(i);
        result.push(0);
    }

    for (i = 0; i < arr.length; i++) {
        if (looper[i] != 'x') {
            //current index is not used
            for (j = 0; j < arr.length; j++) {
                if (looper[j] != 'x') {
                    if (j == i) {
                        //do nothing, just skip
                    } else {
                        //check
                        if ((arr[i] + arr[j]) == arg) {
                            looper[i] = looper[j] = 'x';
                            result.push(i);
                            result.push(j);
                            break;
                        }
                    }
                }
            }
        }
    }

    var out = 0;
    for (i = 0; i < result.length; i++) {
        out += result[i];
    }

    console.log(arr);
    console.log(looper);
    console.log(result);
    console.log(out);
    console.log('----------------------------');
    return out;
}

pairwise([1, 1, 1], 2);
