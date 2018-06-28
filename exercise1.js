const { getProject } = require('./handson/project.js');

getProject().then(result => {
  console.log(result);
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
