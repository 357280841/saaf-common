/*
 * @Author: zhengxiaowen
 * @Date: 2019-05-24 17:55:36
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-05 18:00:11
 */

<i18n>
  {
  "EN": {
  "expressLane": "Express lane",
  "addMenu": "Add menu",
  "menuList": "Menu list"
  },
  "CN": {
  "expressLane": "快速通道",
  "addMenu": "新增菜单",
  "menuList": "菜单列表"
  }
  }
</i18n>

<template>
  <div class="main-box">
    <div class="layout">
      <div class="header-line"  v-show="!isFullscreen">
        <div class="sie_img">
          <img src="../../assets/image/sie.png" alt />
        </div>
        <Layout>
          <Header
            class="header"
            :style="{height: '50px', lineHeight: '50px'}"
          >            <!-- <div class="system-name">{{platform.systemCode}}</div> -->
            <div class="user">
              <div class="user-item">{{$i18n.t(platform.systemName ? platform.systemName : 'SAAF平台管理系统')}}</div>
              <div class="user-item" @click="pswdModal = true">{{$i18n.t('修改密码')}}</div>
              <div class="language user-item">
                <SaafLanguageSelect />
              </div>
              <div class="resp user-item">
                <SaafRespSelect />
              </div>
              <div class="logout user-item" @click="userLogout()">
                {{$store.state.user.userInfo.userName}} {{$i18n.t('退出')}}
              </div>
            </div>
          </Header>
        </Layout>
      </div>
      
      <Sider :class="{moveStar:!isFullscreen,moveEnd:isFullscreen}"
        :style="{position: 'fixed', height: '100vh',width: '240px', left: 0, overflow: 'auto',minWidth: '240px',maxWidth: '240px'}"
      >
        <!-- <Row>
        <Col span="8">-->
        <div class="menu-box">
          <div class="my-menu">
            <Icon class="pr5" type="md-menu" />{{$i18n.t('我的菜单')}}
          </div>

          <!-- <div ref="menuList" class="menu-box" :style="{height: menuBoxHeight+'px'}"> -->
          <SaafAutoScroll type="y" ref="MenuList">
            <Menu :theme="theme2" :open-names="['1']" accordion>
              <Submenu :name="index" v-for="(x,index) in menuList" :key="index">
                <template slot="title">
                  <span>
                  <b :class="x.imageLink"></b>
                    {{x.name}}</span>
                </template>
                <template v-for="(y,eq) in x.children">
                  <template v-if="!(y.children&&y.children.length>0)">
                    <MenuItem :name="index+'-'+eq" :key="eq"  class="menuPosition" @click.native="openTab(y)"><span>{{y.name}}</span></MenuItem>
                  </template>
                  <template v-if="y.children&&y.children.length>0">
                    <Submenu :name="index+'-'+eq" :key="eq"  class="menuPosition">
                      <template slot="title">
                        <span>
                        <b :class="y.imageLink"></b>
                        {{y.name}}</span>
                      </template>
                      <MenuItem
                        :name="index+'-'+eq+'-'+i"
                        v-for="(z,i) in y.children"
                        :key="i"
                        class="menuPosition"
                        @click.native="openTab(z)"
                      ><span>{{z.name}}</span></MenuItem>
                    </Submenu>
                  </template>
                </template>
              </Submenu>
            </Menu>
          </SaafAutoScroll>
          <!-- </div> -->
        </div>
        <!-- </Col>
        </Row>-->
      </Sider>
       
      <Layout :class="{marginLeft:!isFullscreen,Fullscreen:isFullscreen}">
        
        <div class="main-tag">
          
          <SaafAutoScroll v-show="!isFullscreen" type="x" :height="32" class="tab-box" id="tabs-tag-box">
            <div
              v-for="item in tabs.tabList"
              class="tag"
              :class="tabs.activeTab[tabKey] == item[tabKey]?'tag-active':''"
              :id="`tabs-tag-${item.menuId}`"
            >
              <span class="tab-title" @click="activeTab(item)">{{item.name}}</span>
              <Icon
                class="close-btn"
                v-if="item.close"
                type="ios-close"
                size="16"
                @click="closeTab(item)"
              />
            </div>
            <div class="cl"></div>
          </SaafAutoScroll>
         
        </div>
        <!-- </div> -->
        <!-- <div class="close-all-tap">
                    <Icon type="md-close-circle" size="22" />
        </div>-->
        <!-- </Header> -->
        <Content class="page-content" ref="PageContent">
            <!-- <button @click="hhh">数据全屏</button> -->
          <!-- <Card ref="PageContent"> -->
          <div ref="IframeBox">
            <keep-alive :include="cachePage">
              <router-view></router-view>
            </keep-alive>
            <iframe
              :style="{width: '100%', height:iframeHeight+'px', border:'none'}"
              v-show="item.iframe && item[tabKey] == tabs.activeTab[tabKey]"
              v-for="(item,index) in tabs.tabList"
              :key="index"
              :src="item.url"
            />
          </div>
          <!-- </Card> -->
        </Content>
      </Layout>
      
    </div>
    <Modal v-model="modal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>提示</span>
      </p>
      <div style="text-align:center">
        <p>您确定要退出当前系统吗？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="LOGOUT">确认退出</Button>
      </div>
    </Modal>
    <!-- 修改密码 -->
    <Modal v-model="pswdModal" title="修改密码">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="旧密码" prop="oldPassword">
          <Input type="password" password v-model="formValidate.oldPassword"></Input>
        </FormItem>
        <FormItem label="新密码" prop="newPassword">
          <Input
            type="password" password
            v-model="formValidate.newPassword"
            placeholder="只能输入6-20位,可字母、数字、下划线"
          ></Input>
        </FormItem>
        <FormItem label="确认密码" prop="newPassword2">
          <Input type="password" password v-model="formValidate.newPassword2" placeholder="请再次输入密码"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" size="large" @click="modalCancel">取消</Button>
        <Button type="primary" size="large" @click="okChange">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { stat } from "fs";
