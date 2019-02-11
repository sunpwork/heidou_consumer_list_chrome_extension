var user_trs = $('tbody').children('tr');
var top_users = [];
for (var i = 0; i < user_trs.length; i++) {
    var tds = $(user_trs[i]).children('td');
    var user = {
        'uid': tds[0].innerText,
        'name': tds[1].innerText,
        'consumption': $(tds[5]).children('span')[0].innerText,
    };
    if ($(tds[1]).children('img')[0]) {
        user['avatar'] = $(tds[1]).children('img')[0].src;
    }
    top_users.push(user);
}
chrome.runtime.sendMessage({ 'top_users': top_users }, function (response) {

});
console.log(top_users);