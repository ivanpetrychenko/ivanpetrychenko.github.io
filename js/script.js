document.querySelector('.btn').addEventListener('click', () => {
    // console.log(1);
    // window.navigator.vibrate(200);

    // console.log(1);
    // navigator.getBattery()
    //     .then(battery => {
    //         // console.log(battery.level * 100 + "%");
    //         document.querySelector('.text').innerHTML = battery.level * 100 + "%";
    //     })

    console.log(1);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => document.querySelector('.text').innerHTML = pos.coords.latitude);
    }
});