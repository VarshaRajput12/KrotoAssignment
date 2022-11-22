const wrapper = document.querySelector("#color");

document.addEventListener("mousemove", (event) => {
  const { screenX } = event;
  wrapper.style.width = `${screenX}px`;
});
