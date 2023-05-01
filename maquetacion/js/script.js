function countUp(elementId, endValue) {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      document.getElementById(elementId).innerHTML = current;
      if (current === endValue) {
        clearInterval(interval);
      }
    }, 10);
  }
  
  window.addEventListener('load', () => {
    countUp('counter1', 58);
    countUp('counter2', 50);
    countUp('counter3', 301);
  });
  