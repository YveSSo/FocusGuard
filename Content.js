const generateHTML = (pageName) => {
    return  `<p style="font-size:50px; text-align:center">${getRandomItem(text)}</p>
    <div style="text-align: center;">
    <img src="${getRandomItem(links)}" style="text-align:center; width:500px;height:450px;">
    <i>${pageName}</i> `
}

var links = ["https://i.pinimg.com/564x/64/93/c6/6493c6f2d0c638b3865d7e112a373ae9.jpg", "https://i.pinimg.com/564x/f2/3e/8a/f23e8afaefea9e60ebe4b53d9a06275f.jpg"]
function getRandomItem(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

var text = ["Get back to work!", "You better be studying...", "Now's not the time!", "Nice try."]


switch (window.location.hostname) {
    case "www.sephora.com":
        document.body.innerHTML = generateHTML("");
        break;
    case "www.ulta.com":
        alert("You better be studying...")
        break;
    case "www.amazon.com":
        alert("Now's not the time!")
        break;
    case "www.nordstrom.com":
        alert("Nice try.")
        break;
}