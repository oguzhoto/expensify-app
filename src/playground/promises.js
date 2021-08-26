 const promise = new Promise((resolve, reject)=> {
 // resolve('This is succesful');
  reject('failed');
 });

 promise.then((data)=> {
  console.log(data);
 }).catch((error)=> {
  console.log('error:', error)
 });