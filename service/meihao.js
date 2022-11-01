/*******************************

*******************************
[rewrite_local]
^http[s]?:\/\/api.wx.gcihotel.net\/\/api\/\/shop\/flashGoodsDetail.+$ url script-response-body https://raw.githubusercontent.com/kiim-wong/Shell/master/service/meihao.js
[mitm] 
hostname = *.gcihotel.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.wx.gcihotel.net\/\/api\/\/shop\/flashGoodsDetail.+$ url script-response-body https://raw.githubusercontent.com/kiim-wong/Shell/master/service/meihao.js

[MITM]
hostname = *.gcihotel.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.retVal.flashGoods.dayStartTime = "2022-11-01 10:00:00";
    $done({body: JSON.stringify(obj)});
