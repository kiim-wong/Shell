/*******************************
网易云笔记测试
*******************************
[rewrite_local]
^https:\/\/note\.youdao\.com\/yws\/mapi\/payment\?method= url script-response-body https://raw.githubusercontent.com/kiim-wong/Shell/master/service/wyybj.js
[mitm] 
hostname = note.youdao.com
*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const mumu = 'status';
const mumu2 = 'getPaidStatus';


if (url.indexOf(mumu) != -1) {
    obj.end = 4077286408000;
    obj.userType =2;

	body = JSON.stringify(obj);
}

if (url.indexOf(mumu2) != -1) {
    obj.lastPayTime = 1667304936000;
    obj.lastRenewEndTime = 4077286408000;
    objpaid = 1;

	body = JSON.stringify(obj);
}


$done({body});
