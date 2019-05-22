<template>
    <div class="notice">
        <settledNav></settledNav>
        <div style="height:65px;width:100%"></div>
        <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/tblive' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/notice/1'}">网站公告</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container class="pageBg">
            <el-container id="announcement">
                <router-view></router-view>
                <el-aside id="announcement_right" width="325px">
                    <el-main>
                        <h6>
                            <i></i>置顶公告
                        </h6>
                        <ul>
                            <li>
                                <a href="/notice/1">全新的麦淘网来啦！</a>
                            </li>
                            <li>
                                <a href="/notice/2">2019开工大吉！致所有追梦者的情书</a>
                            </li>
                            <li>
                                <a href="/notice/3">2019新春小憩，麦淘网放假通知</a>
                            </li>
                            <li>
                                <a href="/notice/4">元旦佳节，麦淘热情不打烊</a>
                            </li>
                            <li>
                                <a href="/notice/5">麦淘网祝全体新老客户中秋快乐</a>
                            </li>
                            <li>
                                <a href="/notice/6">在我心中，你最“粽”要！</a>
                            </li>
                            <li>
                                <a href="/notice/7">麦淘网全新版本上线啦</a>
                            </li>
                            <li>
                                <a href="/notice/8">麦淘网小程序轻装上线</a>
                            </li>
                            <li>
                                <a href="/notice/9">开业大吉，狗年旺旺！</a>
                            </li>
                            <li>
                                <a href="/notice/10">相伴电商5年，麦淘网成功挂牌！</a>
                            </li>
                        </ul>
                    </el-main>
                </el-aside>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import settledNav from "@/components/settledNav";

export default {
    name: "notice",
    components: { settledNav },
    data() {
        return {};
    }
};
</script>

<style scoped lang="less">
//中间内容区最大宽度
.minWidth() {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}

.breadcrumb {
    background: url("../assets/Images/commonImgs/home-icon.png") left center
        no-repeat;
    height: 45px;
    line-height: 45px;
    max-width: 1200px;
    margin: auto;
    padding-left: 1.5%;
}

.pageBg {
    padding: 2% 0;
    background-color: #f6f6f6;
    #announcement {
        .minWidth();

        #announcement_right {
            .el-main {
                border-radius: 15px;
                background-color: white;
                h6 {
                    border-bottom: 1px solid #f1f1f1;
                    font-size: 18px;
                    padding-bottom: 0.5em;
                    font-weight: 400;

                    i {
                        border: 2px solid #fdf060;
                        margin: 0 10px;
                        display: inline-block;
                        height: 13px;
                        vertical-align: middle;
                    }
                }

                ul {
                    margin-top: 1em;
                    counter-reset: section;
                    li {
                        position: relative;
                        padding: 0.23em;
                        *padding: 0.23em;
                        margin: 0 0 0.5em 2em;
                        font-size: 15px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        -webkit-transition: all 0.2s ease-out;
                        -moz-transition: all 0.2s ease-out;
                        -ms-transition: all 0.2s ease-out;
                        -o-transition: all 0.2s ease-out;
                        transition: all 0.2s ease-out;

                        &::before {
                            counter-increment: section;
                            content: counter(section);
                            position: absolute;
                            left: -2.5em;
                            top: 50%;
                            margin-top: -0.8em;
                            background: #e3e3e3;
                            width: 1.5em;
                            height: 1.5em;
                            line-height: 1.5em;
                            text-align: center;
                        }

                        &::after {
                            position: absolute;
                            content: "";
                            border: 0.5em transparent solid;
                            left: -2em;
                            top: 50%;
                            margin-top: -0.5em;
                            -webkit-transition: all 0.2s ease-out;
                            -moz-transition: all 0.2s ease-out;
                            -o-transition: all 0.2s ease-out;
                            -ms-transition: all 0.2s ease-out;
                            transition: all 0.2s ease-out;
                        }
                        a {
                            color: #666;
                        }
                        .yellowBg() {
                            background: #fdf060;
                        }
                        &:first-of-type,
                        &:nth-child(2),
                        &:nth-child(3) {
                            &::before {
                                .yellowBg;
                            }

                            &::after {
                                position: absolute;
                                content: "";
                                border: 0.5em transparent solid;
                                top: 50%;
                                margin-top: -0.5em;
                            }
                            font-weight: bold;
                        }

                        &:hover {
                            &:first-of-type,
                            &:nth-child(2),
                            &:nth-child(3) {
                                &::after {
                                    left: -1em;
                                    border-left-color: #fdf060;
                                }
                                background: #fdf060;
                            }

                            &::after {
                                left: -1em;
                                border-left-color: #e3e3e3;
                            }
                            background: #eee;
                        }
                    }
                }
            }
        }
    }
}
</style>
