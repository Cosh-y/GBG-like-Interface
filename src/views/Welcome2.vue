<template>
<Row>
    <Col span="12" offset="6">
        <div style="text-align: center;">
            <Title style="text-align: center;">Our Works Feature</Title>
        </div>
    </Col>
</Row>
<Row>
    <Col span="6" offset="6">
        <div style="text-align: center;">
            <img src="../assets/安全.png">
        </div>
    </Col>
    <Col span="6" >
        <div style="text-align: center;">
            <img src="../assets/速度.png">
        </div>
    </Col>
</Row>
<Row>
    <Col span="12" offset="6">
        <div style="text-align: center;">
            <img src="../assets/节能.png">
        </div>
    </Col>
</Row>


<Row>
    <Col span="9">
        <div style="text-align: right;">
            <img src="../assets/校徽.jpg" height="300">
        </div>
    </Col>
    <Col span="6" offset="3">
        <div style="text-align: center;">
            <Title style="text-align: center;">基于二代基因测序实验室调度算法设计</Title>
        </div>
    </Col>
</Row>
<!-- <GlobalFooter  :links="links" :copyright="copyright" /> -->
</template>

<script>
    export default {
        data () {
            return {
                value: 0,
                value1:30,
                list: [
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppshLyn.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppshvwV.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppshOLq.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppshje0.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppshqQs.jpg',
                        tip: '隐私保护'
                    },
                ],
                links: [
                    {
                        key: '帮助',
                        title: '帮助',
                        blankTarget: true
                    },
                    {
                        key: 'github',
                        icon: 'logo-github',
                        blankTarget: true
                    },
                    {
                        key: '条款',
                        title: '条款',
                        href: '',
                        blankTarget: true
                    }
                ],
                copyright: 'Copyright © 2023 View Design All Rights Reserved'
            }
        },
        methods: {
            saveProgress() {
                this.$router.push('./LayOut')
            }
        }
    }
</script>

<style>
#building{
background:url("https://s1.ax1x.com/2023/03/18/ppJs891.jpg");
width:100%;
height:100%;
position:fixed;
background-size:100% 100%;
opacity: 0.5;
z-index: 0;
}
.cardStyle {
    z-index: 10;
    top:400px;
    left: 500px;
    width: 100px;
    height: 69px;
    position: static;
}
</style>
