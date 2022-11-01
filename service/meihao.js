/*******************************

*******************************
[rewrite_local]
^http[s]?:\/\/api.wx.gcihotel.net\/\/api\/\/shop\/flashGoodsDetail.+$ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/Ceshi.js
[mitm] 
hostname = *.gcihotel.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.wx.gcihotel.net\/\/api\/\/shop\/flashGoodsDetail.+$ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/Ceshi.js

[MITM]
hostname = *.gcihotel.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.userId = 9999;
obj.data.endTime = "脚本成功啦";
    $done({body: JSON.stringify(obj)});
