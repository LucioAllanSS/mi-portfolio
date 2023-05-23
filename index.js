var userAgent = window.navigator.userAgent;
var platform = window.navigator.platform;

document.addEventListener('DOMContentLoaded', function() {
    var linkStyles = document.querySelector('link[href="PC.css"]');
        
    if (platform.includes('Win') || platform.includes('Linux') || platform.includes('Mac')){
        linkStyles.href = "PC.css";
    }
        
    if (userAgent.includes('Android') || userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
        linkStyles.href = "PC.css";
    }


document.getElementById("l").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/lucioallanss/"; // Reemplaza esta URL por la que deseas utilizar
  });

document.getElementById("g").addEventListener("click", function() {
    window.location.href = "https://github.com/LucioAllanSS"; // Reemplaza esta URL por la que deseas utilizar
  });

});