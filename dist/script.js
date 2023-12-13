function $time() {
    $date = new Date();
    let h = document.getElementById('h').innerText = $date.getHours();
    let m = document.getElementById('m').innerText = $date.getMinutes();
    let s = document.getElementById('s').innerText = $date.getSeconds();
}
$time();
setInterval($time, 1000);