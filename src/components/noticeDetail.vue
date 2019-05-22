<template>
    <el-container class="noticeDetail main">
        <el-main v-for="item in datas" :key="item.id">
            <el-row>
                <h3 v-html="item.title"></h3>
                <p class="docSource">
                    <span>来源：{{item.source}}</span>
                    <span>|</span>
                    <span>发布时间：{{item.time}}</span>
                    <span>|</span>
                    <span>
                        浏览：
                        <em>{{item.num}}</em>
                    </span>
                </p>
            </el-row>
            <el-row class="context" v-html="item.text"></el-row>
            <el-row class="announcement_left_next">
                <label>下一篇：</label>
                <a href="#">麦淘网祝全体新老客户中秋快乐</a>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: "noticeDetail",
    components: {},
    data() {
        return {
            id: null,
            datas: [
                {
                    id: 6,
                    title: "在我心中，你最“粽”要！",
                    source: "麦淘网",
                    time: "2018/6/15 18:42:13",
                    num: 1024,
                    text: `<p><span style="font-size:18px;font-family:微软雅黑, Microsoft YaHei"><br></span></p>
                    <p><span style="font-size:18px;font-family:微软雅黑, Microsoft YaHei"><br></span></p>
                    <p><span style="font-size:18px;font-family:微软雅黑, Microsoft YaHei">&nbsp; &nbsp; &nbsp; &nbsp; 据古书记载，农历五月初五的正午时分是每年第一个登高顺阳的好日子，故五月初五亦称为“端午节”。</span></p>
                    <p><span style="font-size:18px;font-family:微软雅黑, Microsoft YaHei"><br></span></p>
                    <p><span style="font-size:18px;font-family:微软雅黑, Microsoft YaHei">&nbsp; &nbsp; &nbsp; &nbsp; 端午节中华儿女几千年来的传统节日，在这一天，我们会吃鲜甜可口的粽子，还会举行热闹的龙舟赛，在这里，小编代表麦淘网各地区全体职工，祝新老客户和所有电商朋友：出门玩的，一路顺风玩尽兴；宅在家的，吃好喝好休息足；看世界杯的，熬夜狂欢庆赢球；加班工作的，硕果累累多赚钱！</span></p>
                    <p><span style="font-size:18px;font-family:微软雅黑, Microsoft YaHei"><br></span></p>
                    <p><span style="font-size:18px;font-family:微软雅黑, Microsoft YaHei">&nbsp; &nbsp; &nbsp; &nbsp; 假日期间，如需购买或出售网店，请咨询在线客服或拨打24小时客服热线400-9908-331，我们将竭诚为您服务！</span></p>
                    <p><br></p>`
                }
            ]
        };
    },
    mounted() {
        let id = this.$route.params.id;
        this.id = id;
    }
};
</script>

<style scoped lang="less">
.main {
    background-color: white;
    margin-right: 1.5%;
    border-radius: 15px;
    .el-main {
        padding: 2% 3%;
        h3 {
            color: #333;
            font-size: 1.8em;
            font-weight: 500;
        }

        .docSource {
            border-bottom: 1px solid #f1f1f1;
            padding: 2em 0 1.3em;

            span {
                font-size: 15px;
                color: #999;
                margin-right: 3%;
            }
        }

        .context {
            color: #333;
            line-height: 50px;
        }

        .announcement_left_next {
            font-size: 16px;
            a {
                color: #333;
            }
        }
    }
}
</style>