<template id="aaa">
    <div class="settled">
        <!-- 头部导航栏 -->
        <settledNav ref="nav" :style="{backgroundColor:'#2fc3b7'}"></settledNav>
        <div style="height:65px;"></div>
        <!-- banner -->
        <el-container class="mainBox">
            <el-main>
                <el-row>
                    <el-col :span="24">
                        <p class="bigsize">新零售时代</p>
                        <p class="tmready">你的天猫店准备好了吗？</p>
                        <p class="text">麦淘网专属绿色通道,最快7天下店,不成功入驻不收任何费用</p>
                        <p>
                            <el-button type="primary zxsale" round>我要咨询</el-button>
                            <el-button type="primary zxSettled" round>我要入驻</el-button>
                        </p>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <!-- 平台类目 -->
        <el-container id="category">
            <el-main>
                <el-row class="blockTitle">
                    <el-col>
                        <p class="titleth">TMALL</p>
                        <p class="pt-category">平台类目</p>
                    </el-col>
                </el-row>
                <el-row class="ptSettled" :gutter="25" type="flex" justify="space-between">
                    <el-col :span="6">
                        <div class="boxstyle">
                            <img src="../assets/Images/settled/tmimg.png" alt="天猫">
                            <p class="platform">天猫商城入驻</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="boxstyle">
                            <img src="../assets/Images/settled/jdimg.png" alt="京东">
                            <p class="platform">京东商城入驻</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="boxstyle">
                            <img src="../assets/Images/settled/taobaoimg.png" alt="淘宝">
                            <p class="platform">淘宝企业入驻</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="boxstyle">
                            <img src="../assets/Images/settled/moguimg.png" alt="蘑菇街">
                            <p class="platform">蘑菇街入驻</p>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <!-- 服务流程 -->
        <el-container id="serviceProcess">
            <el-main>
                <el-row class="flowRow" type="flex" justify="end" border>
                    <el-col class="context" :span="10">
                        <h1 class="title">服务流程</h1>
                        <p class="tips">专业一站式代入驻服务,品牌保障,立即开启电商梦想之旅</p>
                    </el-col>
                    <el-col class="flowCol" :span="5" v-for="item in iconUrls" :key="item.id">
                        <el-col class="box" :span="24">
                            <el-image :src="item.url" :fit="item.fill" :alt="item.text"></el-image>
                            <p class="solid"></p>
                            <p>{{item.text}}</p>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="flowRow" type="flex" justify="end" border>
                    <el-col class="context" :span="5"></el-col>
                    <el-col class="flowCol" :span="5" v-for="item in iconsTwo" :key="item.id">
                        <el-col class="box" :span="24">
                            <el-image :src="item.url" :fit="item.fill"></el-image>
                            <p class="solid"></p>
                            <p>{{item.text}}</p>
                        </el-col>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <!-- 我们的优势 -->
        <el-container id="advantage">
            <el-main>
                <el-row>
                    <el-col class="title">
                        <p class="titleth">ADVANTAGE</p>
                        <p class="pt-category">我们的优势</p>
                    </el-col>
                    <el-col class="leftMsg ysBox">
                        <p>√&nbsp;麦淘网代入驻</p>
                        <p>麦淘网立足行业6年，强大资源渠道确保成功率高达98%以上</p>
                        <p>麦淘网6年电商交易经验，资历丰富</p>
                        <p>一对一专业客服全程服务，提供专属解决方案</p>
                        <p>低订金代入驻天猫平台各类类目，入驻成功后收费</p>
                        <p>签订正规有效的法律合同，保障权益</p>
                    </el-col>
                    <el-col class="centerMsg ysBox">
                        <div class="sharpContainer">
                            <p class="sharp center"></p>
                            <span>VS</span>
                        </div>
                        <div class="feature f1">
                            <p>
                                <span class="advantage"></span>
                            </p>
                            <span class="positionObj">成功几率</span>
                        </div>
                        <div class="feature f2">
                            <p>
                                <span class="advantage"></span>
                            </p>
                            <span class="positionObj">品牌优势</span>
                        </div>
                        <div class="feature f3">
                            <p>
                                <span class="advantage"></span>
                            </p>
                            <span class="positionObj">一流服务</span>
                        </div>
                        <div class="feature f4">
                            <p>
                                <span class="advantage"></span>
                            </p>
                            <span class="positionObj">费用保障</span>
                        </div>
                        <div class="feature f5">
                            <p>
                                <span class="advantage"></span>
                            </p>
                            <span class="positionObj">法务支持</span>
                        </div>
                    </el-col>
                    <el-col class="rightMsg ysBox">
                        <p>
                            <b>×</b>&nbsp;普通代入驻
                        </p>
                        <p>入行不久，渠道单一，入驻能否成功听天由命</p>
                        <p>毫无经验，新注册公司平台，资质信息不全</p>
                        <p>客服同时批量处理多个入驻，无法保证及时性</p>
                        <p>交付订金后，服务质量直线下降，甚至出现订金威胁</p>
                        <p>合同草率不完整，口头承诺漂亮，毫无保障</p>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <!-- 入驻案例 -->
        <el-container id="case">
            <el-main>
                <el-row>
                    <el-col class="title">
                        <p class="titleth">CASE</p>
                        <p class="pt-category">入驻案例</p>
                    </el-col>
                </el-row>
                <el-row class="carousel">
                    <el-carousel :interval="5000" height="456px" type="ease-in" width="50px">
                        <el-carousel-item v-for="item in 1" :key="item">
                            <img class="itemImg" src="../assets/Images/settled/anliBg.png" alt="案例">
                        </el-carousel-item>
                    </el-carousel>
                </el-row>
            </el-main>
        </el-container>
        <!-- 入驻资质 -->
        <el-container id="Aptitudes">
            <el-main>
                <el-row>
                    <el-col class="title">
                        <p class="titleth">CASE</p>
                        <p class="pt-category">入驻资质</p>
                    </el-col>
                    <el-row></el-row>
                </el-row>
                <div class="rzInfomation">
                    <el-row class="opcity">
                        <p class="centerText">
                            <img
                                style="margin-top: -35px;"
                                src="../assets/Images/settled/qyIco.png"
                                alt="企业"
                            >
                        </p>
                        <p class="centerText">
                            <span>企业</span>&nbsp;/&nbsp;所需资料
                        </p>
                    </el-row>
                    <table class="contentTips" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <sup>1</sup>企业营业执照副本
                                </td>
                                <td>
                                    <sup>2</sup>企业税务登记证
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <sup>3</sup>组织机构代码证
                                </td>
                                <td>
                                    <sup>4</sup>银行开户许可证
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <sup>5</sup>法定代表人身份证正反面
                                </td>
                                <td>
                                    <sup>6</sup>店铺负责人身份证正反面
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <sup>7</sup>商家向支付宝的授权书
                                </td>
                                <td>
                                    <sup>8</sup>一般纳税人资质
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <el-row class="salesBtn">
                        <a onclick="redirectqq(3005921854)" href="javascript:void(0);">
                            <img
                                style="vertical-align: text-top; margin-right: 6px;"
                                src="../assets/Images/settled/greenqqIco.png"
                                alt="咨询客服"
                            >立即咨询客服
                        </a>
                    </el-row>
                    <p class="tips">注:根据平台和类目不同，可能有特殊资料、资质、年限等需求。详情请咨询客服</p>
                </div>
                <div class="rzInfomation">
                    <el-row class="opcity">
                        <p class="centerText">
                            <img
                                style="margin-top: -35px;"
                                src="../assets/Images/settled/grzxIco.png"
                                alt="个人"
                            >
                        </p>
                        <p class="centerText">
                            <span>个人</span>&nbsp;/&nbsp;所需资料
                        </p>
                    </el-row>
                    <el-row class="person">
                        <p>
                            <sup>1</sup>网店注册个人手机账号和邮箱
                        </p>
                        <p>
                            <sup>2</sup>所在平台买家账号（实名制）
                        </p>
                        <p>
                            <sup>3</sup>网店注册人身份证正反面照片和手持身份证
                        </p>
                    </el-row>
                    <el-row class="salesBtn">
                        <a onclick="redirectqq(3005730246)" href="javascript:void(0);">
                            <img
                                style="vertical-align: text-top; margin-right: 6px;"
                                src="../assets/Images/settled/greenqqIco.png"
                                alt="咨询客服"
                            >立即咨询客服
                        </a>
                    </el-row>
                    <p class="tips">注:根据平台和类目不同，可能有特殊资料、资质、年限等需求。详情请咨询客服</p>
                </div>
            </el-main>
        </el-container>
        <!-- 您可能还有以下这些问题 -->
        <el-container id="question">
            <el-main>
                <el-row align="bottom">
                    <el-col class="ques" :span="12">
                        <img src="../assets/Images/settled/quesImg.png" alt="图片">
                    </el-col>
                    <el-col :span="12">
                        <el-row>
                            <el-col class="title">
                                <p class="titleth">QUESTION</p>
                                <p class="pt-category">您可能还有以下这些问题</p>
                            </el-col>
                        </el-row>
                        <el-row class="quesList">
                            <el-col class="itemli" :offset="5" :span="14">
                                入驻需要什么条件?
                                <span>详情&nbsp;></span>
                            </el-col>
                            <el-col class="itemli" :offset="5" :span="14">
                                多长时间？
                                <span>详情&nbsp;></span>
                            </el-col>
                            <el-col class="itemli" :offset="5" :span="14">
                                成功率多少？
                                <span>详情&nbsp;></span>
                            </el-col>
                            <el-col class="itemli" :offset="5" :span="14">
                                不知热品牌能否入驻?
                                <span>详情&nbsp;></span>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :offset="5" :span="14">
                                <a class="saleqq" href="javascript:void(0);" target="_blank">咨询我们</a>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>


