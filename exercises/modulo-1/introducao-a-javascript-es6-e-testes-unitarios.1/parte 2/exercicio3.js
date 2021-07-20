window.onload = () => {
  const button = document.querySelector('button');
  const counter = document.querySelector('span');
  let clickCount = 0;

  button.addEventListener('click', (event) => {
    clickCount += 1;

    counter.innerText = clickCount;
  });
};
