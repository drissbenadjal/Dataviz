function initialize() {

    let year = localStorage.setItem("year", 2022);

    var earth = new WE.map('earth_div');
    WE.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    }).addTo(earth);

    earth.setView([40, 0], 2.6);
    earth.setTilt(0);
    earth.setHeading(0);

    var before = null;
    requestAnimationFrame(function animate(now) {
        var c = earth.getPosition();
        var elapsed = before ? now - before : 0;
        before = now;
        earth.setCenter([c[0], c[1] + 0.1 * (elapsed / 30)]);
        requestAnimationFrame(animate);
    });

    earth.on('click', function () {
        before = null;
    });

    function markerGenerate() {
        fetch("./map/geo" + localStorage.getItem("year") + ".json")
            .then(response => response.json())
            .then(function (data) {
                console.log(localStorage.getItem("year"));
                console.log(data);
                //faire une boucle sur les données
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

    document.getElementById("btn2015").addEventListener("click", function () {
        earth.removeMarkers();
        let year = localStorage.setItem("year", 2015);
        markerGenerate();
    });

    document.getElementById("btn2016").addEventListener("click", function () {
        earth.removeMarkers();
        let year = localStorage.setItem("year", 2016);
        markerGenerate();
    });

    document.getElementById("btn2017").addEventListener("click", function () {
        let year = localStorage.setItem("year", 2017);
        markerGenerate();
    });

    document.getElementById("btn2018").addEventListener("click", function () {
        let year = localStorage.setItem("year", 2018);
        markerGenerate();
    });

    document.getElementById("btn2019").addEventListener("click", function () {
        let year = localStorage.setItem("year", 2019);
        markerGenerate();
    });

    document.getElementById("btn2020").addEventListener("click", function () {
        let year = localStorage.setItem("year", 2020);
        markerGenerate();
    });

    document.getElementById("btn2021").addEventListener("click", function () {
        let year = localStorage.setItem("year", 2021);
        markerGenerate();
    });

    document.getElementById("btn2022").addEventListener("click", function () {
        let year = localStorage.setItem("year", 2022);
        markerGenerate();
    });

}

//1953e04b89e8093c179d10d405de30dd
//https://positionstack.com/documentation