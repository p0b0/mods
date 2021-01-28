const async = require('async');

const funcOne = (callback) => {
    setTimeout(()=> {
        console.log("executed after 500milisec");
        callback(null, 'sending to the general callback from first function');
    }, 500);
};


const funcTwo = (callback) => {
    setTimeout(()=> {
        console.log("executed after 200milisec");
        callback(null, 'sending to the general callback from second function');
    }, 200);
};

const functions = [funcOne, funcTwo];

async.parallel(functions, (err, res)=>{
    try {
        console.log(res);
    } catch(err) {
        console.log(err.stack);
    }
})