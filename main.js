getEle = e => document.getElementById(e);

inHtml = (e, mes) => {
    getEle(e).innerHTML = mes;
};

display = e => getEle(e).style.display = "block";

hide = e => getEle(e).style.display = "none";

function position(e, x, y) {
    getEle(e).style.left = `${x}px`;
    getEle(e).style.top = `${y}px`;
}

function popUp() {
    position("pop-up", Math.floor(window.innerWidth - 600) / 2, Math.floor(window.innerHeight - 400) / 2);
}

const leftStart = (window.innerWidth - 640) / 2;

getEle("btnNo").style.left = `${leftStart + 360}px`;
getEle("btnYes").style.left = `${leftStart}px`;

const date = new Date();

updateMess = () => {
    var mes;
    if (date.getHours() >= 0 && date.getHours() < 10)
        mes = "Chúc Nương Tử buổi sáng vui vẻ 🥰!";
    else if (date.getHours() >= 10 && date.getHours() < 14)
        mes = "Chúc Nương Tử ăn trưa ngon miệng 🥰!";
    else if (date.getHours() >= 14 && date.getHours() < 17)
        mes = "Chúc Nương Tử buổi chiều vui vẻ 🥰!";
    else mes = "Chúc Nương Tử buổi tối tốt lành 🥰!";
    inHtml("goodBye", mes);
}

Window.resize = function() {
    popUp();
}

popUp();
updateMess();
value = (e, mes) => {
    getEle(e).value = mes;
}

function yesClick() {
    hide("btnNo");
    hide("btnYes");
    display("btnReset");
    display("pop-up");
    inHtml("loveQuestion", "Đã bấm thì chấp nhận làm Nương Tử ta rồi 😏, ôi hạnh phúc quá 🥰!");
    value("btnYes", "OK 🤣!");
    value("btnNo", "MÉO 😫");
}

function closeClick() {
    hide("pop-up");
}

function resetClick() {
    display("btnYes");
    display("btnNo");
    hide("btnReset");
    getEle("btnNo").style.left = `${leftStart + 360}px`;
    getEle("btnNo").style.bottom = `80px`;
    inHtml("loveQuestion", "Hỏi lại, muốn làm Nương Tử của ta không 🙄?");
}

function noHover() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    if (x > window.innerWidth - 300) x = window.innerWidth - 300;
    if (y > window.innerHeight - 100) y = window.innerHeight - 100;
    getEle("btnNo").style.left = `${x}px`;
    getEle("btnNo").style.bottom = `${y}px`;
}