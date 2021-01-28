const async = require('async');

const funcOne = (callback) => {
    console.log("first function executed");
    callback(null, 'result from funcOne')
};

const funcTwo = (callback) => {
    console.log("first function executed");
    callback(null, 'result from funcTwo')
};

const functions = [funcOne, funcTwo];

async.series(functions, (err, res)=> {
    try {
        console.log(res);
    } catch(err) {
        console.log(err.stack);
    }
})
