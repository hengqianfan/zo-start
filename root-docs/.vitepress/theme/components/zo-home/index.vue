<template>
    <div class="zs-home">

        <div class="zs-home-navbar">

            <div class="zs-home-navbar-item" v-for="item in navlist">{{ item }}</div>

        </div>

        <div class="zs-home-content">

        </div>
        <!-- 
        <div class="card-group">
            <div class="card-group-title">常 规</div>
            <div class="card-group-content">
                <div class="card" v-for="item in sitedata">
                    <div class="card-top">
                        <div class="card-icon">
                            <img src="/public/波克比.png" alt="">
                        </div>
                        <div class="card-title">{{ item.title }}</div>
                    </div>
                    <div class="card-content">
                        {{ item.intro }}
                    </div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script setup>
import { links } from '../../../../zo-data/link';
import { ref } from 'vue'



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

let navlist = ref(getNavItem(links))

// console.log(navlist);


</script>

<style lang="scss" scoped>
.zs-home {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 90vh;
    background-color: gainsboro;

    .zs-home-navbar {
        margin: 0 auto;
        margin-top: 20px;
        height: 50px;
        min-width: 600px;
        max-width: 80vh;
        background-color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border-radius: 25px;


        .zs-home-navbar-item {
            width: 80px;
            height: 30px;
            background-color: gainsboro;
            text-align: center;
            line-height: 30px;
            border-radius: 20px;
            color: rgb(96, 88, 88);
        }
    }

    .zs-home-content {
        min-height: 75vh;
        width: 95%;
        margin: 0 auto;
        margin-top: 20px;
        background-color: white;
        border-radius: 15px;
    }
}

// .myhome {
//     width: 100%;
//     height: 80vh;
//     background-color: rgb(231, 228, 228);

//     .card-group {

//         display: flex;
//         flex-direction: column;

//         .card-group-title {

//             height: 30px;
//             line-height: 30px;
//             background-color: white;
//             width: 200px;
//             margin: 0 auto;
//             margin-top: 20px;
//             text-align: center;
//             font-size: 16px;
//             border-radius: 15px;
//             font-weight: 600;

//         }

//         .card-group-content {
//             width: 100%;
//             display: flex;
//             padding: 20px;
//             flex-wrap: wrap;


//             .card {
//                 border: 2px dashed transparent;
//                 margin: 15px;
//                 height: 150px;
//                 width: 320px;
//                 ;
//                 background-color: rgb(197, 214, 210);
//                 border-radius: 10px;


//                 .card-top {
//                     width: 300px;
//                     height: 50px;
//                     margin: 20px;
//                     display: flex;
//                     flex-direction: row;
//                     justify-content: space-between;

//                     .card-icon {
//                         width: 50px;
//                         height: 50px;
//                     }

//                     .card-title {
//                         width: 200px;
//                         height: 50px;
//                         line-height: 50px;
//                         font-size: 20px;
//                         font-weight: 500;
//                         color: #266548;
//                         // text-align: center;
//                     }
//                 }

//                 .card-content {
//                     height: 50px;
//                     font-size: 12px;
//                     // 首行缩进
//                     text-indent: 12px;
//                     margin: 15px;
//                     padding: 5px;
//                     background-color: white;
//                     border-radius: 8px;
//                     color: rgb(110, 110, 116);
//                 }
//             }

//             .card:hover {
//                 border: 2px dashed rgb(23, 82, 95);

//                 .card-top {


//                     .card-icon {}

//                     .card-title {}
//                 }

//                 .card-content {}
//             }
//         }
//     }
// }</style>