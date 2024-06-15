const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/images/SunIcon.svg";
const moonIcon = "assets/images/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const themeBtn = document.querySelector(".theme-button");
const calculateBtn = document.getElementById("calculateBtn");
const inputButtons = Array.from(document.querySelectorAll(".inputBtn"));

// It swaps the stylesheet to get dark mode.
const changeTheme = () => {
  const theme = document.getElementById("theme");
  localStorage.setItem("theme", theme.getAttribute("href") === lightTheme ? "dark" : "light");
  changeThemeSettings(
    theme,
    theme.getAttribute("href") === lightTheme ? darkTheme : lightTheme,
    theme.getAttribute("href") === lightTheme ? sunIcon : moonIcon
  );
};

const changeThemeSettings = function (theme, url, icon) {
  theme.setAttribute("href", url);
  themeIcon.setAttribute("src", icon);
};

themeBtn.addEventListener("click", changeTheme);

// It calculates the value and if not a valid value, it sends the error back.
const calculate = function (value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
};

calculateBtn.addEventListener("click", () => calculate(res.value));

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  if (enteredValue === "÷") {
    enteredValue = "/";
  }
  res.value += enteredValue;
}

inputButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    liveScreen(btn.value);
  })
);

//event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  //integer
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  if (e.key === "Backspace") {
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (localStorage.getItem("theme") && localStorage.getItem("theme") === "light") {
    themeBtn.dispatchEvent(new Event("click"));
  }
});
