// let checkis = document.getElementByID("flexSwitchCheckDefault");

// checkis.addEventListener("click", function () {
//     //let beaugos = document.querySelectorAll('div[class="bg-secondary"]')
//     // document.getElementsByClassName("bg-secondary").classList.remove("bg-secondary");
//     // document.getElementsByClassName("container-fluid").classList.add("bg-light");
//     document.getElementsByClassName("MyElement").classList.add('MyClass');

//     document.getElementsByClassName("MyElement").classList.remove('MyClass');

//     if (document.getElementsByClassName("MyElement").classList.contains('MyClass'));

//     document.getElementsByClassName("MyElement").classList.toggle('MyClass');
// })

function toggleCheckbox(){

    document.getElementById("bkgrnd").classList.remove('bg-secondary');

    //  if (document.getElementById("bkgrnd").classList.remove('bg-secondary'));

    //  document.getElementById("bkgrnd").classList.toggle('bg-secondary');
}
let lejour;
switch (new Date().getDay()) {
  case 0:
    lejour = "Dimanche";
    break;
  case 1:
    lejour = "Lundi";
    break;
  case 2:
    lejour = "Mardi";
    break;
  case 3:
    lejour = "Mercredi";
    break;
  case 4:
    lejour = "Jeudi";
    break;
  case 5:
    lejour = "Vendredi";
    break;
  case  6:
    lejour = "Samedi";
}
document.getElementById("jour").innerHTML = "Aujourd'hui c'est : " + lejour;