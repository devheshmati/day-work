function formHandler(e) {
  e.preventDefault();
  const content = document.querySelector('#content');
  const input = document.getElementsByTagName('input')[0];
  if(isNaN(input.value) || input.value < 0 || input.value > 10) {
    content.innerHTML = "Invalid value";
    return;
  } else {
    content.innerHTML = input.value;
  }
}
