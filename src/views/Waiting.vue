<template>
    <Card v-show="!showSuccessCard" style="height:680px;">
        <Result type="warning" title="计算处理中...">
        <template #desc>
            您的计算已收到，后台正在处理中。
            <div>预计{{ count-4 }}s后计算完成，请耐心等待</div> 
        </template>
        <template #actions>
            <Button type="primary" @click="saveProgress" >返回修改</Button>
        </template>
        </Result>
    </Card>
    <transition name="transition-drop">
    <Card v-show="showSuccessCard" style="height:680px;">
        <Result type="success" title="计算完成！">
        <template #desc>
            您的计算已经完成，正在进行收尾工作！
            <div>预计{{ count }}s后全部完成，将自动跳转</div> 
        </template>
        <template #actions>
            <Button type="primary" @click="saveProgress" >返回修改</Button>
        </template>
        </Result>
    </Card>
    </transition>
  </template>
  <script>
import { Card } from 'view-ui-plus';

  export default {
    data() {
        return {
            showSuccessCard:false,
            count: "", //倒计时
        };
    },
    created() {
        this.threeGo();
    },
    methods: {
        //3秒后进入跳转页面
        threeGo() {
            const TIME_COUNT = 5;
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT && this.count != 4) {
                        this.count--;
                    } else if (this.count == 4) {
                        this.showSuccessCard = true;
                        this.count--;
                    }
                    else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        //跳转的页面写在此处
                        this.$router.push("./Run");
                    }
                }, 1000);
            }
        },
        saveProgress() {
            this.$router.push('./Process')
        }
    },
    components: { Card }
}
  </script>
  