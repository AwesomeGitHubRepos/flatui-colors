var colors = require('../index');

var str = '';

for(var key in colors) {
  if (colors.hasOwnProperty(key)) {
    if (key !== key.toUpperCase()) {
      str += '* <span style="font-weight: bolder;">' + key + '</span>&nbsp;<span style="background-color: ' + colors[key] + '; display: inline-block;">&nbsp;&nbsp;&nbsp;<span>\n'
    }
  }
}

console.log(str);
