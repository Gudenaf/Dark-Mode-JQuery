$(document).ready(function () {
    $("#radio-btn").click(function () {
        $(this).toggleClass('active');

        let siteTheme = $(".body");
        $(siteTheme).attr('data-theme', $(siteTheme).attr('data-theme') == 'light' ? 'dark' : 'light');

        let changeTitle = $(".title");
        $(changeTitle).text(function (i, text) {
            return text === "Light Mode" ? "Dark Mode" : "Light Mode";
        });
    });
});