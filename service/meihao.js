/*
黄油相机

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

[rewrite_local]
^https:\/\/api\.wx\.gcihotel\.net\/api\/shop\/flashGoodsDetail\.json url script-response-body https://raw.githubusercontent.com/kiim-wong/Shell/master/service/meihao.js

[mitm] 
hostname = api.wx.gcihotel.net
*/

body = $response.body.replace("20:00:00", "10:00:00")
$done({body});
