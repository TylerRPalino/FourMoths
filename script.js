const button = document.getElementById("runawayBtn");

button.style.position = "absolute";
button.style.left = "45%";
button.style.top = "55%";

let dodgeCount = 0;
const maxDodges = 200;

document.addEventListener("mousemove", (e) => {

    // Stop dodging after enough attempts
    if (dodgeCount >= maxDodges) {
        return;
    }

    const rect = button.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const distanceX = e.clientX - buttonX;
    const distanceY = e.clientY - buttonY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 120) {

        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;

        dodgeCount++;
        distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        if (distance < 120) {
            dodgeCount--;
        }
    }
});

// When clicked
button.addEventListener("click", () => {
    window.location.href = "quiz.html";
});