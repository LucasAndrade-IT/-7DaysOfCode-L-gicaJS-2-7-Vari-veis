function start() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var language = document.getElementById("language").value;
  alert(
    "Hello " +
      name +
      " you are " +
      age +
      " years old and already learning " +
      language +
      "!"
  );
  var answer = prompt(
    "Do you like to study " +
      language +
      "? Answer with the number 1 for YES or 2 for NO."
  );
  if (answer == "1") {
    alert("Very good! Keep studying and you will be very successful.");
  } else if (answer == "2") {
    alert("Ahh what a pity... Have you tried to learn other languages?");
  } else {
    alert("You should have answered with 1 or 2.");
  }
  console.log(answer);
}
