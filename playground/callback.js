// exemple illustrant le mécanisme du callback

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Massimiliano Allegri'
    };

    // exécution synchrone, immédiate
    // callback(user);

    // exécution asynchrone
    setTimeout(() => {
        callback(user);
    }, 3000);
};

//var err = () => console.log('error');

//getUser(5, err);

getUser(5, (userObject) => {
    console.log(userObject);
});

console.log("merci");