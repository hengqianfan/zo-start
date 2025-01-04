<template>
    <div class="zs-home">

        <div class="zs-home-navbar">

            <div class="zs-home-navbar-item" v-for="item in navlist" @click="changePage(item)">{{ item }}</div>

        </div>

        <div class="zs-home-content">

            <div class="zs-home-content-card" v-for="item in showedLinkList" @click="tosite(item.link)">
                <div class="zs-home-content-card-top">
                    <div class="zs-home-content-card-icon">{{ item.icon }}</div>
                    <div class="zs-home-content-card-title">{{ item.title }}</div>
                </div>
                <div class="zs-home-content-card-intro">
                    {{ item.intro }}
                </div>
            </div>

        </div>

        <div class="zs-home-end">

            黔ICP备<a href="https://beian.miit.gov.cn/">2023015500-2</a>号 |

            Copyright© 2023-2025 深岩焰界 · 阿牛宇宙


        </div>

    </div>
</template>

<script setup>
import { links } from '../../../../zo-data/link';
import { ref } from 'vue'


// 获取一级分类
const getNavItem = (momo) => {
    // 1. 先遍历数组
    let arr = []
    for (let i = 0; i < momo.length; i++) {


        if (momo[i].classone) {
            arr.push(momo[i].classone)

        }

    }

    // console.log(arr);


    // 2. 去重
    const res = Array.from(new Set(arr))
    // 3. 返回结果
    return res
}
// 一级分类的数组
let navlist = ref(getNavItem(links))

// 展示的链接
let showedLinkList = ref([])

// 现在的选中的一级分类

let classoneSelected = ref('主世界')

// 从全部数据中获取展示的数据
const getSortedLinks = (momo = [], nono) => {

    let res = momo.filter(item => item.classone == nono)

    return res
}
// 初始化数据
showedLinkList.value = getSortedLinks(links, classoneSelected.value)

// 导航栏改变时
const changePage = (momo) => {
    classoneSelected.value = momo
    showedLinkList.value = getSortedLinks(links, classoneSelected.value)
}


const tosite = (momo) => {
    window.open(momo)
}
</script>

<style lang="scss" scoped>
// $zs_bg_01: #e9e7e7;
$zs_bg_01: #eff0f3;

.zs-home {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 91vh;
    background-color: $zs_bg_01;

    .zs-home-navbar {
        margin: 0px auto;
        margin-top: 15px;
        padding: 10px;
        height: 40px;
        min-width: 100px;
        max-width: 80vh;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border-radius: 25px;

        box-shadow: 1px 1px 2px #c6c4c4 inset, -1px -1px 2px #ffffff inset;



        .zs-home-navbar-item {
            margin: 0 10px;
            width: 80px;
            height: 25px;
            background-color: $zs_bg_01;
            text-align: center;
            line-height: 25px;
            border-radius: 20px;
            color: rgb(64, 60, 84);
            box-shadow: 1px 1px 2px #c6c4c4, -1px -1px 2px #ffffff;
            font-family: '剑豪体';

        }

        .zs-home-navbar-item:hover {

            background-color: #3e5258;

            color: #ffffff;


        }
    }

    // 隐藏滚动条
    ::-webkit-scrollbar {
        display: none;
    }

    .zs-home-content {


        height: 72vh;
        width: 95%;
        margin: 0 auto;
        margin-top: 20px;
        background-color: white;
        border-radius: 15px;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 1px 1px 2px #c6c4c4 inset,
            -1px -1px 2px #ffffff inset;
        overflow-y: scroll;


        .zs-home-content-card {
            width: 300px;
            height: 150px;
            margin: 20px;
            background-color: $zs_bg_01;
            padding: 15px;
            border-radius: 10px;
            border: 2px dashed transparent;
            box-shadow: 1px 1px 2px #c6c4c4, -1px -1px 2px #ffffff;

            .zs-home-content-card-top {
                display: flex;
                flex-direction: row;
                justify-content: space-around;

                .zs-home-content-card-icon {
                    width: 40px;
                    height: 40px;
                    background-color: white;
                    line-height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    border-radius: 5px;
                }

                .zs-home-content-card-title {
                    width: 200px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 20px;
                    font-weight: 600;
                    // font-family: '剑豪体';


                }

            }

            .zs-home-content-card-intro {
                margin: 0 auto;
                margin-top: 20px;

                // background-color: wheat;
                background-color: white;

                padding: 5px;
                width: 260px;
                height: 60px;
                font-size: 14px;
                text-indent: 14px;
                color: #868a8d;
                border-radius: 5px;
            }


        }

        .zs-home-content-card:hover {
            border: 2px dashed rgb(87, 131, 150);

        }
    }

    .zs-home-end {

        background-color: white;
        height: 40px;
        // width: 800px;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 15px;
        padding: 0 10px;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
        color: #7b8082;

    }
}
</style>