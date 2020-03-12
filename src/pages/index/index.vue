<template>
    <div class="index">
        <!-- 头部 / 上部 -->
        <header class="header container">
            1
        </header>
        <nav class="first-nav">
            <div class="container">

            </div>
        </nav>
        <div class="swiper">
            2
        </div>
         <nav class="second-nav">
            <div class="container">

            </div>
        </nav>
        <!-- 主体 -->
        <div class="main container">
            3
        </div>
        <!-- 底部 -->
        <footer class="foot">
            <div class="container">
                4
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    components: {
        
    }
}
</script>

<style scoped lang="less">
.index {
    .header {
        height: 106px;
        background-color: pink;
    }
    .first-nav {
        height: 60px;
        background-color: #d4cbbd;
    }
    .swiper {
        height: 470px;
        background-color: skyblue;
    }
    .second-nav {
        height: 60px;
        background-color: #f3bd66;
    }
    .main {
        min-height: 300px;
        background-color: tomato;
    }
    .foot {
        height: 468px;
        background-color: #585657;
    }
}

</style>
