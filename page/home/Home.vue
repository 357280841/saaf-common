<template>
    <div class="p30" style="position: relative">
        <h3 style="margin: 20px 0 0 20px">快速通道</h3>
        <div class="row">
            <div class="menu-item" v-for="row,index in userShortcut" :key="index">
                <div class="cutblock" @click="goto(row)">
                    <i class="fa fa-newspaper-o"></i>
                </div>
                <div class="">{{row.functionName}}</div>
                <div @click="deleteCutAction(row)" class="fa fa-times close"></div>
            </div>
            <div class="menu-item">
                <div class="cutblock " @click="showMenuList()" style="background-color: transparent;border: 1px  dashed #ccc;">
                    <i class="fa fa-plus " style="color:#00a0e9"></i>
                </div>
                <div class="">新增菜单</div>
            </div>
        </div>
        <SaafSelectModal
                ref="respSelect"
                type="checkbox"
                :selectConfig="{ title: '菜单列表', key: 'menuName', pk: 'menuId', show:'menuName' }"
                :tableConfig="{
            findApi: 'findMenuList',
            searchParams:{
                systemCode: 'BASE'
            },
            tableColumns: [
                { title: '菜单列表', key: 'menuName', sortable:true },
            ]
        }"
                @on-change="respSelectChange"></SaafSelectModal>
    </div>
</template>

<script>
    import {tabsTool, getUrl} from "saaf-common";
    import {fetch} from '@/page/pageConfig/index'

    export default {
        data() {
            return {
                userShortcut: []
            }
        },
        created() {
            this.searchShortcut()
        },
        methods: {
            showMenuList() {
                this.$refs.respSelect.open()
            },
            respSelectChange(data) {
                let responsibilityIds = []
                data.map((item) => {
                    responsibilityIds.push(item.menuId)
                })
                let params = {
                    respId: this.$store.state.user.currentResp.responsibilityId,
                    systemCode: "BASE",
                    menuIds: responsibilityIds.join()
                }
                fetch.addInCollection(params).then(res => {
                    this.searchShortcut()
                })
            },
            searchShortcut() {
                fetch.findInCollection({
                    params: {
                        systemCode: "BASE",
                    }
                }).then(res => {
                    this.userShortcut = res.data
                })
            },
            deleteCutAction(row) {
                fetch.deleteInCollection({
                    functionCollectionId: row.functionCollectionId,
                }).then(res => {
                    this.searchShortcut()
                }, function (error) {
                    console.error(error);

                })
            },
            goto(row) {
                tabsTool.openTab({url: row.functionUrl, menuId: row.menuId, respId: row.respId, name: row.functionName})
            }
        }
    }
</script>
<style type="text/css">
    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .menu-item {
        position: relative;
        width: 100px;
        height: 120px;
        margin: 20px 10px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .menu-item:nth-child(1n+0) .cutblock {
        background-color: #01b987;
    }
    .menu-item:nth-child(2n+0) .cutblock {
        background-color: #dd9c04;
    }
    .menu-item:nth-child(3n+0) .cutblock {
        background-color: #08a1b1;
    }
    .cutblock {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
        background-color: #eee;
        box-sizing: content-box;
        transition: all .3s;
    }
    .cutblock:hover {
        transform: scale(1.2, 1.2);
        background-color: #2383c2 !important;
    }
    .cutblock i {
        color: #fff;
        font-size: 24px;;
        vertical-align: middle;
    }
    .cutblock:hover i {
        color: #fff !important;
    }
    .menu-item .close {
        position: absolute;
        right: 16px;
        top: 0;
        border-radius: 10px;
        background: red;
        color: white;
        width: 22px;
        height: 16px;
        display: none;
        align-items: center;
        justify-content: center;
    }
    .menu-item:hover .close {
        display: flex;
    }
</style>
<!--
<style lang="less" scoped>
    @import './style.less';
</style>
-->
