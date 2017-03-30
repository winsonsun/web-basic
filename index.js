var Promise = require("bluebird");

function myAsyncFunction(arg1, arg2, cb) {
    // async things
    cb(false, { data: 123 });
}

myAsyncFunction(10, 99, function onComplete(error, data) {
    if (!error) {
        // hooray, everything went as planned
    } else {
        // disaster - retry / respond with an error etc
    }
});


var loaded = new Promise(function(resolve, reject) {
/*    Promise.delay(500).then(function() {
        console.log("500 ms passed");
        resolve();
        return;
    });
*/

    setTimeout(function(){
        //resolve("Success!"); // Yay! Everything went well!
        reject("Failed!");
        a=1;
    }, 250);

    });

loaded.then(function(message) {
    // window is loaded here
    console.log("loaded is called." + message);
}).
catch(function(reason) {
    console.log("found failed error! " + reason);
});