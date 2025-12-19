## proxyhttp 接口返回参数解密步骤
搜索关键字 `parseResponseData` `parseData`

proxyhttp 接口请求参数中中包含 `vinfoad` 参数，搜索这个关键字，定位到请求参数封装的代码，发现是 `l.reqParams = function (e, t) {`，继续追溯使用 `reqParams` 的地方，定位到接口请求

Q.parseData?.vinfo;

Ag(e, ["parseData", "resData", "reqParams"]);