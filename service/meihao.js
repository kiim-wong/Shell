/*******************************

  公众号：木木IOS分享 原十三座州府
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https:\/\/api\.wx\.gcihotel\.net\/api\/shop\ url script-response-body https://raw.githubusercontent.com/kiim-wong/Shell/master/service/meihao.js
[mitm] 
hostname = api.wx.gcihotel.net

//hostname :api.wx.gcihotel.net
//重写链接：^https:\/\/api\.wx\.gcihotel\.net\/api\/shop\/flashGoodsDetail\

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const mumu = '/flashGoodsDetail';


if (url.indexOf(mumu) != -1) {
    obj.data.retVal.flashGoods.dayStartTime = "2022-11-01 10:00:00";
    obj.data.retVal.flashGoods.startTime = "2022-11-01 10:00:00";

	body = JSON.stringify(obj);
}


$done({body});
