var fs = require('fs');
var albrechtData = fs.readFileSync('./data/albrecht.csv')
  .toString()
  .split('\n')
  .map(e => e.trim())
  .map(e => e.split(',')
  .map(e => e.trim()));
albrechtData.shift();
albrechtData.pop();
var projectData = fs.readFileSync('./data/projectInput.csv')
  .toString()
  .split('\n')
  .map(e => e.trim())
  .map(e => e.split(',')
  .map(e => e.trim()));
projectData.shift();
var OutputArray = [];
albrechtData.forEach(element => {
  var result = 0;
    for (let index = 0; index < 7; index++)
     {
      result += (((projectData[0][index] - element[index])**2)|0);
     }
  OutputArray.push((result**(1/2))|0);
  });
var min_index = 0;
console.log("Input is:",projectData[0])
console.log("Neighbour distance: ")
console.log(OutputArray);
array2 = OutputArray.slice();
OutputArray.sort(function(a, b) {
    return a - b;
  });
for (let index = 0; index < OutputArray.length; index++)
{
  if(OutputArray[0] == array2[index])
  {
    min_index = index;
  }
}
console.log("Closest neighbour has index:",min_index," with d:",OutputArray[0]);
console.log("It has this values:",albrechtData[min_index]);
console.log("Effort is:", ((projectData[0][5]/albrechtData[min_index][5])*albrechtData[min_index][7]),"(human-month)")
console.log("Effort is:", ((projectData[0][5]/albrechtData[min_index][5])*albrechtData[min_index][7])*31,"(human-days)")
