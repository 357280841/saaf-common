/*
 * @Author: zhengxiaowen
 * @Date: 2019-05-24 17:55:18
 * @Last Modified by: zhengxiaowen
 * @Last Modified time: 2019-12-03 15:24:05
 */

<template>
    <div class="login-page">
        <div class="login-box">
            <h1 class="main-title">{{systemName}}</h1>
            <div class="login-panel">
                <h5 class="login-title">{{$i18n.t('用户登录')}}</h5>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <div>
                        <FormItem prop="userName">
                            <Input type="text" v-model="formInline.userName" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem prop="pwd">
                            <Input type="password" v-model="formInline.pwd" placeholder="Password" @keydown.native.enter.prevent ="handleSubmit('formInline')">
                                <Icon type="ios-key-outline" slot="prepend"/>
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

    import { fetch } from '@/page/pageConfig/index'
    import Md5 from 'js-md5';
    import { Base64 } from 'js-base64';
    import platform from '@/config/platform'

    export default {
        data () {
            return {
                remarkPwd: false,
                formInline: {
                    userName: 'admin',
                    pwd: 'admin@123'
                },
                ruleInline: {
                    userName: [
                        { required: true, message: '用户名不能空', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '密码不能空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '最少6位', trigger: 'blur' }
                    ]
                },
                systemName: this.$i18n.t(platform.systemName?platform.systemName:'SAAF平台管理系统')
            }
        },
        created(){
        },
        methods: {
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

                    var host=window.location.host;
                    host=host.indexOf(':')!=-1?host.substring(0,host.indexOf(':')):host;
                    host='http://'+host;
                    fetch.baseLoginService_login({
                        // params: {
                            userName: this.formInline.userName,
                            //pwd: 'c905f1589dd196ebdcf2f06ba38179ca',//Base64.encode(this.formInline.pwd)'',
                            // md5加密时 前缀为'' 后缀为lo0.1l@g9v# （之前系统这样设置的）
                            pwd: Md5(''+this.formInline.pwd+'lo0.1l@g9v#'),
                            domain: host,
                            lan: 'CN'
                        // }
                    }).then(res=>{
                        this.$store.commit('CLEAN_TAB')
                        this.$store.commit("SET_USER_INFO",res.data)
                        this.$router.push("/main/home")
                    }).catch(err=>{
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
        margin: 180px auto 0;
        .main-title{
            margin-bottom: 20px;
            color: #fff;
        }
        .login-panel{
            height: 240px;
            width: 100%;
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            .login-title{
                margin-top: 22px;
                margin-bottom: 10px;
                font-size: 20px;
            }
            .forget-pwd{
                margin-top: -16px;
                margin-bottom: 10px;
                .fs-12{
                    font-size: 12px;
                }
                .forget-txt{
                    margin-left: 70px;
                    font-size: 12px;
                }
            }
            .w80{
                margin: 0 auto;
                width: 60%;
            }
        }
    }
}
</style>
