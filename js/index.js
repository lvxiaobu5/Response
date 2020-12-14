//假数据，list为模拟获取到数据
var list=[
    {
        "id":1,
        "name":"莫凡",
        "url1":"https://jin10videoserver.jin10.com/Act-ss-mp4-hd/9c779cbc17954236a3a9f795a5f82e79/mofan12.mp4",
        "title":"课程中的逻辑叠加方法，帮助你建立(完善)交易系统。",
        "text":"利用五个条件(斜率、 Pinbar、 箱体、RSI、 顶底背离)的叠加使用，精确点位，做到客观理性准确入场，再结合仓位控制分布式进场，大幅提高交易胜率!更有配套课程技术指标小课，帮助学员熟练掌握核心指标的使用!",
        "text2":"要获得盈利密码？你需要科学的交易行为修正！",
        "url2":"https://jin10videoserver.jin10.com/Act-ss-mp4-hd/d1944f202c844026bfef518aa7b40bf7/2mofan.mp4",
        "text3":"对话莫凡老师，用大数据统计解读交易行为的背后逻辑",
        "url3":"https://jin10videoserver.jin10.com/Act-ss-mp4-hd/f249ecf271224cdc9750d20f41de89c5/1duihuamofanlaoshi.mp4"
    },
    {
        "id":2,
        "name":"Kevin",
        "url1":"https://jin10videoserver.jin10.com/Act-ss-mp4-hd/76f47f25b1f84ea3b2e53137a9548a32/3Kevin.mp4",
        "title":"这套系统最大的特点是高胜率捕捉反转行情,适合抄底和摸顶。手法上日内短线和波段都适用。",
        "text":"TB,Top Bottom简称， TB信号是2B法则基础上的优化。建立正确的短线交易理念，辨别各类趋势，清晰数浪，准确使用斐波那契和黄金分割，仓位管理等，并结合图表统计验证自己的方法有效性，搭建起TB信号盈利模型。",
        "text2":"提升盘感，你需要掌握这4大实操步骤", 
        "url2":"https://jin10videoserver.jin10.com/Act-ss-mp4-hd/76f47f25b1f84ea3b2e53137a9548a32/3Kevin.mp4",
        "text3":"掌握趋势交易策略，巧妙应用思维导图",
        "url3":"https://jin10videoserver.jin10.com/Act-ss-mp4-hd/1cc143f3c25047bcac8a35b70c3db342/4siweidaotu.mp4",
    },
    {
        "id":3,
        "name":"陈海清",
        "url1":"http://jin10videoserver.jin10.com/Act-ss-mp4-hd/e24fa47a075140ebbb99eed109139149/%E7%A8%B3%E5%AE%9A%E7%9B%88%E5%88%A9%E5%BF%85%E9%A1%BB%E6%B8%85%E6%99%B0%E7%9A%84%E4%B8%89%E4%B8%AA%E4%B8%96%E7%BA%AA%E4%B9%8B%E9%97%AE.mp4",
        "title":"没有复杂的技术指标，简单易懂，学完就能用于实盘交易。",
        "text":"趋势的识别、均线的使用、看什么周期做交易、三大维度选择货币对、革兰氏八大法则找到入场位置、读K术，确认入场时机、严格的风控，做正期望的交易。",
        "text2":"为什么95%的人在交易中亏损？", 
        "url2":"http://jin10videoserver.jin10.com/Act-ss-mp4-hd/17b2dd073866405898b8839d0639a5ff/%E4%BA%A4%E6%98%93%E6%99%BA%E6%85%A7%E7%9A%84%E5%9B%9B%E4%B8%AA%E7%BB%B4%E5%BA%A6.mp4",
        "text3":"践行这三个要素，从亏损走向盈利",
        "url3":"http://jin10videoserver.jin10.com/Act-ss-mp4-hd/77e754e952ea46e5b4218789f5e401ad/%E8%AE%A9%E4%BA%A4%E6%98%93%E4%BB%8E%E4%BA%8F%E6%8D%9F%E5%88%B0%E7%9B%88%E5%88%A9.mp4",
    }
]
var obj=list.find(x=>x.id === 1)
var obj2=list.find(x=>x.id === 2)
var obj3=list.find(x=>x.id === 3)
//封装一个getElementById()的方法
function byId (id) {
	return typeof(id) === "string" ? document.getElementById(id) : id;
}
//测试
// console.log(byId("one_title"));
//将数据渲染到页面
byId("one_title").innerHTML = obj.title
byId("one_text").innerHTML = obj.text
byId("one_text2").innerHTML = obj.text2
byId("one_text3").innerHTML = obj.text3

byId("two_title").innerHTML = obj2.title
byId("two_text").innerHTML = obj2.text
byId("two_text2").innerHTML = obj2.text2
byId("two_text3").innerHTML = obj2.text3

byId("three_title").innerHTML = obj3.title
byId("three_text").innerHTML = obj3.text
byId("three_text2").innerHTML = obj3.text2
byId("three_text3").innerHTML = obj3.text3
// 根据当前浏览器宽度跳转到对应的链接
function a(b){
    console.log(b)
    if(document.documentElement.clientWidth>965){
        b.setAttribute('href','https://school.jin10.com/course/75')
    }else{
        b.setAttribute('href','https://school.jin10.com/course/mobile/75')
    }
}

// 点击显示视频,点击视频外区域关闭视频
function show(url){
    var vi=document.getElementById("vi")
    var vid=document.getElementById("my-video1")
    vid.src=url
   
   if( vi.style.width == "100%") {
     vi.style.width = "0"
     vid.style.width="0"
   }else{
		 vi.style.width = "100%"
		 vid.style.width="71vw"
	 }
}

//移动端点击显示二维码
var eweima =document.getElementById("show_ma")
var eweima2 =document.getElementById("show_eweima")
function show_eweima(){
    // console.log(eweima.style.height)
    if(eweima.style.height=="0px"){
    eweima.style.height="100%" 
    eweima2.style.height="75vw" }
    else{
        eweima.style.height="0px"  
        eweima2.style.height="0px" 
    }
    }

