const start=()=> {
    const change = document.getElementsByClassName("si");
    change[0].style = ('transform: scale(1.3)');
};

const sliderProduct = (productsName = "AssassinS_Creed", max = 4, slider=0)=>{
    var a = slider;
    if(slider > max){
        slider = slider % max + 1;
    }
    const img = document.getElementById("mainImg");
    const change = document.getElementsByClassName("si");
    for(let i = 0;i <= max-1; i++){
        change[i].style = ('        transition: 0.3s;' +
            'transform: scale(1)');
    }
    change[slider-1].style = ('transform: scale(1.3)');
    img.style = ('background-image: url("../img/'+productsName+'/'+'slider'+slider+'.png'+'");' +
        '        -moz-background-size: 100%;\n' +
        '        -webkit-background-size: 100%;\n' +
        '        -o-background-size: 100%;\n' +
        '        background-size: 100%;\n');
};



//Полигон
const similarGames = document.getElementsByClassName('jsIMG');
    img =["<a href=\"#\"><img src=\"../img/gallery/battlefild.png\" alt=\"Battlefield 1\"></a>\n" +
    "            <div class=\"center\">\n" +
    "                <div class=\"b\">\n" +
    "                    <b>BATTLEFIELD 1</b></div>\n" +
    "                <button class=\"button\">Buy</button>\n" +
    "            </div>",
        "<a href=\"#\"><img src=\"../img/gallery/StarWars.jpeg\" alt=\"Star Wars: Battlefront 2\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>STAR WARS:\n" +
        "                        Battlefront II</b></div>\n" +
        "                <button class=\"button center\">Buy</button>\n" +
        "            </div>",
        "<a href=\"#\"><img src=\"../img/gallery/Battlefield4.jpeg\" alt=\"Battlefield 4\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>BATTLEFIELD 4</b></div>\n" +
        "                <button class=\"button center\">Buy</button>\n" +
        "            </div>",
        " <a href=\"#\"><img src=\"../img/gallery/WorldOfTanks.jpeg\" alt=\"World Of Tanks\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>WORLD OF TANKS</b></div>\n" +
        "                <button class=\"button center\">Buy</button>\n" +
        "            </div>",
        "<a href=\"Assassins_Creed.html\"><img src=\"../img/gallery/AssassinsCreed.jpeg\" alt=\"Assassin's Creed\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>ASSASSIN'S CREED\n" +
        "                        Rogue</b></div>\n" +
        "                <button class=\"button\">Buy</button>\n" +
        "            </div>",
        "<a href=\"#\"><img src=\"../img/gallery/ForHonor.jpeg\" alt=\"For Honor\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>FOR HONOR</b></div>\n" +
        "                <button class=\"button center\">Buy</button>\n" +
        "            </div>",
        "<a href=\"#\"><img src=\"../img/gallery/World%20of%20Warships@1X.jpeg\" alt=\"World Of Warship\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>WORLD OF WARSHIP</b></div>\n" +
        "                <button class=\"button center\">Buy</button>\n" +
        "            </div>",
        "            <a href=\"#\"><img src=\"../img/gallery/CallOfDuty.jpeg\" alt=\"Call Of Duty\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>CALL OF DUTY\n" +
        "                        Infinite Warface</b></div>\n" +
        "                <button class=\"button center\">Buy</button>\n" +
        "            </div>",
        "            <a href=\"#\"><img src=\"../img/tomb%20rider.png\" alt=\"Tomb Rider\"></a>\n" +
        "            <div class=\"center\">\n" +
        "                <div class=\"b\">\n" +
        "                    <b>TOMB RIDER\n</b></div>\n" +
        "                <button class=\"button center\">Buy</button>\n" +
        "            </div>"
    ];
    start();
    for( let i = 0; i <= 3; i++){
        let random = Math.floor(Math.random() * 9);
            similarGames[i].innerHTML = img[random];
        }