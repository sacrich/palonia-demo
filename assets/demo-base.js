/** Resolves assets/* correctly on GitHub Pages (/repo-name/) and local http.server */
(function () {
  var path = location.pathname;
  if (path.endsWith('.html')) {
    path = path.substring(0, path.lastIndexOf('/') + 1);
  } else if (!path.endsWith('/')) {
    path += '/';
  }
  var base = document.createElement('base');
  base.href = location.origin + path;
  document.head.insertBefore(base, document.head.firstChild);
})();
