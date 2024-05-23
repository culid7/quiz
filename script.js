document.getElementById("btn-out").addEventListener("click", submit);

function submit() {
  let q1 = document.getElementById("first").value;
  let q2 = document.getElementById("second").value;
  let q3 = document.getElementById("third").value;
  let q4 = document.getElementById("fourth").value;
  let grade = 0;
  let statement = document.getElementById("statement");

  if (q1 == "8") {
    document.getElementById("num1").innerHTML = "1";
    document.getElementById("clr1").style.color = "green";
    grade++;
  } else {
    document.getElementById("num1").innerHTML = "0";
    document.getElementById("clr1").style.color = "red";
  }
  if (q2 == "8") {
    document.getElementById("num2").innerHTML = "1";
    document.getElementById("clr2").style.color = "green";
    grade++;
  } else {
    document.getElementById("num2").innerHTML = "0";
    document.getElementById("clr2").style.color = "red";
  }
  if (q3 == "42") {
    document.getElementById("num3").innerHTML = "1";
    document.getElementById("clr3").style.color = "green";
    grade++;
  } else {
    document.getElementById("num3").innerHTML = "0";
    document.getElementById("clr3").style.color = "red";
  }
  if (q4 == "9") {
    document.getElementById("num4").innerHTML = "1";
    document.getElementById("clr4").style.color = "green";
    grade++;
  } else {
    document.getElementById("num4").innerHTML = "0";
    document.getElementById("clr4").style.color = "red";
  }

  document.getElementById("grade").innerHTML = grade;
  let percentage = Math.round((grade / 4) * 100);
  document.getElementById("percent").innerHTML = percentage + "%";

  if (grade == 4) {
    statement.innerHTML = "Your smart 🤓";
  } else if (grade == 3) {
    statement.innerHTML = "not terrible😀 ";
  } else if (grade == 2) {
    statement.innerHTML = "barley passed";
  } else if (grade == 1) {
    statement.innerHTML = "failed 😂.";
  } else {
    statement.innerHTML = "😂🤣😂💀!";
  }
}
