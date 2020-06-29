const path = require('path');
// 1. cd src/backend/reference
// 2. use node path_demo to check these modules below

// Base file name
console.log(path.basename(__filename));

//Directory Name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// Create Path Object
console.log(path.parse(__filename));