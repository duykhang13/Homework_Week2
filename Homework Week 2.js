function randomNumber(){
  return Math.floor(Math.random() * 10)
}

let random = randomNumber()

let button = document.getElementById('guessButton');
button.addEventListener('click', function() {
  let userGuess = document.getElementById('yourInputId').value
    
  for(let i = 0; i < 10; i++){
  let userinput = parseInt(userGuess)
if (random > userinput)
  {document.getElementById('message').innerHTML = "Sorry your guess is too low"
 }
if (random < userinput)
	{document.getElementById('message').innerHTML = "Sorry your guess is too high"
 }
if (random === userinput)
	{document.getElementById('message').innerHTML = "Yayaya you are Lord of the Guess"
break  
 }
}
}
);