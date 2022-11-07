window.onload = function () {
    setTimeout(function () {
        let opacity = 1;
        let interval = setInterval(function () {
            if (opacity <= 0.1) {
                clearInterval(interval);
                document.querySelector(".loader").style.display = "none";
            }
            document.querySelector(".loader").style.opacity = opacity;
            document.querySelector(".loader").style.filter = "alpha(opacity=" + opacity * 100 + ")";
            opacity = opacity - opacity * 0.1;
        }, 40);
    }, 1500);
    initialize();

    let btnPopup = document.querySelector("#btnpopup");
    let closePopup = document.querySelector("#popupClose");
    let popup = document.querySelector(".popup");

    btnPopup.addEventListener("click", function () {
        popup.classList.remove("hidden-modal");
    });

    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden-modal");
    });
}

