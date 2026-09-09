// Runs before first paint (loaded synchronously in <head>) to avoid a flash
// of the wrong theme. Keep this file tiny and dependency-free.
(function () {
    try {
        var stored = localStorage.getItem('theme');
        var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
        // localStorage/matchMedia unavailable (e.g. privacy mode) — fall back to CSS media query default.
    }
})();
