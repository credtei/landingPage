

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu() {
  if (window.innerWidth < 860) {
    var x = document.getElementById("myTopnav");
    var opa = document.getElementById("opaco-id");
    if (x.className === "topnav") {
      x.className += " responsive";
      opa.className = "opaco responsive";
    } else {
      x.className = "topnav";
      opa.className = "opaco";
    }
    var y = document.getElementById("botao");
    if (y.className === "fa fa-bars"){
      y.className += "fa fa-close";
    } else {
      y.className = "fa fa-bars";
    }
  }


  if(opa.className === "opaco responsive"){
    opa.addEventListener("click", function(){
      if(opa.className === "opaco responsive"){
        y.className = "fa fa-bars";
        x.className = "topnav";
        opa.className = "opaco";
      }
    })
  }
}


function popUp(id) {
  var pop = document.getElementById(id);
  pop.classList.toggle("show");
  var opa = document.getElementById("opaco-id");
  if (opa.className === "opaco"){
    opa.className += " responsive";
  } else {
    opa.className = "opaco";
  }
  if(opa.className === "opaco responsive"){
    opa.addEventListener("click", function(){
      if(pop.className === "popuptext show"){
        pop.classList.toggle("show");
        opa.className = "opaco";
      }
    })
  }
}