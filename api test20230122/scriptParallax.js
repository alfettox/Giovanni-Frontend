// const container = document.getElementById("parallax-container");
// container.addEventListener("mousemove", handleMouseMove);

// function handleMouseMove(event) {
//   const containerRect = container.getBoundingClientRect();
//   const x = event.clientX - containerRect.left - containerRect.width / 2;
//   const y = event.clientY - containerRect.top - containerRect.height / 2;

//   const layers = container.querySelectorAll(".parallax-layer");
//   layers.forEach((layer, index) => {
//     const speed = index / layers.length + 0.5;
//     layer.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1.2)`;
//   });
// }