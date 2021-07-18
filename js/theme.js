let darkTheme = true;
const themeToggle = document.querySelector("#themeButton");

enableDark();

function switchFeather(isDarkTheme) {
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="${isDarkTheme?'moon':'sun'}"></i>`;
  feather.replace();  
}

function enableDark() {
  document.body.classList.add('darktheme');
  darkTheme = true;
  switchFether(darkTheme);
}

function disableDark() {
  document.body.classList.add('darktheme');
  darkTheme = false;
  switchFether(darkTheme);
}

function toggleTheme() {
  document.body.classList.toggle('darktheme');
  darkTheme = !darkTheme;
  switchFeather(darkTheme);
}

themeToggle.addEventListener("click", toggleTheme);

// Theme accordint the hour

/*
const today = new Date();

if (hour >= 19 || hour < 5) {
    enableDark();
} else {
    disableDark();
}
*/
