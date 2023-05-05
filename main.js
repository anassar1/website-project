// Quiz

// HTML variable
let Score = document.getElementById("scoreSpan");

// Button Event listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Count Variable
  let score = 0;

  let ans1 = document.getElementById("ans1").value.toLowerCase();
  if (ans1 === "sophie" || ans1 === "sophie hatter") {
    document.getElementById("out1").innerHTML = `<h2>right<h2>`;
    score++;
    Score.innerHTML = score;
  } else {
    document.getElementById("out1").innerHTML = `<h2>wrong<h2>`;
  }

  let ans2 = document.getElementById("ans2").value.toLowerCase();
  if (ans2 === "pigs") {
    document.getElementById("out2").innerHTML = `<h2>right<h2>`;
    score++;
    Score.innerHTML = score;
  } else {
    document.getElementById("out2").innerHTML = `<h2>wrong<h2>`;
  }

  let ans3 = document.getElementById("ans3").value.toLowerCase();
  if (ans3 === "grey" || ans3 === "gray") {
    document.getElementById("out3").innerHTML = `<h2>right<h2>`;
    score++;
    Score.innerHTML = score;
  } else {
    document.getElementById("out3").innerHTML = `<h2>wrong<h2>`;
  }

  let ans4 = document.getElementById("ans4").value.toLowerCase();
  if (ans4 === "goldfish princess") {
    document.getElementById("out4").innerHTML = `<h2>right<h2>`;
    score++;
    Score.innerHTML = score;
  } else {
    document.getElementById("out4").innerHTML = `<h2>wrong<h2>`;
  }
}
