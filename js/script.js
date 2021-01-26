fetch('https://kit-questions.glitch.me/question/english/4')
.then(Response=>Response.json())
.then(data=>console.log(data))
// .catch((error)=>{
//     console.log('error');
// })