
import { Row } from 'view-ui-plus';

<template>
<div id="building"></div>
<Row>
    <Col span="16" offset="4">
        <Card style="width:1000px;height:1930px;">
            <space>
                <img src="../assets/校徽.jpg">
                <Title style="text-align: center;">基于二代基因测序实验室调度算法设计</Title>
            </space>
            <Title :level="2">操作指引</Title>
            <Paragraph style="font-size: 18px;font-weight: bold;font-family: 'Times New Roman', Times, serif;">
                1.在LayOut界面，进行设备使用规划，将您所需要的设备从左边设备池拖出，移动到右边位置。在您选定好后点击计算，系统会自动计算您所选设备。
            </Paragraph>
            <Paragraph style="font-size: 18px;font-family: 'Times New Roman', Times, serif;">
                <Text type="warning" style="font-weight: bold;">注意事项: 真正的实验排程在这一部分会需要设置您所选设备的相关参数，所以您需要使用有参模式。无参模式将会使用默认构造！！！</Text>
            </Paragraph>
            <Paragraph style="font-size: 18px;font-weight: bold;font-family: 'Times New Roman', Times, serif;">
                2.在Process界面，利用您刚刚所选设备进行排程，即规划设备操作流程。每个设备有很多可以执行的操作，您需要将其拖入泳道当中，用来规划流程执行顺序。当然，您可以设置多个流程，只需添加Board即可。
            </Paragraph>
            <Paragraph style="font-size: 18px;font-weight: bold;font-family: 'Times New Roman', Times, serif;">
                3.绘制甘特图，这一部分的输入源为前两部分，由后台的算法完成。您只需要耐心等待。
            </Paragraph>
            <Title :level="2">我们的目标</Title>
            <space>
                <img src="../assets/GBG.png">
                <Paragraph style="font-size: 18px;font-weight: bold;font-family: 'Times New Roman', Times, serif;">
                对标美国GreenButtonGo,实现中国的GreenButtonGo.
                <Text type="success">改善缓解当前中国在该领域的空白。</Text>
                服务广大中国实验室调度排程。这是我们小组与所在实验室的共同目标。
                </Paragraph>
            </space>
            <Paragraph></Paragraph>
            <Title :level="2">算法简介</Title>
            <div class="imgStyle">
                <img src="../assets/实验流程.png" style="text-align: center;">
            </div>
            
            <Title :level="2">项目历程</Title>
            <div style="font-size: 20px;">
                <space>
                    <Timeline style="font-size: 20px;">
                <TimelineItem color="green">
                    <template #dot>
                        <Icon type="ios-trophy"></Icon>
                    </template>
                    <span style="font-size: 20px;">2022.12 正式加入项目.</span>
                </TimelineItem>
                <TimelineItem>
                    <span style="font-size: 20px;">2022.12-2023.02 算法设计</span>
                </TimelineItem>
                <TimelineItem>
                    <span style="font-size: 20px;">2022.12-2023.02 算法初稿设计完成</span>
                </TimelineItem>
                <TimelineItem>
                    <span style="font-size: 20px;">2023.02-2023.03 前端制作</span>
                </TimelineItem>
                <TimelineItem color="green">
                    <span style="font-size: 20px;">Coming Soon 前后端协作，对标GreenButtonGo</span>
                </TimelineItem>
                </Timeline>
                <Title :level="2">感谢所有参与项目的人员：
                    <AvatarList size="large" :list="list" />
                    <div class="imgStyle">
                        <h5>(图片已模糊处理)</h5>
                    </div>
                </Title>
                </space>
            </div>
            <div class="imgStyle">
                <Title :level="2" style="text-aling:center;" type="info">让我们即刻开始规划！</Title>
            </div>
            <Button size="large" type="info" long shape="circle" icon="md-jet" @click="saveProgress">Let's Begin!</Button>
        </Card>
    </Col>
</Row>
<GlobalFooter  :links="links" :copyright="copyright" />
</template>

<script>
    export default {
        data () {
            return {
                value: 0,
                value1:30,
                list: [
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppywZNt.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppywe4P.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppywVAI.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppywn9f.jpg',
                        tip: '隐私保护'
                    },
                    {
                        src: 'https://s1.ax1x.com/2023/03/27/ppy0F2T.jpg',
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
.imgStyle {
    vertical-align: middle;
    text-align: center;
}
</style>
