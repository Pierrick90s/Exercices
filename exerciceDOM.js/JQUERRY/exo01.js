let obj = {
    e1: 10,
    e2: 'Lorem Ipsum',
    e3: function () {
   console.log('Lorem Ipsum!');
    }
 };
 
 for(let i in obj){
    console.log(i+":"+obj[i]);
 }