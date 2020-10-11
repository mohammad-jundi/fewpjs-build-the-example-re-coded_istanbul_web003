// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelector("body").addEventListener("click", e => {

  const likeGlyphs = document.querySelectorAll(".like-glyph")
  const divErr = document.querySelector("#modal")
  const err = document.querySelector("#modal-message")

  if(e.target.className === "like-glyph"){
  mimicServerCall()
  .then(res => {
    e.target.classList.add("activated-heart")
    e.target.innerText = FULL_HEART
  })
  .catch(err => {
    err.innerText = err
    divErr.classList.remove("hidden")
    setTimeout(() => divErr.classList.add("hidden"), 5000 )
  })

} else if (e.target.className === "like-glyph activated-heart"){
    e.target.classList.remove("activated-heart")
    e.target.innerText = EMPTY_HEART
  }
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
