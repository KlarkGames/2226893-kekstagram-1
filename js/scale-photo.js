const scaleValue = document.querySelector('.scale__control--value');
const SCALE_STEP = 25;
const preview = document.querySelector('.img-upload__preview');

const onSmallerButton = function () {
  let value = Number(scaleValue.value.substring(0, scaleValue.value.length - 1));
  if (value > 25) {
    scaleValue.value = `${value - SCALE_STEP}%`;
    preview.style.transform = `scale(${(value - SCALE_STEP) / 100})`;
    scaleValue.textContent = `${value - SCALE_STEP}%`;
  }
};

const onBiggerButton = function () {
  let value = Number(scaleValue.value.substring(0, scaleValue.value.length - 1));
  if (value < 100) {
    scaleValue.value = `${value + SCALE_STEP}%`;
    preview.style.transform = `scale(${(value + SCALE_STEP) / 100})`;
    scaleValue.textContent = `${value + SCALE_STEP}%`;
  }
};

export {onSmallerButton, onBiggerButton};
