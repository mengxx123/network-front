<template>
    <my-page title="User Agent 分析" backable>
        <ui-article class="article">
            <h2>工具介绍</h2>
            <ul>
                <li>本工具可以获得一些电脑浏览器和系统的一些信息，所以用途主要在以下情况。</li>
                <li>查看自己的IP地址或归属地。</li>
                <li>查看自己的浏览器版本、内核、UA信息，用于软件开发或者其他用途。</li>
                <li>通过IP地址和IP归属地，来查看自己翻墙是否成功。</li>
                <li>可以查看自己的屏幕分辨率，看看自己的显示器大小是多少？</li>
                <li>可以看到自己的时区是哪个时区！例如我就在8 hours</li>
            </ul>
            <h2>相关知识</h2>
            <ul>
                <li>用户代理 User Agent，是指浏览器,它的信息包括硬件平台、系统软件、应用软件和用户个人偏好。</li>
                <li>早的时候有一个浏览器叫NCSA Mosaic，把自己标称为NCSA_Mosaic/2.0 (Windows 3.1)，它支持文字显示的同时还支持图片，于是Web开始好玩起来。</li>
                <li>通过浏览器navigator.userAgent，可以获得用户的UserAgent。</li>
                <li>UserAgent简称UA，可以用作一个用户的真实访问，一般的Web统计流量也会针对UA信息去统计浏览器占比，移动占比等等。</li>
            </ul>

            <h2>常用浏览器(PC,移动) user-agent</h2>
            <p>该对照表整理了时下流行的浏览器User-Agent大全，User Agent也简称UA。它是一个特殊字符串头，是一种向访问网站提供你所使用的浏览器类型及版本、操作系统及版本、浏览器内核、等信息的标识。并悬浮提示来访者的user-agent信息。</p>
            <h3>PC端</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">safari 5.1 – MAC</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">safari 5.1 – Windows</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">IE 9.0</span><input type="text"
                                                                                                             class="form-control"
                                                                                                             onmouseover="javascript:this.select();"
                                                                                                             value="User-Agent,Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">IE 8.0</span><input type="text"
                                                                                                             class="form-control"
                                                                                                             onmouseover="javascript:this.select();"
                                                                                                             value="User-Agent,Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">IE 7.0</span><input type="text"
                                                                                                             class="form-control"
                                                                                                             onmouseover="javascript:this.select();"
                                                                                                             value="User-Agent,Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">IE 6.0</span><input type="text"
                                                                                                             class="form-control"
                                                                                                             onmouseover="javascript:this.select();"
                                                                                                             value="User-Agent, Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Firefox 4.0.1 – MAC</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv,2.0.1) Gecko/20100101 Firefox/4.0.1">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Firefox 4.0.1 – Windows</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Mozilla/5.0 (Windows NT 6.1; rv,2.0.1) Gecko/20100101 Firefox/4.0.1">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Opera 11.11 – MAC</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Opera 11.11 – Windows</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11"></div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Chrome 17.0 – MAC</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">傲游（Maxthon）</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Maxthon 2.0)"></div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">腾讯TT</span><input type="text"
                                                                                                           class="form-control"
                                                                                                           onmouseover="javascript:this.select();"
                                                                                                           value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; TencentTraveler 4.0)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">世界之窗（The World） 2.x</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"></div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">世界之窗（The World） 3.x</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; The World)"></div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">搜狗浏览器 1.x</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SE 2.X MetaSr 1.0; SE 2.X MetaSr 1.0; .NET CLR 2.0.50727; SE 2.X MetaSr 1.0)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">360浏览器</span><input type="text"
                                                                                                             class="form-control"
                                                                                                             onmouseover="javascript:this.select();"
                                                                                                             value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; 360SE)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Avant</span><input type="text"
                                                                                                            class="form-control"
                                                                                                            onmouseover="javascript:this.select();"
                                                                                                            value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Green Browser</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"></div>
                </li>
            </ul>
            <h3>移动设备端</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">safari iOS 4.33 – iPhone</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">safari iOS 4.33 – iPod Touch</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">safari iOS 4.33 – iPad</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent,Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Android N1</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Android QQ浏览器 For android</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Android Opera Mobile</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Android Pad Moto Xoom</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">BlackBerry</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1+">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">WebOS HP Touchpad</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Nokia N97</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">Windows Phone Mango</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">UC无</span><input type="text"
                                                                                                          class="form-control"
                                                                                                          onmouseover="javascript:this.select();"
                                                                                                          value="User-Agent, UCWEB7.0.2.37/28/999">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">UC标准</span><input type="text"
                                                                                                           class="form-control"
                                                                                                           onmouseover="javascript:this.select();"
                                                                                                           value="User-Agent, NOKIA5700/ UCWEB7.0.2.37/28/999">
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">UCOpenwave</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Openwave/ UCWEB7.0.2.37/28/999"></div>
                </li>
                <li class="list-group-item">
                    <div class="input-group" style="width: 100%"><span class="input-group-addon" style="width:188px"
                                                                       id="basic-addon1">UC Opera</span><input
                            type="text" class="form-control" onmouseover="javascript:this.select();"
                            value="User-Agent, Mozilla/4.0 (compatible; MSIE 6.0; ) Opera/UCWEB7.0.2.37/28/999"></div>
                </li>
            </ul>
        </ui-article>
    </my-page>
</template>
