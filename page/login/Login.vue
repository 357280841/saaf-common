/*
* @Author: liujun
* @Date: 2020-09-11 09:07:12
*/
<i18n>
    {
    "EN": {
    "language": "Language",
    "inputUserName": "Please input username",
    "inputPassword": "Please input password",
    "inputVerifyCode": "Please input verify code",
    "clickRefresh": "Click refresh",
    "usernameNotNull": "Username cannot be empty",
    "pwdNotNull": "Password cannot be empty",
    "verifyCodeNotNull": "Verify code cannot be empty",
    "minimumInput": "Minimum input 6 bits"
    },
    "CN": {
    "language": "语言",
    "inputUserName": "请输入用户名",
    "inputPassword": "请输入密码",
    "inputVerifyCode": "请输入验证码",
    "clickRefresh": "点击刷新",
    "usernameNotNull": "用户名不能为空",
    "pwdNotNull": "密码不能为空",
    "verifyCodeNotNull": "验证码不能为空",
    "minimumInput": "最少输入6位"
    }
    }
</i18n>
<template>
    <div class="login-page">
        <div style="position:fixed;top:10px;right:80px;">
            <div style="float: left;margin: 4px;"><h3 style="color: white">{{$t('language')}}</h3></div>
            <div style="width:70Px;float: left;">
                    <Select v-model="language" @on-change="changeLanguage">
                        <Option v-for="item in initLanguageList" :value="item.lookupCode" :key="item.lookupCode">{{ item.lookupCode }}</Option>
                    </Select></div>
        </div>
        <div class="login-box">
            <h1 class="main-title">{{systemName}}</h1>
            <div class="login-panel">
                <h5 class="login-title">{{$i18n.t('用户登录')}}</h5>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <div>
                        <FormItem prop="userName">
                            <Input type="text" v-model="formInline.userName" :placeholder="$t('inputUserName')">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem prop="pwd">
                            <Input type="password" v-model="formInline.pwd" :placeholder="$t('inputPassword')"
                                   @keydown.native.enter.prevent="handleSubmit('formInline')">
                                <Icon type="ios-key-outline" slot="prepend"/>
                            </Input>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem prop="imgCode" style="width: 55%">
                            <Input type="text" id="imgCodeInput" v-model="formInline.imgCode" :placeholder="$t('inputVerifyCode')"
                                   @keydown.native.enter.prevent="handleSubmit('formInline')">
                                <a slot="append" class="code">
                                    <img :src="imgSrc" class="code" :alt="$t('clickRefresh')" :title="$t('clickRefresh')" @click="refreshVerify"/>
                                </a>
                            </Input>
                        </FormItem>
                    </div>
                    <div class="forget-pwd">
                        <Checkbox :checked.sync="remarkPwd">
                            <span class="fs-12">{{$i18n.t('记住密码')}}</span>
                        </Checkbox>
                        <span class="forget-txt">{{$i18n.t('忘记密码')}}？</span>
                    </div>
                    <div class="w80">
                        <Button type="primary" @click="handleSubmit('formInline')" long>{{$i18n.t('登录')}}</Button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {fetch} from '@/page/pageConfig/index'
    import Md5 from 'js-md5';
    import platform from '@/config/platform'
    import api from "../config/api";

    export default {
        data() {
            return {
                remarkPwd: false,
                formInline: {
                    userName: 'admin',
                    pwd: 'admin@123'
                },
                ruleInline: {
                    userName: [
                        {required: true, message: this.$t('usernameNotNull'), trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: this.$t('pwdNotNull'), trigger: 'blur'},
                        {type: 'string', min: 6, message: this.$t('minimumInput'), trigger: 'blur'}
                    ],
                    imgCode: [{required: true, message: this.$t('verifyCodeNotNull'), trigger: 'blur'}]
                },
                imgSrc: null,
                imgCodeKey: null,
                systemName: this.$i18n.t(platform.systemName ? platform.systemName : 'SAAF平台管理系统'),
                initLanguageList: platform.initLanguageList,
                language: this.$i18n.locale
            }
        },
        created() {
        },
        mounted() {
            if(!$('#imgCodeInput').is(':hidden')){
                this.refreshVerify();
            }
        },
        methods: {
            refreshVerify() {
                axios.get(api.getImgCode, {
                    params: {imgCodeKey: this.imgCodeKey},
                    responseType: 'blob'
                }).then(response => {
                    this.imgCodeKey = response.headers.imgcodekey;
                    this.imgSrc = this.createObjectURL(response.data);
                });
            },
            createObjectURL(file) {
                if (window.webkitURL) {
                    return window.webkitURL.createObjectURL(file);
                } else if (window.URL && window.URL.createObjectURL) {
                    return window.URL.createObjectURL(file);
                } else {
                    return null;
                }
            },
            changeLanguage(item){
                this.$i18n.locale = item
                this.$store.commit('CHANGE_LANGUAGE', {lookupCode:item})
            },
            handleSubmit(name) {
                // 表单验证
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // this.$Message.success('Success!')
                        // this.$router.push("main")
                    } else {
                        // this.$Message.error('Fail!')
                        return
                    }
                    var host = window.location.host;
                    host = host.indexOf(':') != -1 ? host.substring(0, host.indexOf(':')) : host;
                    host = 'http://' + host;
                    fetch.baseLoginService_login({
                        // params: {
                        userName: this.formInline.userName,
                        // md5加密时 前缀为'' 后缀为lo0.1l@g9v# （之前系统这样设置的）
                        pwd: Md5('' + this.formInline.pwd + 'lo0.1l@g9v#'),
                        domain: host,
                        lan: this.language,
                        imgCode: this.formInline.imgCode,
                        imgCodeKey: this.imgCodeKey
                        // }
                    }).then(res => {
                        res.data.initLanguage = this.language;
                        let userInfo = res.data
                        let resp = []
                        userInfo.userRespList[this.language].map((item) => {
                            if (item.systemCode == platform.systemCode) {
                                resp.push(item)
                            }
                        })
                        if (resp.length == 0) {
                            this.$Message.error('当前用户没有当前系统职责')
                            this.refreshVerify();
                            return
                        }
                        // userInfo.userRespList = resp
                        this.$store.commit("SET_USER_INFO", res.data)
                        this.$store.commit('CLEAN_TAB')
                        this.$store.commit('INIT_TAB')
                        // this.$router.push("/main/home")
                    }).catch(err => {
                        this.refreshVerify();
                        console.error("失败！！！")
                    })
                })

            }
        }
    }

</script>

<style lang="less">

    .login-page {
        // position: relative;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/image/saaf_login.jpg');
        background-position: center center;
        background-size: 100% 100%;
        overflow: hidden;

        .login-box {
            width: 400px;
            text-align: center;
            margin: 150px auto 0;

            .main-title {
                margin-bottom: 20px;
                color: #fff;
            }

            .login-panel {
                height: 290px;
                width: 100%;
                background: #fff;
                border-radius: 10px;
                overflow: hidden;

                .login-title {
                    margin-top: 22px;
                    margin-bottom: 10px;
                    font-size: 20px;
                }

                .code {
                    width: 106px;
                    font-size: 10px;
                    height: 22px;
                    display: block;

                    > img {
                        margin: -7px;
                        height: 30px;
                        width: 120px;
                        display: block;
                    }
                }

                .forget-pwd {
                    margin-top: -2px;
                    margin-bottom: 10px;

                    .fs-12 {
                        font-size: 12px;
                    }

                    .forget-txt {
                        margin-left: 70px;
                        font-size: 12px;
                    }
                }

                .w80 {
                    margin: 0 auto;
                    width: 60%;
                }
            }
        }
    }
</style>
