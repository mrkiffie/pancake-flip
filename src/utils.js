export function shuffleArray(originalArray) {
  const array = originalArray.slice();
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = getRandomInt(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}

export function whichAnimationEvent() {
  var t;
  var el = document.createElement("fakeelement");
  var animations = {
    animation: "animationend",
    OAnimation: "oAnimationEnd",
    MozAnimation: "animationend",
    WebkitAnimation: "webkitAnimationEnd"
  };

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}
