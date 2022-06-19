// Refreshing the page
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)
//----------------------------------------




//-------------------------------
// Counting Clicks
var count = 0;
        var btn = document.getElementById("btn");
        var disp = document.getElementById("display");
  
        btn.onclick = function () {
            count++;
            disp.innerHTML = count;
        }