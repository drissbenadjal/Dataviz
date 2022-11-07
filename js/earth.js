function initialize() {

    const pays = {};

    fetch("./map/pays.json")
        .then(response => response.json())
        .then(function (data) {
            data.forEach(function (p) {
                pays[p.pays] = {
                    lat: p.lat,
                    long: p.long,
                    scale: p.scale
                }
            });
        });

    btn1965 = document.getElementById("btn1965");
    btn1985 = document.getElementById("btn1985");
    btn1995 = document.getElementById("btn1995");
    btn2000 = document.getElementById("btn2000");
    btn2005 = document.getElementById("btn2005");
    btn2010 = document.getElementById("btn2010");
    btn2015 = document.getElementById("btn2015");
    btn2020 = document.getElementById("btn2020");
    btn2022 = document.getElementById("btn2022");

    localStorage.setItem("year", 1965);
    btn1965.classList.add("activeyear");

    var earth = new WE.map('earth_div', { atmosphere: true, sky: false });
    WE.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    }).addTo(earth);

    if (window.innerWidth < 800) {
        earth.setMinAltitude(14100000);
        earth.setMaxAltitude(14100000);
        // earth.minZoom(2.2);
        // earth.maxZoom(2.2);
        earth.setZoom(2.2);
    }
    else {
        earth.setMinAltitude(26200000);
        earth.setMaxAltitude(26200000);
        // earth.minZoom(2.64408209879224);
        // earth.maxZoom(2.64408209879224);
        earth.setZoom(2.64408209879224);
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth < 800) {
            earth.setMinAltitude(14100000);
            earth.setMaxAltitude(14100000);
            // earth.minZoom(2.2);
            // earth.maxZoom(2.2);
            earth.setZoom(2.2);
        }
        else {
            earth.setMinAltitude(26200000);
            earth.setMaxAltitude(26200000);
            // earth.minZoom(2.64408209879224);
            // earth.maxZoom(2.64408209879224);
            earth.setZoom(2.64408209879224);
        }
    });


    earth.on('pointerdown', function () {
        document.body.style.cursor = 'pointer';
    });

    earth.on('pointerup', function () {
        document.body.style.cursor = 'auto';
    });

    function animEarth() {
        var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before ? now - before : 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.1 * (elapsed / 30)]);
            requestAnimationFrame(animate);
        });
    }
    animEarth();

    earth.on('pointerdown', function () {
        document.body.style.cursor = 'pointer';
    });

    earth.on('pointerup', function () {
        document.body.style.cursor = 'auto';
    });

    let markers = [];

    function markerGenerate() {
        markers.forEach(m =>
            earth.removeMarker(m));
        markers = []
        fetch("./map/data.json")
            .then(response => response.json())
            .then(function (data) {
                data.forEach(function (e) {
                    if (e.année == localStorage.getItem("year")) {
                        let marker = WE.marker([e.lat, e.long]).addTo(earth);
                        let element = document.querySelectorAll('.we-pm-icon')[document.querySelectorAll('.we-pm-icon').length - 1];
                        element.setAttribute('data-name', e.astronaute);
                        element.setAttribute('data-mission', e.mission);
                        element.setAttribute('data-date', e.année);
                        element.setAttribute('data-origine', e.originaire);
                        element.setAttribute('data-pays', e.pays);
                        element.style.backgroundImage = "url('./images/point_" + e.color + ".png')";
                        // marker.bindPopup(e.astronaute, { maxWidth: 200, closeButton: true});
                        markers.push(marker)
                    }
                });
                document.querySelectorAll('.we-pm-icon').forEach(element => {
                    element.addEventListener("click", function () {
                        const modal = document.querySelector('.div4');
                        const astroname = document.querySelector('#astroname');
                        const astromission = document.querySelector('#astromission');
                        const astrodate = document.querySelector('#astrodate');
                        const astropays = document.querySelector('#astropays');


                        modal.classList.remove('hidden-modal');
                        astroname.innerHTML = this.getAttribute('data-name');
                        astromission.innerHTML = this.getAttribute('data-mission');
                        astrodate.innerHTML = this.getAttribute('data-date');
                        astropays.innerHTML = this.getAttribute('data-pays');

                        let namePays = this.getAttribute('data-pays');

                        affichePays(namePays, pays)

                        if (window.innerWidth < 800) {
                            window.scrollTo(0, document.body.scrollHeight);
                        }

                    });
                });
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