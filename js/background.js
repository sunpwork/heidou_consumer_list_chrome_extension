chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    $.ajax({
        url: "http://xkxtop.test/topUsers/update",
        data: JSON.stringify(request.top_users),
        contentType: "application/json; charset=utf-8",
        type: "POST",
        success: function ($result) {

        },
    });
});