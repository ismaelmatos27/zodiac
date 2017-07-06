/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var horoscopes = [{
  name: "Aries",
  img: "img/aries.jpg",
  caption: "Enthusiastic & Outgoing. As a fire sign, Aries are adventurous, independent and all about the action. At the same time, Aries are able to overcome challenges they are faced with."

}, {
  name: "Taurus",
  img: "img/taurus.jpg",
  caption: "Determined & Sensual. Taureans can be mistaken as withdrawn or boring, when actually they are just cool & discreet. A typical Taurus enjoys life's comforts."
}, {
  name: "Gemini",
  img: "img/gemini.jpg",
  caption: "Intense & Explorative. As excellent communicators, Gemini also search out new experiences and lead unique lives."
}, {
  name: "Cancer",
  img: "img/cancer.jpg",
  caption: "Compassionate & Contradictory. A true romantic, Cancerians have a changeable nature and can appear eccentric at one moment, and sensitive the next."
}, {
  name: "Leo",
  img: "img/leo.jpg",
  caption: "Radiant & Leader. Leos are the positive thinkers of the zodiac, as such people and opportunities are drawn to them; they are definitely leaders rather than followers."
}, {
  name: "Virgo",
  img: "img/virgo.jpg",
  caption: "Caring & Confident. This Earth sign is able to maintain faith, even when things go bad. Often creative, Virgo is generous and willing to support and care for those around them."
}, {
  name: "Libra",
  img: "img/libra.jpg",
  caption: "Charming & Harmonious. This happy go lucky sign seek peace, and often are successful at business."
}, {
  name: "Scorpio",
  img: "img/scorpio.jpg",
  caption: "Resilient & Powerful. Scorpio are often passionate about love & power. There are 3 unique types of Scorpio, but they all are often said to be old souls and sensitive."
}, {
  name: "Sagittarius",
  img: "img/sagittarius.jpg",
  caption: "Optimistic & Honest. Always aiming high, Sagittarians seek adventure & independence, whilst still being one of the zodiac's most large hearted signs."
}, {
  name: "Capricorn",
  img: "img/capricorn.jpg",
  caption: "Resilient & Patient. Whether the ambitious goat, or the goat that is content in their own domain, Capricorns are goal achievers, whilst being reliable and sympathetic."
}, {
  name: "Aquarius",
  img: "img/acuario.jpg",
  caption: "Trendsetters & Humanitarian. Although sometimes seen as eccentric, Aquarians are quick thinking, outgoing & loyal."
}, {
  name: "Pisces",
  img: "img/pisces.jpg",
  caption: "Sensitive & Mysterious. Pisces are often pulled in two directions, which sometimes causes confusion in their life and emotional periods. However, they are also very talented and resilient."
}];

function getInfo() {
  var x = document.getElementById("signs");
  var j = x.selectedIndex;
  var sign = x.options[j].text;

  console.log(sign);
  for (i = 0; i < horoscopes.length; i++) {
    if (sign == horoscopes[i].name ){
      document.getElementById("picture").src = horoscopes[i].img
      document.getElementById("name").innerHTML = horoscopes[i].name
      document.getElementById("description").innerHTML = horoscopes[i].caption

      return
    }
  }
}
function moreInfo(){
  var bday = document.getElementById("bday").value;
  console.log(bday);
  var month =  bday.substr(5,2);
  console.log(month);
  var day = bday.substr(8,2);
  console.log (day);
  

}
