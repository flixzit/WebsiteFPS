/**
 * Cookie Settings Manager
 * Stores and retrieves cookies.
 */

// Set cookie
function setCookie(name, value, days) {
    const expires = days
        ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString()
        : "";
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Get cookie
function getCookie(name) {
    return document.cookie
        .split("; ")
        .find(row => row.startsWith(name + "="))
        ?.split("=")[1];
}

// Save user cookie settings (optional use)
function saveCookieSettings(settings) {
    setCookie("cookie_settings", JSON.stringify(settings), 365);
}

// Load user cookie settings (optional use)
function loadCookieSettings() {
    const settings = getCookie("cookie_settings");
    return settings ? JSON.parse(decodeURIComponent(settings)) : null;
}

export { setCookie, getCookie, saveCookieSettings, loadCookieSettings };
