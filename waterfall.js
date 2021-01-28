const async = require('async');



// Testing waterfall

const funcOne = (callback) => {
    console.log("first function executed")
    callback(null, 'passing to ', 'the next function')
};

const funcTwo = (arg1, arg2, callback) => {
    const man = arg1+arg2;
    console.log(man);
    console.log("second function executed");
    callback(null, 'for the ', '3rd function');
};

const funcThree = (arg1, arg2, callback) => {
    const man = arg1+arg2;
    console.log(man);
    console.log("third function executed")
    callback(null, 'waterfall executed')
};

const functions = [funcOne, funcTwo, funcThree];

async.waterfall(functions, (err, res)=> {
  try{
      console.log(res)
    }
  catch(err) {
      console.log(error.stack)
    }
})


// 


