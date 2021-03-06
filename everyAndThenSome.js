var every = function every (arr, predicate) {
        var i;
        for (i = 0; i < arr.length; i++) {
            if (!predicate(arr[i])) return false;
        };
        return true;
    },
    some = function some (arr, predicate) {
        var i;
        for (i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) return true;
        };
        return false;
    };
