<style lang="less" >
    @import "./main.less";  
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}" >
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto',top:'60px'}" >
            <shrinkable-menu 
                :shrink="shrink"
                :menu-list="menuList">
                <div slot="top" class="logo-con">
                    <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)',color:'#fff',position:'relative',left:shrink ? ' -5px':'-20px'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
             </div>
            </shrinkable-menu>
        </div>
        <div class="main-header-con" :style="{paddingLeft: shrink?'0px':'0px'}">
            <div class="main-header" style="background:#4a505f;">
                <!-- 显示折叠菜单的图标 -->
                <!-- <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div> -->
                <div class="header-middle-con">
                    <div class="main-breadcrumb">
                        <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
                    </div>
                </div>
                <a href="javascript:void(0)" class="ybli">易保理{{accessCode}}</a>
                <!-- 显示右侧登录后的信息 -->
                <div class="header-avator-con" style="">
                    <div class="user-dropdown-menu-con" style="width:300px;">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                           <a href="javascript:void(0)" style="color:#fff;height:22px;">
                        <span class="main-user-name" style="font-size:20px;width:200px;">您好，{{ userName }}</span>
                           </a>                    
                        <a href="#" @click="handleOpen">
                           <span style="color:#fff;margin-left:40px;font-size:20px;position:relative;top:5px;" name="loginout" >退出</span>
                         </a>                         
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <!-- 右侧点击菜单显示不同内容 -->
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
               
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
import task from './task/task.vue';
import breadcrumbNav from './main-components/breadcrumb-nav.vue';
import util from '@/libs/util.js';
export default {
    components: {
        shrinkableMenu,
        breadcrumbNav
      },
    data () {
        return {
            shrink: false,
            userName: '',
            accessCode: parseInt(Cookies.get('access'))
        };
    },
    computed: {
        menuList () {
            return this.$store.state.app.menuList;
        },
        currentPath () {
            return this.$store.state.app.currentPath; // 当前面包屑数组
        },
    },
    methods: {
        init () {
          this.userName = Cookies.get('user');
            
        },
        toggleClick () {
            this.shrink = !this.shrink;
        },
        handleOpen(){
            this.$router.push({
                name: 'login'
            });
           
        },
        handleClickUserDropdown (name) {

            // this.$router.push({
            //     name: 'login'
            // });
            // 个人中心此方法作废
            if (name === 'ownSpace') {
                    util.openNewPage(this, 'ownspace_index');
                    this.$router.push({
                        name: 'ownspace_index'
                    });
           } else if (name == 'loginout') {
                    // 退出登录
                    this.$store.commit('logout', this);
                    this.$store.commit('clearOpenedSubmenu');
                    this.$router.push({
                        name: 'login'
                    });
                }
        }
    },
    mounted () {
        this.init();

    }
};
</script>
<style scoped>
    .ybli{
        font-size: xx-large;
        color: #fff;
        margin-left: 60px;
        line-height: 60px;
    }
</style>
