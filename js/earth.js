function initialize() {

    btn2015 = document.getElementById("btn2015");
    btn2016 = document.getElementById("btn2016");
    btn2017 = document.getElementById("btn2017");
    btn2018 = document.getElementById("btn2018");
    btn2019 = document.getElementById("btn2019");
    btn2020 = document.getElementById("btn2020");
    btn2021 = document.getElementById("btn2021");
    btn2022 = document.getElementById("btn2022");

    localStorage.setItem("year", 2022);

    btn2022.classList.add("activeyear");

    var earth = new WE.map('earth_div');
    WE.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    }).addTo(earth);

    earth.setView([40, 0], 2.7);
    earth.setTilt(0);
    earth.setHeading(0);
    earth.setMinAltitude(1000000);
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

    btn2015.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2015);
        btn2015.classList.add("activeyear");
        markerGenerate();
    });

    btn2016.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2016);
        btn2016.classList.add("activeyear");
        markerGenerate();
    });

    btn2017.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2017);
        btn2017.classList.add("activeyear");
        markerGenerate();
    });

    btn2018.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2018);
        btn2018.classList.add("activeyear");
        markerGenerate();
    });

    btn2019.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2019);
        btn2019.classList.add("activeyear");
        markerGenerate();
    });

    btn2020.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2020);
        btn2020.classList.add("activeyear");
        markerGenerate();
    });

    btn2021.addEventListener("click", function () {
        document.querySelector(".activeyear").classList.remove("activeyear");
        let year = localStorage.setItem("year", 2021);
        btn2021.classList.add("activeyear");
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