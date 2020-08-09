var slider = 0;
const blockquote =(x) =>{
  q = document.getElementById("blockquote");
  b = document.getElementById("quoteName");
  if(x === 0){
      slider++
  }
  else if(x === 1){
      slider--
  }
  if(slider > 4){
      slider = 0
  }
  if(slider < 0){
      slider = 4
  }
  const arrQ = ["<blockquote class=\"center\">Donec feugiat tellus sem, laoreet iaculis orci lobortis vel. Sed sed luctus orci, at\n" +
  "            lacinia risus. Ut&nbsp;porttitor ante ac&nbsp;tincidunt elementum. Curabitur ex&nbsp;dolor, condimentum vitae nunc vel,\n" +
  "            pulvinar semper justo. Vestibulum et&nbsp;aliquet magna, maximus dapibus enim. Vestibulum ex&nbsp;lectus, posuere eu\n" +
  "            viverra&nbsp;at, mattis et&nbsp;enim. Nam efficitur sem et&nbsp;lectus fringilla, at&nbsp;pharetra nulla luctus. Nunc cursus,\n" +
  "            augue ac&nbsp;ultricies volutpat, neque erat congue justo, ac&nbsp;pretium tellus eros a&nbsp;neque. Integer ipsum sem,\n" +
  "            consectetur a&nbsp;mollis&nbsp;ac, cursus eu&nbsp;ipsum.</blockquote>",
  "<blockquote class=\"center\">Самое сильное чувство — разочарование. Не обида, не ревность и даже не ненависть…" +
  " после них остается хоть что-то в душе, после разочарования — пустота.</blockquote>",
  "<blockquote class=\"center\">Может быть, мы попадаем в ад не за те поступки, которые совершили. Может быть, мы попадаем в ад за поступки, которые не совершили.\n" +
  "За дела, которые не довели до конца.</blockquote>",
      "<blockquote class=\"center\">Тысячи свечей можно зажечь от одной единственной свечи, и жизнь ее не станет" +
      " короче. Счастья не становится меньше, когда им делишься.</blockquote>",
      "<blockquote class=\"center\">— Не грусти, — сказала Алисa. — Рано или поздно все станет понятно, все станет на " +
      "свои места и выстроится в единую красивую схему, как кружева. Станет понятно, зачем все было нужно, потому что все будет правильно.</blockquote>",];
  const arrB = ["<strong>JOHN SMITH</strong><b> - FOUNDER</b>",
      "<strong>Эрих Мария Ремарк</strong><b> - ПИСАТЕЛЬ</b>",
  "<strong>Чак Паланик</strong><b> - ПИСАТЕЛЬ</b>",
      "<strong>Будда</strong><b> - ДУХОВНЫЙ УЧИТЕЛЬ</b>",
      "<strong>Льюис Кэрролл</strong><b> - ПИСАТЕЛЬ</b>"];
  q.innerHTML = arrQ[slider];
  b.innerHTML = arrB[slider];
  console.log(slider)
};
blockquote(2);

const bgcHeader =(x)=>{
    const header = document.getElementsByClassName("bgcHeader");
    arrHeader = ["img/menuHeader.png","img/gallery/CoD.png","img/AssassinS_Creed/slider2.png","img/gallery/MoH.png",
        "img/AssassinS_Creed/slider4.png"];
    x %= arrHeader.length;
    for(let i = 0; i <= 1; i++){
        header[i].style = ('transition: 1.5s;' +
            'background-image: url(' + arrHeader[x] + ');')
    }
    console.log(x);
};
var a = 0;
setInterval("bgcHeader(++a)", 5000);