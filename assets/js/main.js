const sr = ScrollReveal({
  reset: true
});

sr.reveal(".toDown", {
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 300,
});

sr.reveal(".toLeft", {
  origin: "left",
  distance: "50px",
  duration: 2000,
  delay: 400,
});

sr.reveal(".toRight", {
  origin: "right",
  distance: "50px",
  duration: 2000,
  delay: 500,
});