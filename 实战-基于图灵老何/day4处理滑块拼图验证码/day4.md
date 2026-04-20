day4
2025/8/12

处理验证码时尽量不扣js代码，直接py复现
    

加密分析：
    
    captchaKey:
    , _0x422ded = _0x4c771b(_0x4e0309 + _0x11dbad())
_0x4e0309：服务器返回的时间戳
_0x11dbad()：是uuid 生成函数 uuid_str = str(uuid.uuid4())
    
    token:
    , _0x4e0309 = _0x4c771b(_0x4e0309 + _0x3fedba + _0x589b78 + _0x422ded) + ':' + (parseInt(_0x4e0309) + 0x493e0) || ''
_0x4e0309：服务器返回的时间戳
_0x3fedba："qDG21VMg9qS5Rcok4cfpnHGnpf5LhcAv" (固定值)
_0x589b78："slide" (固定值)
_0x422ded：captchaKey

    iv:
    _0x4015b8['IMAGE_VERIFY_TAG'] = _0x4c771b(_0x3fedba + _0x589b78 + Date[_0x5876dc(0x3d5)]() + _0x11dbad())
_0x3fedba:"qDG21VMg9qS5Rcok4cfpnHGnpf5LhcAv" (固定值)
Date_0x5876dc(0x3d5): 当前时间戳

相同：_0x4c771b是主要的加密方法： md5加密
验证码==> 环境验证（请求频繁）  签名验证（加密参数） 时效性验证（验证码有效时间）


