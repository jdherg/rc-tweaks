const urlMatcherToFavicon = [
    [/recurse.rctogether.com/, 'virtual_rc.ico']
];

function setFavicon(favicon_path) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = chrome.runtime.getURL("distinct_favicons/" + favicon_path);
}
const currentURL = window.location.href;
for (const [matcher, path] of urlMatcherToFavicon) {
    if (matcher.test(currentURL)) {
        setFavicon(path);
        break;
    }
}