<script>
import settledNav from "../components/settledNav";
import $ from "jquery";
export default {
    name: "settled",
    components: {
        settledNav
    },
    data() {
        return {
            iconUrls: [
                {
                    id: 1,
                    url: require("../assets/Images/settled/gt.png"),
                    fill: "none",
                    text: "沟通意向"
                },
                {
                    id: 2,
                    url: require("../assets/Images/settled/qs.png"),
                    fill: "none",
                    text: "签署入驻合同"
                },
                {
                    id: 3,
                    url: require("../assets/Images/settled/fn.png"),
                    fill: "none",
                    text: "定制入驻方案"
                }
            ],
            iconsTwo: [
                {
                    id: 1,
                    url: require("../assets/Images/settled/tj.png"),
                    fill: "none",
                    text: "整理并提交资料"
                },
                {
                    id: 2,
                    url: require("../assets/Images/settled/dd.png"),
                    fill: "none",
                    text: "等待通知"
                },
                {
                    id: 3,
                    url: require("../assets/Images/settled/cg.png"),
                    fill: "none",
                    text: "成功入驻商城"
                },
                {
                    id: 4,
                    url: require("../assets/Images/settled/zf.png"),
                    fill: "none",
                    text: "支付服务费用"
                }
            ],
            tmrzTitle: [
                { href: "#category", text: "平台类目" },
                { href: "#serviceProcess", text: "服务流程" },
                { href: "#advantage", text: "我们的优势" },
                { href: "#case", text: "入驻案例" },
                { href: "#Aptitudes", text: "入住资质" },
                { text: "在线客服咨询" }
            ]
        };
    },
    mounted() {
        this.$refs.nav.flag = true;
        let navWidth = this.$refs.nav.$refs.listBox;
        navWidth.style = "width:81%";
    }
};

