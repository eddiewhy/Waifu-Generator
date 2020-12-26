var waifuCount = 0;
countWaifu();
waifu();
randomWaifu();

function reset() {
    div = document.getElementById("waifuWonderland");
    div.innerHTML = null;
    waifuCount = 0;
    waifu();
}

function waifu() {
    var waifu = document.createElement('img');
    var div = document.getElementById('waifuWonderland');
    var x = Math.floor((Math.random() * 10) + 1);
    if  (x == 1) {
        waifu.src = "sayori_illustration.png";
    } else if (x == 2) {
        waifu.src = "elsie.jpg";
    } else if (x == 3) {
        waifu.src = "mako.jpg";
    } else if (x == 4) {
        waifu.src = "205261.jpg";
    } else if (x == 5) {
        waifu.src = "hachikuji.png";
    } else if (x == 6) {
        waifu.src = "chika.jpg";
    } else if (x == 7) {
        waifu.src = "ononoki.jpg";
    } else if (x == 8) {
        waifu.src = "kirisu.jpg";
    } else if (x == 9) {
        waifu.src = "miuna.jpg";
    } else if (x == 10) {
        waifu.src = "furuhashi.jpg";
    }
    div.appendChild(waifu);
    waifuCount++;
    countWaifu();
}

function countWaifu() {
    document.getElementById("waifu-count").innerHTML = 'Waifu = ' + waifuCount;
}