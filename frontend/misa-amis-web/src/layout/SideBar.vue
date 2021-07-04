<template>
    <div :class="['side-bar', {'side-bar-small': !isSideBarOpen}]">
        <div class="header">
            <div v-if="isSideBarOpen" class="icon-menu m-r-10"></div>
            <img v-if="isSideBarOpen" class="logo" src="~@/assets/Resource/img/Logo.svg"/>
            <div v-if="!isSideBarOpen" class="icon-three-line-white pointer" @click="openSideBar"></div>
        </div>
        <div class="list-item">
            <div :class="['item',{'active': item.Active}]" v-for="(item,index) in listItem" :key="index">
                <div :class="[item.Active ? item.IconActive : item.Icon,'m-r-8']"></div>
                <div v-if="isSideBarOpen">{{item.Name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            listItem: [
                {
                    Icon: 'icon-dashboard',
                    IconActive:"icon-dashboard-active",
                    Name: 'Tổng quan',
                    Active: false
                },
                {
                    Icon: 'icon-money',
                    IconActive:"icon-money-active",
                    Name: 'Tiền mặt',
                    Active: true
                },
                {
                    Icon: 'icon-deposits',
                    IconActive:"icon-deposits-active",
                    Name: 'Tiền gửi',
                    Active: false
                },
                {
                    Icon: 'icon-buy',
                    IconActive:"icon-buy-active",
                    Name: 'Mua hàng',
                    Active: false
                },
                {
                    Icon: 'icon-sell',
                    IconActive:"icon-sell-active",
                    Name: 'Bán hàng',
                    Active: false
                },
                {
                    Icon: 'icon-bill',
                    IconActive:"icon-bill-active",
                    Name: 'Quản lý hóa đơn',
                    Active: false
                },
                {
                    Icon: 'icon-store',
                    IconActive:"icon-store-active",
                    Name: 'Kho',
                    Active: false
                },
                {
                    Icon: 'icon-tool',
                    IconActive:"icon-tool-active",
                    Name: 'Công cụ dụng cụ',
                    Active: false
                },
                {
                    Icon: 'icon-asset',
                    IconActive:"icon-asset-active",
                    Name: 'Tài sản cố định',
                    Active: false
                },
                {
                    Icon: 'icon-tax',
                    IconActive:"icon-tax-active",
                    Name: 'Thuế',
                    Active: false
                },
                {
                    Icon: 'icon-price',
                    IconActive:"icon-price-active",
                    Name: 'Giá thành',
                    Active: false
                },
                {
                    Icon: 'icon-synthetic',
                    IconActive:"icon-synthetic-active",
                    Name: 'Tổng hợp',
                    Active: false
                },
                {
                    Icon: 'icon-budget',
                    IconActive:"icon-budget-active",
                    Name: 'Ngân sách',
                    Active: false
                },
                {
                    Icon: 'icon-report',
                    IconActive:"icon-report-active",
                    Name: 'Báo cáo',
                    Active: false
                },
                {
                    Icon: 'icon-finance',
                    IconActive:"icon-finance-active",
                    Name: 'Phân tích hành chính',
                    Active: false
                },
            ]
        }
    },
    computed: {
        isSideBarOpen(){
            return this.$store.getters.isSideBarOpen;
        }
    },
    methods: {
        openSideBar(){
            this.$store.dispatch('common/setIsSideBarOpen', true);
        }
    }
}
</script>
<style lang="scss" scoped>
.side-bar-small{
    width: 52px !important;
}
.side-bar{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 178px;
    background-color: #393a3d;
    .header {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo{
            width: 96px;
            height: 32px;
        }
    }
    .list-item{
        width: 100%;
        height: auto;
        padding-top: 14px;
        .item{
            height: 42px;
            border-left: 6px solid #393a3d;
            display: flex;
            align-items: center;
            padding: 0 0 0 11px;
            color: #fff;
            cursor: pointer;
        }
        .active{
            border-color: #2ca01c;
            font-weight: 700;
            background-color: #616164;
        }
    }
}
</style>