import requests
import execjs

cookie_v = execjs.compile(open('get_cookie_code.js', 'r', encoding='utf-8').read()).call('main123')
print(cookie_v)

cookies = {
    'refreshStat': 'off',
    'Hm_lvt_f79b64788a4e377c608617fba4c736e2': '1754466180,1754719752',
    'HMACCOUNT': '4B44A7FBEA65AF7C',
    'Hm_lvt_60bad21af9c824a4a0530d5dbf4357ca': '1754466180,1754719752',
    'Hm_lvt_78c58f01938e4d85eaf619eae71b4ed1': '1754466180,1754719752',
    'Hm_lpvt_60bad21af9c824a4a0530d5dbf4357ca': '1754720704',
    'Hm_lpvt_f79b64788a4e377c608617fba4c736e2': '1754720704',
    'Hm_lpvt_78c58f01938e4d85eaf619eae71b4ed1': '1754720704',
    'v': cookie_v,
}

headers = {
    'Accept': 'text/html, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://data.10jqka.com.cn/market/longhu/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
    'X-Requested-With': 'XMLHttpRequest',
    'hexin-v': 'A2SFw5qV0EEmKCSNxIpBCXF5NWlT_YiBSiAdnX6F8mTySwpXpg1Y95ox7DjN',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'refreshStat=off; Hm_lvt_f79b64788a4e377c608617fba4c736e2=1754466180,1754719752; HMACCOUNT=4B44A7FBEA65AF7C; Hm_lvt_60bad21af9c824a4a0530d5dbf4357ca=1754466180,1754719752; Hm_lvt_78c58f01938e4d85eaf619eae71b4ed1=1754466180,1754719752; Hm_lpvt_60bad21af9c824a4a0530d5dbf4357ca=1754720704; Hm_lpvt_f79b64788a4e377c608617fba4c736e2=1754720704; Hm_lpvt_78c58f01938e4d85eaf619eae71b4ed1=1754720704; v=A2SFw5qV0EEmKCSNxIpBCXF5NWlT_YiBSiAdnX6F8mTySwpXpg1Y95ox7DjN',
}

response = requests.get(
    'https://data.10jqka.com.cn/ifmarket/lhbyyb/type/1/tab/sbcs/field/sbcs/sort/desc/page/3/',
    cookies=cookies,
    headers=headers,
).text
print(response)
