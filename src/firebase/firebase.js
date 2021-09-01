import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA6h2eGYeTj74skv20hjjSh_Ohoj23VQuo',
  authDomain: 'expensify-69dfd.firebaseapp.com',
  databaseURL: 'https://expensify-69dfd-default-rtdb.firebaseio.com',
  projectId: 'expensify-69dfd',
  storageBucket: 'expensify-69dfd.appspot.com',
  messagingSenderId: '226844585827',
  appId: '1:226844585827:web:312fce0f0aaefa7ce26d56',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('value', (snapshot)=>{
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// });

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=> {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot)=> {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot)=> {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//   description: 'first one',
//   note: 'first note',
//   amount: 100,
//   createdAt: 500
// });

// const onValueChange = database.ref().on('value', (snapshot)=>{
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`);
// }, (e)=> {
//   console.log('error',e)
// });

// database.ref().update({
//   name: 'oğuz hoto',
//   'job/title': 'React Dev.',
//   'job/company': 'jotform'
// });

//database.ref().off('value', onValueChange);
// database.ref().once('value')
// .then((snapshot)=>{
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e)=>{
//   console.log('can not fetch data', e);
// })

// database.ref().set({
//   name: 'Ateş HOTO',
//   age: 38,
//   stressLevel: 6,
//   job: {
//     title:'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Ankara',
//     country: 'Türkiye'
//   }
// }).then(()=> {
//   console.log('Data is saved');
// }).catch((e)=> {
//   console.log('error',e)
// });

// database.ref().update({
//   stressLevel:9,
//   'job/company': 'amazon',
//   'location/city': 'Seattle'
// })
// database.ref('isSingle')
// .remove()
// .then(()=>{
//   console.log('removed')
// }).catch(()=>{
//   console.log('couldnt remove',e)

// })
