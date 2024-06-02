const lightThemeFavicon = document.querySelector("link#light-theme-favicon");
const darkThemeFavicon = document.querySelector("link#dark-theme-favicon");

const matcher = window.matchMedia('(prefers-color-scheme: light)');
matcher.addEventListener('change', setFavicon);
setFavicon();

function setFavicon(){
    if (matcher.matches) {
        darkThemeFavicon.remove();
        document.head.append(lightThemeFavicon);
    }
    else {
        lightThemeFavicon.remove();
        document.head.append(darkThemeFavicon);
    }
}