console.log("Github Info");

function fetchGitHubInformation(event) {
    var username = $("gh-username").val;

    if (!username) {
        $("gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    // display a loader gif while data is being accessed
    $("gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading...">
        </div>`
    );

}