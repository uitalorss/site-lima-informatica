export function initScrollReveal(){
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });

  sr.reveal(".toDown", {
    delay: 5000,
  });
}

