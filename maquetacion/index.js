let valueDisplays = document.querySelectorAll('.display-counter');
let interval = 2000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute('data-value'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
