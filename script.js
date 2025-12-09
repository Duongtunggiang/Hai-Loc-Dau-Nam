const envelopes = document.querySelectorAll(".envelope");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const fortuneText = document.getElementById("fortuneText");

const fortuneList = [
    "Chúc bạn năm mới an khang thịnh vượng!",
    "Vạn sự như ý – Tỷ sự như mơ!",
    "Phát tài – Phát lộc – Phát bình an!",
    "Gia đình hạnh phúc – Sự nghiệp thăng hoa!",
    "Tiền vô như nước – Sức khoẻ dồi dào!"
];

envelopes.forEach(env => {
    env.addEventListener("click", () => {
        const random = Math.floor(Math.random() * fortuneList.length);
        fortuneText.textContent = fortuneList[random];
        popup.classList.remove("hidden");
    });
});

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});
