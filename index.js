var userAgent = window.navigator.userAgent;
var platform = window.navigator.platform;

document.addEventListener('DOMContentLoaded', function() {
    var linkStyles = document.querySelector('link[href="PC.css"]');
        
    if (platform.includes('Win') || platform.includes('Linux') || platform.includes('Mac')){
        linkStyles.href = "PC.css";
    }
        
    if (userAgent.includes('Android') || userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
        linkStyles.href = "Mobile.css";
    }


document.getElementById("l").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/lucioallanss/","_blank"); // Reemplaza esta URL por la que deseas utilizar
  });

document.getElementById("g").addEventListener("click", function() {
    window.open("https://github.com/LucioAllanSS","_blank"); // Reemplaza esta URL por la que deseas utilizar
  });

});