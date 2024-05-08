(function () {
    var id = $("body[oncontextmenu]>div").id;
    var min = 1;
    var max = 100;

    var setResult = [15, 3, 20, 1],
        count = 0,
        generator = document.getElementById(`${id}-button`),
        result = document.getElementById(`${id}-result`);

    generator.removeAttribute("onclick");
    var today = new Date();

    var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)) +
        "-" +
        (today.getDate() > 9 ? today.getDate() : '0' + today.getDate());
    var time =
        today.getHours() -
        7 +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();

    generator.onclick = function () {
        if (count >= setResult.length) return;

        result.innerHTML =
            '<img src="/util/cp/images/ajax-loader.gif" alt="Loading .." />';

        setTimeout(function () {
            result.innerHTML = `<center><span style="font-size:100%;font-weight:bold;">${
                setResult[count++]
            }<br></span><span style="font-size:70%;">Min:&nbsp;${min}, Max:&nbsp;${max}<br>${date} ${time} UTC</span></center>`;
        }, 1000);
    };
})();
