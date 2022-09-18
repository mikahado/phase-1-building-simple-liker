// // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'




fetch(mimicServerCall)
  .then(res => console.log(res.json))





// Your JavaScript code goes here!

// hide error msg
document.getElementById("modal").hidden = true 



// //Event Listeners
// document.querySelector('footer').adEventListeners('click', handleClick)

// //EVent handler
// function handleClick(e)[
//   e.preventDefault()
  
// ]




// const init = () => {
  

//               liker.addEventListener('click', event) => {
//                 event.pretentDefault()
//               const 

//                 }

//                 document.getElementsByClassName('like-glyph').addEventListener('click', liker)

//                 const configObject = {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json",
//                   },
//                   body: { JSON.stringify({
                
//                   })
                
//                   }
//                 };
                
//                 .fetch(mimicServerCall, configObject)
//                 .then(object => object.)

// }




// // //Domload
// document.addEventListener('DOMLoadedContent', init)





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
