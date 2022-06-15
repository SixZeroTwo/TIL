import { ref } from "vue";

export default function useMousePosition() {
  const x = ref(0);
  const y = ref(0);
  //点击事件的回调
  document.addEventListener("click", (event) => {
    x.value = event.offsetX;
    y.value = event.offsetY;
  });
  return {
    x, y
  }
}