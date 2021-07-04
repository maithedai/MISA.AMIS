<template>
    <div class="nav-bar">
        <div class="nav-bar-left">
            <div v-if="isSideBarOpen" class="icon-three-line pointer m-r-16" @click="closeSideBar"></div>
            <div class="name-company m-r-10">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ</div>
            <div class="icon-nav-drop"></div>
        </div>
        <div class="nav-bar-right">
            <div class="icon-noti"></div>
            <div class="profile">
                <div class="icon-avt m-r-8"></div>
                <div class="user-name m-r-8">Mai Thế Đại</div>
            </div>
            <div class="nav-drop"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        closeSideBar(){
            this.$store.dispatch('common/setIsSideBarOpen', false);
        }
    },
    computed: {
        isSideBarOpen(){
            return this.$store.getters.isSideBarOpen;
        }
    },
}
</script>
<style lang="scss" scoped>

.nav-bar-left {
    display: flex;
    align-items: center;
}

.nav-bar {
    // width: 100%;
    height: 48px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
}

.nav-bar-right {
    display: flex;
    align-items: center;
    width: auto;

    .icon-noti {
        margin-right: 16px;
    }
    .profile {
        display: flex;
        align-items: center;

        .icon-avt {
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
    }
    
}
</style>