<script>
import Demo from '@/components/Demo'

export default {
  name: 'Home',
  components: {
    Demo,
  },
  data () {
            return {
                transitionName:'',
                time: (new Date()).getTime() - 86400 * 3 * 1000
            }
  },
  setup() {
  },
  methods: {
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      console.log(to, "to");
      console.log(from, "from");
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "fade";
      } else {
        this.transitionName = "transition-drop";
      }
    },
  },
}
</script>


<template>
  <div class="layout">
    <Layout>
        <Header>
            <Menu mode="horizontal" theme="light" active-name="1">
                <!-- <div class="layout-logo"></div> -->
                <div class="layout-nav">
                    <MenuItem name="0">
                        <Icon type="ios-aperture"></Icon>
                        <router-link to="/Welcome">Welcome</router-link>
                    </MenuItem>
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        <router-link to="/LayOut">LayOut</router-link>
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        <router-link to="/Process">Process</router-link>
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        <router-link to="/Run">Run</router-link>
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <!-- <Layout> -->
            <!-- <Sider hide-trigger :style="{background: '#fff'}">
                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template #title>
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template #title>
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template #title>
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </Sider> -->
            <!-- <Layout :style="{padding: '0 24px 24px'}"> -->
                <!-- <Breadcrumb :style="{margin: '24px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    Content
                    <router-view/>
                </Content> -->
                <transition :name="transitionName">
                    <router-view/>
                </transition>
            <!-- </Layout> -->
        <!-- </Layout> -->
    </Layout>
  </div>
</template>

<style lang="less" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: blue;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
      will-change: transform;
      transition: all 500ms;
      position: absolute;
    }

    .slide-right-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
</style>
