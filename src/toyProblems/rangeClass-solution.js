var Range = function(start, end, step) {
  if(start === undefined){
    throw 'Can\'t have a range of nothing!'
  }

  if(end === undefind){
    end = start;
  }

  if(step === undefined){
    step = (start > end) -1 : 1;
  }
};

Range.prototype.size = function () {
  return (this.end - this.start) / this.step;
};

Range.prototype.each = function (callback) {
  for(var i = this.start; i < this.end; i += this.step){
    callback(this[i])
  }
};

Range.prototype.includes = function (val) {
  //Your code here
};

















/// **** Solution Code

var Range = function(start, end, step) {
  if(start === undefined){
    throw 'need a starting number bro!'
  }
  if(end === undefined){
    end = start;
  }
  if(step === undefined){
    step = (start < end) ? 1 : -1;
  }

  this.size = function(){
    return Math.floor((end - start) / step) + 1;
  };

  this.each = function(callback){
    if(start < end){
      for(var i = start; i <= end; i += step){
        callback(i);
      }
    } else {
      for(var i = start; i >= end; i += step){
        callback(i);
      }
    }
  };

  this.includes = function(val){
    if(start<end) {
      return ((val >=start) && (val <=end) && (((start - val) %step) == 0));
    } else {
      return ((val <=start) && (val >=end) && (((start - val) %step) == 0));
    }
  }
};