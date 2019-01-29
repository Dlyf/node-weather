var asyncAdd = (a, b) => {
    // return a + b; retour immédiat synchrone
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Les arguments doivent être des nombres');
            }
        }, 3000) 
    });
};

var promise1 = asyncAdd(5,12);
var promise2 = asyncAdd(2,3);
var promise3 = asyncAdd(2,'z');


promise3
    .then(res => console.log(res))
    .catch(err => console.log(err))
    ;