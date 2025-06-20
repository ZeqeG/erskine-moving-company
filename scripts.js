document.addEventListener('DOMContentLoaded', function () {

    var topHeader = document.getElementById('topHeader');
    var topHeaderTransparent = document.getElementById('topHeaderTransparent');

    var headerLogo = document.getElementById('headerLogo');

    var banner = document.getElementById('bannerAndHeader');
    var bannerMoving = document.getElementById('bannerAndHeaderMoving');
    var bannerHauling = document.getElementById('bannerAndHeaderHauling');
    var bannerCleanouts = document.getElementById('bannerAndHeaderCleanouts');
    var bannerDeliveries = document.getElementById('bannerAndHeaderDeliveries');

    var headerBtn1 = document.getElementById('headerBtn1');
    // var headerBtn2 = document.getElementById('headerBtn2');
    var headerBtn3 = document.getElementById('headerBtn3');
    var menuIcon = document.querySelector('.menu-icon');

    document.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (window.innerWidth > 700) {
            if (scrollPosition > 60) {
                if (topHeader !== null) {
                    topHeader.style.backgroundColor = 'rgba(255,255,255,1)';
                    topHeader.style.height = '80pt';
                    topHeader.style.backgroundImage = 'none';
                }
                // headerLogo.style.width = '200px';

                if (topHeaderTransparent !== null) {
                    topHeaderTransparent.style.backgroundColor = 'rgba(255,255,255,1)';
                    topHeaderTransparent.style.height = '80pt';
                    topHeaderTransparent.style.backgroundImage = 'none';
                }
                // headerLogo.style.width = '200px';

                if (headerLogo !== null) {
                    headerLogo.style.scale = '0.8';
                    headerLogo.style.filter = 'invert(0)';
                }
                if (headerBtn1 !== null) {
                    headerBtn1.style.color = 'black';
                    // headerBtn2.style.color = 'black';
                    headerBtn3.style.color = 'black';
                }
                if (menuIcon !== null) {
                    menuIcon.style.filter = 'invert(0)';
                }
            }
            else {
                if (topHeader !== null) {

                    topHeader.style.backgroundColor = 'rgba(255,255,255,0)';
                    topHeader.style.height = '120pt';
                    topHeader.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))';
                }

                if (topHeaderTransparent !== null) {
                    topHeaderTransparent.style.backgroundColor = 'rgba(255,255,255,0)';
                    topHeaderTransparent.style.height = '120pt';
                }



                // headerLogo.style.width = '250px';
                if (headerLogo !== null) {
                    headerLogo.style.scale = '1';
                    headerLogo.style.filter = 'invert(1)';
                }
                if (headerBtn1 !== null) {
                    headerBtn1.style.color = 'white';
                    // headerBtn2.style.color = 'white';
                    headerBtn3.style.color = 'white';
                }
                if (menuIcon !== null) {
                    menuIcon.style.filter = 'invert(1)';
                }

            }

            if (banner !== null) {
                banner.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }
            if (bannerMoving !== null) {
                bannerMoving.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }
            if (bannerHauling !== null) {
                bannerHauling.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }
            if (bannerCleanouts !== null) {
                bannerCleanouts.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }

            if (bannerDeliveries !== null) {
                bannerDeliveries.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }

        }
        else {
            if (scrollPosition > 60) {
                if (topHeader !== null) {
                    topHeader.style.backgroundColor = 'rgba(255,255,255,1)';
                    topHeader.style.height = '60pt';
                    topHeader.style.backgroundImage = 'none';
                }

                if (topHeaderTransparent !== null) {
                    topHeaderTransparent.style.height = '80pt';
                }


                if (headerLogo !== null) {
                    headerLogo.style.scale = '0.8';
                    headerLogo.style.filter = 'invert(0)';
                }

                if (headerBtn1 !== null) {
                    headerBtn1.style.color = 'black';
                    // headerBtn2.style.color = 'black';
                    headerBtn3.style.color = 'black';
                }
                menuIcon.style.filter = 'invert(0)';
            }
            else {
                if (topHeader !== null) {
                    topHeader.style.backgroundColor = 'rgba(255,255,255,0)';
                    topHeader.style.height = '80pt';
                    topHeader.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))';
                }

                if (topHeaderTransparent !== null) {
                    topHeaderTransparent.style.height = '120pt';
                }


                if (headerLogo !== null) {
                    headerLogo.style.scale = '1';
                    headerLogo.style.filter = 'invert(1)';
                }
                if (headerBtn1 !== null) {
                    headerBtn1.style.color = 'white';
                    // headerBtn2.style.color = 'white';
                    headerBtn3.style.color = 'white';
                }
                menuIcon.style.filter = 'invert(1)';
            }

            if (bannerMoving !== null) {
                bannerMoving.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }
            if (bannerHauling !== null) {
                bannerHauling.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }
            if (bannerCleanouts !== null) {
                bannerCleanouts.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }

            if (bannerDeliveries !== null) {
                bannerDeliveries.style.backgroundPosition = 'center ' + (scrollPosition / 2) + 'px';
            }
        }
    });

    movingServicesBtn = document.getElementById("movingServicesBtn");
    deliveriesServicesBtn = document.getElementById("deliveriesServicesBtn");
    haulingServicesBtn = document.getElementById("haulingServicesBtn");
    cleanoutsServicesBtn = document.getElementById("cleanoutsServicesBtn");

    window.addEventListener('resize', function (event) {
        if (window.innerWidth < 800) {
            movingServicesBtn.innerHTML = "Moving Services";
            deliveriesServicesBtn.innerHTML = "Delivery Services";
            haulingServicesBtn.innerHTML = "Hauling Services";
            cleanoutsServicesBtn.innerHTML = "Cleanout Services";
        }
        else {
            movingServicesBtn.innerHTML = "Learn About our Moving Services";
            deliveriesServicesBtn.innerHTML = "Learn About our Deliveries Services";
            haulingServicesBtn.innerHTML = "Learn About our Hauling Services";
            cleanoutsServicesBtn.innerHTML = "Learn About our Cleanout Services";
        }

    });
});