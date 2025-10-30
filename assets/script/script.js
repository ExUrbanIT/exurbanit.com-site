// 🎮 ExUrban Showcase Studio Interactive Controls
document.addEventListener("DOMContentLoaded", () => {
  const goBtn = document.getElementById("goBtn");
  const stopBtn = document.getElementById("stopBtn");

  let isMoving = false;

  goBtn.addEventListener("click", () => {
    isMoving = true;
    console.log("🚗 Car started moving!");
    goBtn.classList.add("active");
    stopBtn.classList.remove("active");
  });

  stopBtn.addEventListener("click", () => {
    isMoving = false;
    console.log("🛑 Car stopped.");
    stopBtn.classList.add("active");
    goBtn.classList.remove("active");
  });
});
