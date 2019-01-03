var asyncMap = function(tasks, callback){
  // Create a results array
  const results = [];
  // create a count to verify all tasks have been run
  let count = 0;

  // iterate over all tasks
  tasks.forEach(function(task, index){
    task((data) => {
      results[index] = data;
      // add tot he count and if the new count equals the length of the original tasks array, all tasks have run
      if(++count === tasks.length){
        // and we can now run the callback function on all the completed tasks
        callback(results);
      }
    });
  });
};





































// ******* Solution Code

var asyncMap = function(tasks, callback){
  var resultsArray = [];
  var resultsCount = 0;

  for(var i = 0; i < tasks.length; i++){
    // notice this iife does two key things
    // invokes the function
    // creates a new scope fo later when callback run i is correct
    (function (i) {
      tasks[i](function (val) {
        resultsArray[i] = val;
        resultsCount++;
        if(resultsCount === tasks.length){
          callback(resultsArray);
        }
      });
    })(i);
  }
};

var asyncMap = function(tasks, callback){
  var resultsArray = [];
  var resultsCount = 0;

  tasks.forEach(function(task, index){
    task(function(data) {
      resultsArray[index] = data;
      if(++resultsCount === tasks.length){
        callback(resultsArray);
      }
    });
  });
};