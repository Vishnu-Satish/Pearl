function w3_open() {
    document.getElementsByClassName("sidenav")[0].style.display = "block";
}
function w3_close() {
    document.getElementsByClassName("sidenav")[0].style.display = "none";
}
function p_open() {
    document.getElementsByClassName("side-nav")[0].style.display = "block";
}
function p_close() {
    document.getElementsByClassName("side-nav")[0].style.display = "none";
}
function def_close()
{
    document.getElementsByClassName("def")[0].style.display="none";
}
function prm_close()
{
    document.getElementsByClassName("prm")[0].style.display="none";
}
function suc_close()
{
    document.getElementsByClassName("suc")[0].style.display="none";
}
function info_close()
{
    document.getElementsByClassName("info")[0].style.display="none";
}
function war_close()
{
    document.getElementsByClassName("war")[0].style.display="none";
}
function dan_close()
{
    document.getElementsByClassName("dan")[0].style.display="none";
}
function myFunction() {
    document.getElementById("myDropdown")
            .classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.
            getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}
function collapse()
{
  document.getElementsByClassName("collapsible")[0].style.display=  "block";
}

window.onclick = function(event) {
  if (!event.target.matches('.coll')) {
      document.getElementsByClassName("collapsible")[0].style.display=  "none";
  }
};

function hopen()
{
   if(document.getElementsByClassName("nav")[0].style.display=== "none")
       {
           document.getElementsByClassName("nav")[0].style.display= "block";
       }
   else
       {
           
               document.getElementsByClassName("nav")[0].style.display= "none";
       }
}

function openmodal()
{
    document.getElementById("myModal").style.display= "block";
}
function closemodal()
{
    document.getElementById("myModal").style.display= "none";
}
