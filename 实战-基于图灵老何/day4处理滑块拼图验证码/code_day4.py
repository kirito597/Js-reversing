import requests
import uuid
import hashlib
import time
import re
import ddddocr

class Codepy1(object):

    def __init__(self):
        """
        初始化
        """
        self.headers = {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://authserver.whsw.cn/',
            'Sec-Fetch-Dest': 'script',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Storage-Access': 'active',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0',
            'sec-ch-ua': '"Not;A=Brand";v="99", "Microsoft Edge";v="139", "Chromium";v="139"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        self.slide = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)

    def md5_hash(self, input_string):
        """
        md5加密
        input_string: 需要被加密的内容
        return：被加密的字符串
        """
        input_bypes = input_string.encode('utf-8')
        md5 = hashlib.md5()
        md5.update(input_bypes)
        return md5.hexdigest()

    def RequestTools(self, url, params=None):
        """
        工具方法，requests请求
        url: 请求地址
        params: 请求参数
        return：服务器响应内容
        """
        response = requests.get(url, headers=self.headers, params=params)
        return response

    def server_time_get(self):
        """
        获取服务器时间戳
        return：服务器时间戳
        """
        params = {
            'callback': 'cx_captcha_function',
            'captchaId': 'qDG21VMg9qS5Rcok4cfpnHGnpf5LhcAv',
            '_': str(round(time.time() * 1000)),
        }
        url = 'https://captcha.chaoxing.com/captcha/get/conf'
        #字符串切片获取时间戳
        server_time = self.RequestTools(url, params).text[25:38]
        return server_time

    def captcha_get(self):
        """
        获取滑块验证码,并处理当中的加密参数
        :return:
        """
        server_time = self.server_time_get()
        uuid_str = str(uuid.uuid4())
        captchaKey = self.md5_hash(server_time + uuid_str)
        catid = 'qDG21VMg9qS5Rcok4cfpnHGnpf5LhcAv'
        type = 'slide'
        token1 = self.md5_hash(server_time + catid + type + captchaKey) + ':' + str(int(server_time) + 0x493e0)
        iv1 = self.md5_hash(catid + type + str(round(time.time() * 1000)) + str(uuid.uuid4()))

        params = {
            'callback': 'cx_captcha_function',
            'captchaId': 'qDG21VMg9qS5Rcok4cfpnHGnpf5LhcAv',
            'type': 'slide',
            'version': '1.1.20',
            'captchaKey': captchaKey,
            'token': token1,
            'referer': 'https://authserver.whsw.cn/cas/login?service=https%3A%2F%2Fwhsw.jw.chaoxing.com%2Fadmin%2Fcaslogin',
            'iv': iv1,
            '_': str(round(time.time() * 1000)),
        }
        url = 'https://captcha.chaoxing.com/captcha/get/verification/image'
        response = self.RequestTools(url, params).text
        return response, iv1

    def validate_get(self):
        """
        数据处理，获取填补坐标
        :return:
        """
        response, iv = self.captcha_get()
        token = re.findall(r'"token":"(.*?)"', response)[0]
        #背景图
        shadeImage = re.findall(r'"shadeImage":"(.*?)"', response)[0]
        #方块图
        cutoutImage = re.findall(r'"cutoutImage":"(.*?)"', response)[0]
        distance_X = self.get_slide_offset(shadeImage, cutoutImage)
        self.evrify_slide(distance_X, token, iv)

    def get_slide_offset(self, bg_url, slide_url):
        """
        获取滑块缺口位置
        bg_url: 背景图url
        slide_url: 滑块图url
        return：缺口位置
        """
        slide_image = self.RequestTools(slide_url).content
        bg_image = self.RequestTools(bg_url).content
        result = self.slide.slide_match(slide_image, bg_image, simple_target=True)
        return result["target"][0]

    def evrify_slide(self,distance_X, token, iv):
        """
        验证滑块验证码
        distance_X: 滑块缺口位置
        token: 加密参数
        """
        params = {
            'callback': 'cx_captcha_function',
            'captchaId': 'qDG21VMg9qS5Rcok4cfpnHGnpf5LhcAv',
            'type': 'slide',
            'token': token,
            'textClickArr': '[{"x":%d}]' % distance_X,
            'coordinate': '[]',
            'runEnv': '10',
            'version': '1.1.20',
            't': 'a',
            'iv': iv,
            '_': str(round(time.time() * 1000)),
        }
        url = 'https://captcha.chaoxing.com/captcha/check/verification/result'
        response = self.RequestTools(url, params).text
        print(response)

if __name__ == '__main__':
    cat = Codepy1()
    cat.validate_get()