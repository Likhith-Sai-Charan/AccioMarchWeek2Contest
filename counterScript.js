let count = 0;
const countDisplay = document.getElementById("count");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const clearBtn = document.getElementById("clear");
const errorMsg = document.getElementById("error");

incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerHTML = count;
    errorMsg.style.display = "none";
    if (count > 0) {
        clearBtn.style.display = "block";
    }
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countDisplay.innerHTML = count;
        errorMsg.style.display = "none"; // Hide error when decrementing above 0
        if (count === 0) {
            clearBtn.style.display = "none";
            errorMsg.style.display = "block";
        }
    } else {
        errorMsg.style.display = "block";
    }
});

clearBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.innerHTML = count;
    clearBtn.style.display = "none";
    errorMsg.style.display = "none";
});
