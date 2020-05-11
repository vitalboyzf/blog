<template>
    <div class="article-list" ref="article1" v-if="articleList&&articleList.length!==0">
        <div class="article" ref="article" v-for="article in articleList" :key="article.id">
            <router-link :to="{path:'/article/'+article.id,params:{id:article.id}}" class="article-title">
                {{article.title}}【查看全文】
            </router-link>
            <p class="article-content" v-html="article.content" />
            <div class="article-foot">发布于 {{article.ctime}}
                | 浏览 {{article.views}} | Tags 【{{article.tags}}】
            </div>
        </div>
        <pager-control v-if="!this.clickTitle" @changePage="changePage" :pageInfo="pageInfo" />
    </div>
</template>

<script>
    import {queryBlogByPage, queryBlogByTag} from '@/net/request'
    import PagerControl from "./pager/Pager";
    import {getCurrentTime} from '../utils';

    export default {
        name: "ArticleList",
        data() {
            return {
                articleList: [],
                pageInfo: {
                    current: 1,
                    limit: 5,
                    total: 0,
                    panelpager: 5
                },
                clickTitle: false
            }
        },
        components: {
            PagerControl
        },
        methods: {
            requestBlogByPage(page, pageSize) {
                queryBlogByPage(page, pageSize).then(res => {
                    if (res.status === 'success') {
                        this.pageInfo.total = res.total;
                        this.articleList = res.data;
                        this.articleList.forEach(item => {
                            item.link = item.id;
                            item.ctime = getCurrentTime(item.ctime * 1000);
                        })
                    }
                })
            },
            getBlogByTag(tagId) {
                let articleLength;
                queryBlogByTag(tagId).then(res => {
                    if (res.status === 'success') {
                        this.pageInfo.total = res.total;
                        this.articleList = res.data;
                        articleLength = res.data.length;
                        this.articleList.forEach(item => {
                            item.link = item.id;
                            item.ctime = getCurrentTime(item.ctime * 1000);
                        })
                    }
                    this.pageInfo.total = articleLength;
                })
            },
            changePage(page) {
                this.requestBlogByPage(page, this.pageInfo.limit);
            },
        },
        created() {
            if (!this.clickTitle) {
                this.requestBlogByPage(this.pageInfo.current, this.pageInfo.limit);
            }
            this.$bus.$on('updatePage', id => {
                this.$router.push('/home');
                this.getBlogByTag(id);
                this.clickTitle = true;
            })
            this.$bus.$on('getAllPage', () => {
                this.clickTitle = false;
                this.requestBlogByPage(1, this.pageInfo.limit);
            });
        },
    }
</script>

<style lang="less" scoped>

    p {
        margin: 0;
    }

    .article-list {
        width: 70%;
        margin-top: 20px;

        .article {
            box-shadow: 1px 2px 2px #888888;
            margin-top: 20px;
            background-color: #fff;
            height: 113px;
            position: relative;
            overflow: hidden;
            /*!*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*!*/

            /*&::-webkit-scrollbar {*/
            /*    width: 16px;*/
            /*    height: 16px;*/
            /*    background-color: #f5f5f5;*/
            /*}*/

            /*!*定义滚动条的轨道，内阴影及圆角*!*/

            /*&::-webkit-scrollbar-track {*/
            /*    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
            /*    border-radius: 10px;*/
            /*    background-color: #f5f5f5;*/
            /*}*/

            /*!*定义滑块，内阴影及圆角*!*/

            /*&::-webkit-scrollbar-thumb {*/
            /*    !*width: 10px;*!*/
            /*    height: 20px;*/
            /*    border-radius: 10px;*/
            /*    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
            /*    background-color: #555;*/
            /*}*/

            .article-title {
                font-size: 20px;
                color: #0000ff;
                display: inline-block;
                margin: 20px 10px 5px 10px;
                text-decoration: none;

                &:hover {
                    color: #337ab7;
                }
            }

            .article-content {
                font-size: 14px;
                color: #13102b;
                padding: 0px 10px 20px 10px;
                word-wrap: break-word;
                word-break: break-all;
                overflow: hidden;
            }

            .article-foot {
                position: absolute;
                bottom:0;
                width: 98%;
                border-radius: 5px;
                background-color: #13102b;
                color: #fff;
                padding: 5px;
                font-size: 15px;
                margin: 0;
            }
        }
    }
</style>