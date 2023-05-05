let display = document.getElementById("screen");

const wipe = () => {
  display.value = "";
};

const show = (n) => {
  display.value += n;
};

const back = () => {
  display.value = display.value.slice(0, -1);
};

const calc = () => {
  display.value = eval(display.value);
};
