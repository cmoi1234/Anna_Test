function showTime(){
    var date = new date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s ;
    document.getElementsById("DigitalCLOCK").innerText = time;
    document.getElementsById("DigitalCLOCK").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();