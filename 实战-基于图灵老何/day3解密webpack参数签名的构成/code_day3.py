import requests
import time
import execjs


def json_to_query_string(data, key_order=None):
    """
    将字典转换为URL参数字符串，支持自定义参数顺序

    :param data: 输入的字典数据
    :param key_order: 指定的参数顺序列表，如果为None则按字典键的字母顺序排序
    :return: URL参数字符串
    """
    if key_order is None:
        # 如果没有指定顺序，按字母顺序排序
        keys = sorted(data.keys())
    else:
        # 使用指定的顺序，并过滤掉不存在的key
        keys = [key for key in key_order if key in data]
        # 添加未在key_order中指定的其他key（按字母顺序）
        other_keys = sorted(set(data.keys()) - set(keys))
        keys.extend(other_keys)

    query_parts = []
    for key in keys:
        value = data[key]
        # 将值转换为字符串（处理数字等非字符串类型）
        str_value = str(value) if value is not None else ""
        query_parts.append(f"{key}={str_value}")

    return "&".join(query_parts)

cookies = {
    'HWWAFSESID': '030e573c832fe64d71',
    'HWWAFSESTIME': '1754838141928',
    'hasTelegraphNotification': 'on',
    'hasTelegraphRemind': 'on',
    'hasTelegraphSound': 'on',
    'vipNotificationState': 'on',
    'Hm_lvt_fa5455bb5e9f0f260c32a1d45603ba3e': '1754838162',
    'Hm_lpvt_fa5455bb5e9f0f260c32a1d45603ba3e': '1754838162',
    'HMACCOUNT': '4B44A7FBEA65AF7C',
    'tfstk': 'gJPSId1pJ3xSk2wtFX721cGhD4GIFZ5wOegLSydyJbh-AwaK07kEwDRCRlri8acUTU20bPdzaTceObcn9GSN_1zzrXcdwOnIW3AxWV1Ey03-ZjUegTN1_1zuy0mUjJ5aTeuOy2iK9YHKDjnmWpL8vBpAl23e2pd8vrQjm2RJp0p-ks3t-LhK9kUAl2oxyXH8vrQj-mnKIp1juai0PNw9CPlhMG4ocBdLGqInXzODTqNSPGn_zmTH8SOiFcU-cBIJCs6nAmVO0ta0b8Erok11cfegcWMtO_tiP-UsM0lONUmTa2aadPs6Yq28VSHQgwXulWiSB7HXWBlxi2EKd-j6_4GzhAN7EwxYylo7Bb4e5gzjC-MikxLBebya7WDTw_ti0A0QcAy5fQZO41dZf7KXdEMMOqiNlZ9HKhZy-5QQbsTteq02bZ_XQyD-oqiNlZ9HKY3muN7fldzh.',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=utf-8',
    'Pragma': 'no-cache',
    'Referer': 'https://cls.cn/telegraph',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0',
    'sec-ch-ua': '"Not;A=Brand";v="99", "Microsoft Edge";v="139", "Chromium";v="139"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'HWWAFSESID=030e573c832fe64d71; HWWAFSESTIME=1754838141928; hasTelegraphNotification=on; hasTelegraphRemind=on; hasTelegraphSound=on; vipNotificationState=on; Hm_lvt_fa5455bb5e9f0f260c32a1d45603ba3e=1754838162; Hm_lpvt_fa5455bb5e9f0f260c32a1d45603ba3e=1754838162; HMACCOUNT=4B44A7FBEA65AF7C; tfstk=gJPSId1pJ3xSk2wtFX721cGhD4GIFZ5wOegLSydyJbh-AwaK07kEwDRCRlri8acUTU20bPdzaTceObcn9GSN_1zzrXcdwOnIW3AxWV1Ey03-ZjUegTN1_1zuy0mUjJ5aTeuOy2iK9YHKDjnmWpL8vBpAl23e2pd8vrQjm2RJp0p-ks3t-LhK9kUAl2oxyXH8vrQj-mnKIp1juai0PNw9CPlhMG4ocBdLGqInXzODTqNSPGn_zmTH8SOiFcU-cBIJCs6nAmVO0ta0b8Erok11cfegcWMtO_tiP-UsM0lONUmTa2aadPs6Yq28VSHQgwXulWiSB7HXWBlxi2EKd-j6_4GzhAN7EwxYylo7Bb4e5gzjC-MikxLBebya7WDTw_ti0A0QcAy5fQZO41dZf7KXdEMMOqiNlZ9HKhZy-5QQbsTteq02bZ_XQyD-oqiNlZ9HKY3muN7fldzh.',
}

time1 = round(time.time()) - 1800 # 向前推2000秒,当前时间的前面一个页面

sign = execjs.compile(open('webpack_code.js', 'r', encoding='utf-8').read()).call('main123', time1)
print(sign)
#请求参数 时间戳向前推 当前时间戳
params = {
    'app': 'CailianpressWeb',
    'lastTime': str(time1),
    'last_time': str(time1),
    'os': 'web',
    'refresh_type': '1',
    'rn': '20',
    'sv': '8.4.6',
    'sign': sign, # 签名
}
params_2 = json_to_query_string(params)
print(params_2)
response = requests.get('https://cls.cn/nodeapi/telegraphList', params=params, cookies=cookies, headers=headers).json()
print(response)