import { fetch } from "@/page/pageConfig/index";
import creatTree from "@/config/tree";
import {tabsTool, onresizeTool, iframeTool, fetchTool, store} from "saaf-common";
import api from "../config/api"
import Md5 from "js-md5";
import platform from '@/config/platform'
import systemHook from '@/config/systemHook'
export default {
  data() {
    return {
      platform: platform,
      pswdModal: false, //显示改密模态框
      formValidate: {
        oldPassword: null, //旧密码
        newPassword: null, //新密码
        newPassword2: null //确认密码
      },
      ruleValidate: {
        oldPassword: [
          {
            required: true,
            message: "必填",
            trigger: "blur"
          }
        ],
        newPassword: [
          {
            required: true,
            message: "必填",
            trigger: "blur"
          },
          {
            type: "string",
            message: "只能输入6-20位,可字母、数字、下划线",
            trigger: "blur",
            pattern: /^(\w){6,20}$/
          }
        ],
        newPassword2: [
          {
            required: true,
            message: "必填",
            trigger: "blur"
          },
          {
            type: "string",
            message: "只能输入6-20位,可字母、数字、下划线",
            trigger: "blur",
            pattern: /^(\w){6,20}$/
          }
        ]
      },
      // 缓存管理
      cachePage: "",
      theme2: "dark",
      iframeHeight: 0,
      interval: null,
      modal: false,
      menuBoxHeight: 0
    };
  },
  computed: {
    ...mapState({
      tabs: state => state.tabs,
      tabKey: state => state.tabs.tabKey,
      menuList: state => state.user.menuList,
      isFullscreen:state => state.system.isFullscreen,
      userInfo: state => state.user.userInfo
    })
  },
  created() {
    this.$store.commit("INIT_USER_INFO");
    this.$store.commit("INIT_TAB");
    this.$store.dispatch("GET_LOOKUP");
    if(systemHook.mainPageInit){
      systemHook.mainPageInit()
    }
  },
  
  methods: {
      hhh(){
        this.$store.commit("FULLSCREEN");
      },
    //   确认修改密码
    okChange() {
      if (this.formValidate.newPassword != this.formValidate.newPassword2) {
        this.$Message.error("两次密码输入不一致");
        return;
      }
      this.$refs["formValidate"].validate(valid => {
        if (valid) {
          let userInfo = this.userInfo;
          let pswd = {
            oldPassword: Md5(
              "" + this.formValidate.oldPassword + "lo0.1l@g9v#"
            ),
            newPassword: Md5(
              "" + this.formValidate.newPassword + "lo0.1l@g9v#"
            ),
            userId: userInfo.userId,
            userName: userInfo.userName
          };

          this.changePassword(pswd);
        } else {
          this.$Message.error("请检查必填项!");
        }
      });
    },
    // 取消修改密码
    modalCancel() {
      this.pswdModal = false;
      this.formValidate.oldPassword = null;
      this.formValidate.newPassword = null;
      this.formValidate.newPassword2 = null;
    },
    // 修改密码请求
    changePassword(pswd) {
      fetch.changePassword(pswd).then(res => {
        // if (status == "S") {
        this.pswdModal = false;
        this.$Message.success("密码修改成功，需重新登录!");
        setTimeout(()=>{
           this.LOGOUT()
        },1500)
        // }
      });
      // fetchTool.postSimpleness(api.changePassword, pswd).then(res=>{
      //   this.LOGOUT()
      // }).catch(err=>{
      //   debugger
      // })
    },
    ...mapMutations(["LOGOUT"]),
    userLogout() {
      // this.LOGOUT()
      this.modal = true;
    },
    //菜单栏打开菜单
    openTab(item) {
      tabsTool.openTab(item);
    },
    //标签页打开菜单
    activeTab(item) {
      tabsTool.activeTab(item);
    },
    //跳转页面
    goto(item) {
      tabsTool.goto(item);
    },
    //关闭标签页
    closeTab(item) {
      tabsTool.closeTab(item);
    },
    setPageWindowHeight() {
      // this.iframeHeight = (this.$refs.PageContent.$el.clientHeight-50)
      this.iframeHeight = $(window).innerHeight() - $(this.$refs.IframeBox).offset().top;
    }
    // setMenuHeight(){
    //     this.menuBoxHeight = $(window).innerHeight() - $(this.$refs.menuList).offset().top
    // }
  },
  components: {},
  destroyed() {
    clearInterval(this.interval);
    onresizeTool.removeFunction('mainHeihgt')
  },
  mounted() {
    this.interval = setInterval(() => {
      // this.$refs.MenuList.changeHeight()
      this.setPageWindowHeight();
      // this.setMenuHeight()
    }, 1000);
    onresizeTool.addFunction({
      key: "mainHeihgt",
      fun: () => {
        this.setPageWindowHeight();
      }
    });
    iframeTool.add('FULLSCREEN',()=>{
      this.$store.commit("FULLSCREEN");
    })
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>
