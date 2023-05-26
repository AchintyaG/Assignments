function calculateMinCost(event) {
    //your code here
    event.preventDefault();
    var input=document.querySelector('input').value;
      var arr = input.split(',');
    arr.sort(function (a,b) { return a-b});
  }  
  var cost =0;
  while(arr.length>1)
      {
          var res = Number(arr[0]) + Number(arr[1]);
          arr.push(res);
          cost+= res;
          arr.shift();
          arr.shift();
          arr.sort(function (a,b) { return a-b});
      }
  document.getElementById("result").textContant = cost;