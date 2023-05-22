var userAgent = window.navigator.userAgent;
var platform = window.navigator.platform;

document.addEventListener('DOMContentLoaded', function() {
    var linkStyles = document.querySelector('link[href="Mobile.css"]');
        
    if (platform.includes('Win') || platform.includes('Linux') || platform.includes('Mac')){
        linkStyles.href = "/PC.css";
    }
        
    if (userAgent.includes('Android') || userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
        linkStyles.href = "/PC.css";
    }
});
