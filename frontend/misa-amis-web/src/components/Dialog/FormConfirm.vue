<template>
    <div class="form-wrapper" v-if="isShowFormConfirm">
        <div class="wrapper"></div>
        <div class="form-confirm">
            <div class="fo-body">
                <div class="fo-con m-b-24">
                    <div :class="[`icon-${type}`, 'm-r-24']"></div>
                    <div :message="message">{{ message }}</div>
                </div>
                <div class="fo-foot">
                    <div class="button-cancel" @click="closeFormConfirm">Hủy</div>
                    <div class="button-right">
                        <div class="button-no m-r-10" @click="acceptCloseFormDetail">Không</div>
                        <div class="button-yes">Có</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowFormConfirm: false,
        }
    },
    props: {
        type: {
            type: String,
            default: 'notif'
        },
        message: {
            type: String,
            default: "Dữ liệu bị thay đổi. Bạn có muốn cất không"
        }
    },
    methods: {

        /**
         * Hàm mở form confirm
         * MTDAI 05.07.2021
         */
        showFormConfirm() {
            this.isShowFormConfirm = true;
        },

        /**
         * Hàm khi click button hủy trong form confirm
         * MTDAI 05.07.2021
         */
        closeFormConfirm() {
            this.isShowFormConfirm = false;
        },

        /**
         * Hàm khi click button không trong form confirm để đóng form chi tiết
         * MTDAI 05.07.2021
         */
        async acceptCloseFormDetail() {
            await this.$emit('acceptCloseFormDetail');
            this.isShowFormConfirm = false;
        },
    }
}
</script>

<style lang="scss">

.form-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-confirm {
    position: absolute;
    width: 400px;
    height: 150px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    padding: 12px 36px 36px 36px;

    .fo-body {
        width:100%;
        height: 100%;

        .fo-con {
            height: 100px;
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
        }
    }
}

.fo-foot {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.button-cancel {
    border: 1px solid #8d9096;
    border-radius: 3px;
    height: 36px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-cancel:hover {
    background-color: #d2d3d6;
}

.button-right {
    display: flex;  
    width: auto;
    justify-content: space-between;
}

.button-no {
    height: 36px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #8d9096
}

.button-no:hover {
    background-color: #d2d3d6;
}

.button-yes {
    height: 38px;
    display: flex;
    padding-right: 16px;
    padding-left: 16px;
    align-items: center;
    background-color: #2ca01c;
    border-radius: 3px;
    color: #fff;
}

.button-yes:hover {
    background-color: #35bf22;
}
</style>