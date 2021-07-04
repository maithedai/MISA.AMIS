<template>
    <div id="formEmployeeDetail" class="form-detail" v-if="isShowFormDetail">
        <div class="form-wrapp"></div>
        <div class="form-content">
            <div class="form-content-header">
                <div class="form-header-title">
                    <div class="title-form m-r-24">Thông tin nhân viên</div>
                    <div class="checkbox-object m-r-24">
                        <input type="checkbox" class="ms-checkbox m-r-8">
                        <label>Là khách hàng</label>                       
                    </div>
                    <div class="checkbox-object">
                        <input type="checkbox" class="ms-checkbox m-r-8">
                        <label>Là nhà cung cấp</label>                       
                    </div>
                </div>
                <div class="form-tool">
                    <div class="icon-help m-r-10"></div>
                    <div class="icon-close"></div>
                </div>
            </div>
            <div class="form-body">
                <div class="persion-info">
                    <div class="info-left">
                        <div class="info-line-1">
                            <label>Mã<span style="color: red; margin-left: 4px">*</span></label>   
                        </div>
                        <div class="info-line-2"></div>
                        <div class="info-line-3"></div>
                         
                    </div>
                    <div class="info-right"></div>                
                </div> 
                <div class="address"></div>
                <div class="contact"></div>        
            </div>
            <div class="form-content-footer"></div>
        </div>
  </div>
</template>

<script>

export default {

    data() {
        return {
            isShowFormDetail: false
        }
    },
    methods: {
        /**
         * Hàm show form thêm mới nhân viên
         * MTDAI 05.07.2021
         */
        showFormDeatil() {
            this.isShowFormDetail = true;
        }
    }
};
</script>

<style lang="scss" scoped>

.form-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.form-detail .form-wrapp {
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

.form-content {
    position: absolute;
    width: 900px;
    height: 615px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    border-radius: 4px;

    .form-content-header {
        width: 100%;
        height: 73px;
        display: flex;
        align-items: center;

        .form-header-title {
            width: 822px;
            height: 33px;
            padding-left: 24px;
            display: flex;
            align-items: center;

            .title-form {
                font-size: 24px;
                font-weight: 900;
            }

            .checkbox-object {
                display: flex;
                align-items: center;

                .ms-checkbox {
                    width: 15px;
                }
            }
        }

        .form-tool {
            width: 78px;
            height: 100%;
            display: flex;

            .icon-help {
                margin-top: 12px;
                margin-left: 12px;
            }
            
            .icon-close {
                margin-top: 14px;
            }
        }
    }

    .form-body {
        width: 100%;
        height: 400px;
        padding: 0 24px 0 24px;
    }
}
</style>
