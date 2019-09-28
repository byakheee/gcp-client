const commandLineArgs = require("command-line-args");
const firebase = require("firebase");
require("firebase/firestore");

const optionDefinitions = [
  {
    name: 'object-id',
    type: String,
  },
];
const options = commandLineArgs(optionDefinitions);
console.log(options);

const firebaseConfig = require("./configs/firebaseConfig.json");
console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
db.collection(`devices`).get()
  .then(v => {
    console.log(v);
    console.log('SUCCESS!!!');
  })
  .catch(err => {
    console.log(err);
    console.log('FAILRE!!!');
  })

