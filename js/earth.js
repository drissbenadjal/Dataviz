function initialize() {

    btn1965 = document.getElementById("btn1965");
    btn1985 = document.getElementById("btn1985");
    btn1995 = document.getElementById("btn1995");
    btn2000 = document.getElementById("btn2000");
    btn2005 = document.getElementById("btn2005");
    btn2010 = document.getElementById("btn2010");
    btn2015 = document.getElementById("btn2015");
    btn2020 = document.getElementById("btn2020");
    btn2022 = document.getElementById("btn2022");

    localStorage.setItem("year", 2022);

    btn2022.classList.add("activeyear");

    var earth = new WE.map('earth_div');
    WE.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    }).addTo(earth);

    earth.setView([40, 0], 2.7);
    earth.setTilt(0);
    earth.setHeading(0);
    earth.setMinAltitude(7000000);
    earth.setMaxAltitude(20000000);

    var before = null;
    requestAnimationFrame(function animate(now) {
        var c = earth.getPosition();
        var elapsed = before ? now - before : 0;
        before = now;
        earth.setCenter([c[0], c[1] + 0.1 * (elapsed / 30)]);
        requestAnimationFrame(animate);
    });

    earth.on('click', function () {
        document.body.style.cursor = 'pointer';
    });

    function markerGenerate() {
        fetch("./map/geo" + localStorage.getItem("year") + ".json")
            .then(response => response.json())
            .then(function (data) {
                console.log(localStorage.getItem("year"));
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    let marker = WE.marker([data[i].Lat, data[i].Long]).addTo(earth);
                    marker.bindPopup(data[i].Ville, { maxWidth: 200, closeButton: true });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    markerGenerate();

    btn1965.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 1965);
        btn1965.classList.add("activeyear");
        markerGenerate();
    });

    btn1985.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 1985);
        btn1985.classList.add("activeyear");
        markerGenerate();
    });

    btn1995.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 1995);
        btn1995.classList.add("activeyear");
        markerGenerate();
    });

    btn2000.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2000);
        btn2000.classList.add("activeyear");
        markerGenerate();
    });

    btn2005.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2005);
        btn2005.classList.add("activeyear");
        markerGenerate();
    });

    btn2010.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2010);
        btn2010.classList.add("activeyear");
        markerGenerate();
    });

    btn2015.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2015);
        btn2015.classList.add("activeyear");
        markerGenerate();
    });

    btn2020.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2020);
        btn2020.classList.add("activeyear");
        markerGenerate();
    });

    btn2022.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2022);
        btn2022.classList.add("activeyear");
        markerGenerate();
    });

}

//1953e04b89e8093c179d10d405de30dd
//https://positionstack.com/documentation