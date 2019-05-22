<template>
    <div class="navtop">
        <div class="main clearfix">
            <div class="logo">
                <img src="../assets/Images/logos/logo.png" alt="logo">
            </div>
            <ul ref="listBox" class="clearfix">
                <li class="items">
                    <router-link to="/tblive">麦淘首页</router-link>
                </li>
                <li class="items">
                    <a :href="flag?tmrzTitle.href:tbrzTitle.href">服务项目</a>
                </li>
                <li class="items">
                    <a href="#whyOpenTbLive">为什么开通淘宝直播</a>
                </li>
                <li class="items">
                    <a href="#floatpermissions">什么是浮现权限</a>
                </li>
                <li class="items">
                    <a href="#rzadvantage">入驻优势</a>
                </li>
                <li class="items">
                    <a href="#cooperationFlow">合作流程</a>
                </li>
                <li v-if="flag" class="items">
                    <a href="#question">常见问题</a>
                </li>
                <li class="items">
                    <a href="#" class="activeborder">
                        <img
                            class="smallqq"
                            src="../assets/Images/commonImgs/smallQQ.png"
                            alt="qqicon"
                        >&nbsp;立即入驻
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "settledNav",
    data() {
        return {
            flag: false
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navtop {
    width: 100%;
    position: fixed;
    z-index: 10;
    .main {
        max-width: 1200px;
        min-width: 1000px;
        width: 100%;
        margin: 0 auto;
    }

    .logo {
        display: inline-block;
        text-align: left;
    }
    background-color: black;
    ul {
        width: 70%;
        float: right;
        .items {
            vertical-align: middle;
            height: 65px;
            line-height: 65px;
            float: left;
            margin-left: 4.5%;
            @media screen and (max-width: 1215px) {
                margin-left: 3.5%;
            }
            @media screen and (max-width: 1120px) {
                margin-left: 3%;
            }
            @media screen and (max-width: 1070px) {
                margin-left: 2.5%;
            }

            &:hover {
                a {
                    &:not(.activeborder) {
                        padding-bottom: 5px;
                        border-bottom: 1px solid white;
                    }
                }
            }
            a {
                color: white;
                text-decoration: none;
                font-size: 15px;
                transition: all 0.3s ease-out;
                -webkit-transition: all 0.3s ease-out;
                -moz-transition: all 0.3s ease-out;
                -o-transition: all 0.3s ease-out;
            }
            .activeborder {
                border: 1px solid white;
                border-radius: 20px;
                padding: 4px 6px;
            }
            .smallqq {
                vertical-align: text-bottom;
                margin-bottom: 1px;
            }
        }
    }
}
</style>
