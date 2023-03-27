<template>
    <div id="building"></div>
    <div class="StyleTwo">
        <Carousel autoplay autoplay-speed="3000" v-model="value" loop>
        <CarouselItem>
            <div class="demo-carousel">
                <div class="StyleFour">
                    <p>WElCOME TO OUR WORK</p>
                </div>
                <div class="StyleThree">
                    <p>LAB SCHEDULING ALGORITHM</p>
                </div>
                <div class="StyleFive">
                    <Button size="large" type="success" shape="circle" icon="md-jet" @click="saveProgress">Let's Start!</Button>
                </div>
                <img src="../assets/图片1.jpg">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <div class="StyleSix">
                    <p>DIRECT BY:LDMC LAB</p>
                </div>
                <div class="StyleSeven">
                    <p>WE BUILD EVETHING WITH PASSION</p>
                </div>
                <div class="StyleEight">
                    <Button size="large" type="success" shape="circle" icon="md-jet" @click="saveProgress">Let's Start!</Button>
                </div>
                <img src="../assets/图片2.jpg">
            </div>
        </CarouselItem>
        </Carousel>
    </div>
    <div>null</div>
</template>
<script>
    export default {
        data () {
            return {
                value: 0
            }
        },
        methods: {
            saveProgress() {
                this.$router.push('./Welcome1')
            }
        }
    }
</script>


<style>
.func{
    z-index: 20;
    width: 1530px;
    height: 669px;
    position: absolute;
    color: blueviolet;
}
.StyleTwo{
    z-index: 10;
    width: 1530px;
    height: 669px;
    position: static;
    background-color: rgb(3, 0, 0);
}
.StyleThree{
    z-index: 11;
    width: 1330px;
    height: 1000px;
    top:200px;
    left: 130px;
    position: absolute;
    font-family: Arial;
    font-size: 100px;
    color:white;
    font-weight: bold;
    text-align: center;
}
.StyleFour{
    z-index: 11;
    width: 1530px;
    height: 1000px;
    top:170px;
    left: 550px;
    position: absolute;
    font-family: Arial;
    font-size: 40px;
    color:white;
}
.StyleFive{
    z-index: 11;
    width: 1530px;
    height: 1000px;
    top:470px;
    left: 730px;
    position: absolute;
    font-family: Arial;
    font-size: 40px;
    color:white;
}
.StyleSix{
    z-index: 11;
    width: 1470px;
    height: 1000px;
    top:170px;
    left: 2100px;
    position: absolute;
    font-family: Arial;
    font-size: 40px;
    color:white;
}
.StyleSeven{
    z-index: 11;
    width: 1230px;
    height: 1000px;
    top:200px;
    left: 1680px;
    position: absolute;
    font-family: Arial;
    font-size: 100px;
    color:white;
    font-weight: bold;
    text-align: center;
}
.StyleEight{
    z-index: 11;
    width: 1530px;
    height: 1000px;
    top:470px;
    left: 2230px;
    position: absolute;
    font-family: Arial;
    font-size: 40px;
    color:white;
}
</style>