$(function() {});
</script>
<style lang="less" scoped>
//中间内容区最大宽度
.minWidth() {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}

//通用背景图
.box-bg(@h,@url) {
    height: @h;
    background: @url top center no-repeat;
    background-size: cover;
}

@mainColor: #60666e;
@minorColor: #f27c2d;
@blackColor: black;
@whiteColor: white;
@greenColor: #0fa496;
//banner
.mainBox {
    .box-bg(605px, url("../assets/Images/settled/ruzhuBanner.png"));
    .el-main {
        position: relative;
        .minWidth();
        .el-row {
            position: absolute;
            bottom: 0;
        }
        .el-col {
            height: 100%;
            .bigsize {
                color: @minorColor;
                font-weight: bold;
                font-size: 3.5em;
                margin-bottom: 10px;
            }

            .tmready {
                color: @mainColor;
                font-size: 2.6em;
                margin-bottom: 10px;
            }

            .text {
                color: @mainColor;
                font-size: 1.2em;
                margin-bottom: 10px;
            }
            .zxbtn(@bgcolor) {
                background-color: @bgcolor;
                border: none;
                width: 160px;
                padding: 15px 0;
                font-size: 16px;
                margin: 19px 0;
            }
            .zxsale {
                .zxbtn(@minorColor);
            }

            .zxSettled {
                .zxbtn(#feede5);
                color: @minorColor;
                margin-left: 2%;
            }
        }
    }
}

//版块儿通用title样式
.titleth {
    font-size: 3.8em;
    color: #e7e7e7;
    letter-spacing: 2px;
    text-align: center;
}
.pt-category {
    text-align: center;
    font-size: 2em;
    color: @blackColor;
    margin-top: -35px;
    margin-bottom: 40px;
}

//平台类目
#category {
    .box-bg(580px, url("../assets/Images/settled/cgbgimg.png"));
    .el-main {
        .minWidth();

        .blockTitle {
            padding-top: 50px;
            text-align: center;
        }

        .ptSettled {
            .el-col {
                .boxstyle {
                    &:hover {
                        cursor: pointer;
                        transform: translateY(-20px);
                    }
                    padding: 40px 0;
                    text-align: center;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    transition: transform 0.4s linear;
                    -webkit-transition: transform 0.4s linear;
                    -moz-transition: transform 0.4s linear;
                    -o-transition: transform 0.4s linear;
                    .platform {
                        font-size: 18px;
                        color: @mainColor;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
}

//服务流程
#serviceProcess {
    .box-bg(625px, url("../assets/Images/settled/processBg.png"));
    .el-main {
        padding-top: 150px;
        .minWidth();
        .flowRow {
            color: @whiteColor;
            text-align: center;
            .context {
                padding-top: 40px;
                text-align: left;
                .title {
                    color: @greenColor;
                    font-size: 3em;
                }
                .tips {
                    font-size: 14px;
                    color: #82838c;
                    margin: 15px 0;
                }
            }
            .flowCol {
                padding: 50px 0;
                border: 1px solid #404459;
                &:not(:last-of-type) {
                    border-right: none;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #0fa496;
                    border-radius: 10px;
                    z-index: 1;
                    transform: scale(1.1);
                    -webkit-transform: scale(1.1);
                    -moz-transform: scale(1.1);
                    -o-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    .box {
                        .solid {
                            width: 50%;
                            border-bottom: 1px solid #57bfb6;
                        }
                    }
                }
                .box {
                    .solid {
                        height: 1px;
                        width: 40px;
                        border-bottom: 1px solid @mainColor;
                        margin: 13px auto;
                        transition: all 0.5s ease 0.1s;
                        -webkit-transition: all 0.5s ease 0.1s;
                        -moz-transition: all 0.5s ease 0.1s;
                        -o-transition: all 0.5s ease 0.1s;
                    }
                }
            }
        }
    }
}

//我们的优势
@lightGreen: #35cbae;
#advantage {
    padding-top: 50px;
    .box-bg(760px, url("../assets/Images/settled/xueshanbg.png"));
    .el-main {
        .minWidth();
        .leftMsg {
            width: 45.25%;
            float: left;
            p {
                color: @whiteColor;
                background-color: @greenColor;
                height: 65px;
                line-height: 65px;
                border-radius: 10px;
                margin-bottom: 15px;
                text-align: center;
                &:first-of-type {
                    box-sizing: border-box;
                    margin-right: -14px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    font-size: 1.5em;
                    font-weight: 700;
                }
            }
        }
        .centerMsg {
            width: 9.5%;
            float: left;
            position: relative;
            .sharpContainer {
                position: relative;

                .center {
                    top: 0;
                    left: 14px;

                    &::before {
                        content: "";
                        width: 0;
                        border-top: 0 solid transparent;
                        border-bottom: 25px solid @lightGreen;
                        border-right: 43px solid transparent;
                        border-left: 43px solid transparent;
                        position: absolute;
                        left: 0;
                        top: -24px;
                    }

                    &::after {
                        content: "";
                        width: 0;
                        border-top: 25px solid @lightGreen;
                        border-bottom: 0 solid transparent;
                        border-right: 43px solid transparent;
                        border-left: 43px solid transparent;
                        position: absolute;
                        left: 0;
                        top: 65px;
                        z-index: 1;
                    }
                }
                span {
                    position: absolute;
                    left: 31%;
                    font-size: 2.5em;
                    bottom: -55px;
                    color: #fff;
                }

                .sharp {
                    min-width: 86px;
                    height: 65px;
                    display: inline-block;
                    position: absolute;
                    line-height: 160px;
                    color: #fff;
                    font-size: 20px;
                    text-align: center;
                    background: linear-gradient(180deg, #30c5b6, #36ccae);
                    box-sizing: border-box;
                }
            }

            .objPosition(@top,@left) {
                top: @top;
                left: @left;
            }

            .f1 {
                .objPosition(77px, 14px);
            }

            .f2 {
                .objPosition(153px, 14px);
            }

            .f3 {
                .objPosition(230px, 14px);
            }

            .f4 {
                .objPosition(307px, 14px);
            }

            .f5 {
                .objPosition(385px, 14px);
            }

            .feature {
                height: 64px;
                width: 86px;
                background: linear-gradient(180deg, #30c5b6, #36ccae);
                position: absolute;

                .advantage {
                    &:first-of-type {
                        &::before {
                            top: 64px;
                            left: 0;
                            z-index: 1;
                        }

                        &::after {
                            right: 0;
                            top: 0;
                        }
                    }
                    &::before {
                        content: "";
                        width: 0;
                        height: 0;
                        position: absolute;
                        border-top: 25px solid @lightGreen;
                        border-right: 43px solid transparent;
                        border-left: 43px solid transparent;
                        border-bottom: 0 solid transparent;
                    }

                    &::after {
                        content: "";
                        width: 0;
                        height: 0;
                        border-right: 43px solid transparent;
                        border-left: 43px solid transparent;
                        border-top: 25px solid #f9f9f9;
                        border-bottom: 0 solid transparent;
                        position: absolute;
                    }
                }

                .positionObj {
                    position: absolute;
                    top: 55%;
                    left: 13%;
                    font-weight: 700;
                    color: @whiteColor;
                    font-size: 16px;
                }
            }
        }
        .rightMsg {
            width: 45.25%;
            float: right;

            p:first-of-type {
                box-sizing: border-box;
                margin-left: -14px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                font-size: 1.5em;
                font-weight: 700;
            }

            p {
                background-color: #e8e8e8;
                border-radius: 10px;
                margin-bottom: 15px;
                text-align: center;
                color: #727272;
                height: 65px;
                line-height: 65px;
                b {
                    color: #2dafa3;
                    font-size: 26px;
                    vertical-align: bottom;
                }
            }
        }
    }
}

//入驻案例
#case {
    background-color: #f0f0f0;
    height: 740px;
    .el-main {
        padding-top: 50px;
        .minWidth();
        overflow: visible;
    }
}

//入驻资质
#Aptitudes {
    .box-bg(790px, url("../assets/Images/settled/zzbg.png"));
    .el-main {
        .minWidth();
        padding-top: 50px;
        .titleth {
            color: #67ccc2;
        }
        .pt-category {
            color: @whiteColor;
        }

        .rzInfomation {
            &:last-of-type {
                margin-left: 60px;
            }
            width: 550px;
            float: left;
            color: #fff;
            font-size: 16px;
            position: relative;
            background: rgba(0, 0, 0, 0.1);
            filter: alpha(opacity=10);
            border-radius: 10px;

            .opcity {
                background: rgba(0, 0, 0, 0.05);
                filter: alpha(opacity=5);
                text-align: center;
                padding-bottom: 20px;
                border-radius: 10px;
            }

            .person {
                text-align: left;
                margin: 10px 0 30px;
                height: 210px;
                p {
                    font-size: 16px;
                    margin-left: 85px;
                    height: 45px;
                    line-height: 45px;
                }
            }

            span {
                font-size: 24px;
            }

            .contentTips {
                margin: 10px 0 30px;
                height: 210px;

                td {
                    padding-left: 30px;
                    height: 45px;
                    line-height: 45px;
                }
            }

            sup {
                border-radius: 100%;
                background: rgba(0, 0, 0, 0.2);
                filter: alpha(opacity=20);
                padding: 1px 6px;
                margin-right: 7px;
                font-size: 14px;
                vertical-align: middle;
            }
            .salebutton() {
                padding: 50px 0;
                text-align: center;
                border-top: 1px solid #e3e3e3;
            }

            .salesBtn {
                .salebutton();
                a {
                    background: linear-gradient(to right, #ffffff, #f1f1f1);
                    box-shadow: 0 0 0.43rem #42b1a7;
                    padding: 20px 57px;
                    text-align: center;
                    color: #009688;
                    font-size: 16px;
                    border-radius: 50px 50px;
                }
            }

            .tips {
                text-align: center;
                color: #fff;
                font-size: 12px;
                margin-bottom: 20px;
            }
        }
    }
}

//问题
#question {
    .box-bg(550px, url("../assets/Images/settled/question.png"));
    .el-main {
        padding-top: 85px;
        padding-bottom: 0;
        .minWidth();
        .ques {
            img {
                width: 100%;
                vertical-align: bottom;
            }
        }
        .quesList {
            .itemli {
                line-height: 35px;
                height: 35px;
                span {
                    float: right;
                }
                &:hover {
                    color: #3cb8c0;
                    cursor: pointer;
                }
            }
        }

        .saleqq {
            background-color: #f27c2d;
            color: #fff;
            padding: 12px 45px;
            border-radius: 40px 40px;
            margin-top: 35px;
            display: inline-block;
        }
    }
}
</style>

