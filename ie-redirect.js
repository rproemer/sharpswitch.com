//redirect borwser if is using Internet Explorer AND not already on IE site OR careers site

var msie = window.navigator.userAgent.indexOf("MSIE ");
if (
  msie > 0 &&
  (!(document.location.href.indexOf("/ie") > 0) ||
    document.location.href.indexOf("/careers") > 0)
) {
  setTimeout(function() {
    console.log("Redirect to IE site");
    document.location.href = "/ie";
  }, 0);
}
