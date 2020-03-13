<template>
    <div class="column">
        <div class="m-header">
            <span class="title">  
                <!-- 标题 -->
                <slot name="title"></slot>
            </span>
            <img :src="require('@/assets/images/jyyy.png')" alt="">
        </div>
        <div class="m-main">
            <!-- 内容区 -->
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    @color: #821c21;
    .column {
        width: 100%;
        .m-header {
            text-align: center;
            padding-bottom: 44px;
            padding-top: 50px;
            .title {
                font-size: 20px;
                font-weight: 700;
                color: @color;
                display: inline-block;
                width: 128px;
                text-align-last: justify;
            }
        }
    }
</style>
