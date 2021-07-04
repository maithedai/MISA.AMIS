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
                    <div class="icon-close" @click="closeFormDetail"></div>
                </div>
            </div>
            <div class="form-body m-b-24">
                <div class="persion-info m-b-24">
                    <div class="info-left">
                        <div class="info-line m-b-16">
                            <div class="input-info input-code">
                                <label class="text-lable m-b-4">Mã<span style="color: red; margin-left: 4px">*</span></label>   
                                <input FieldName="EmployeeCode" type="text">
                            </div>
                            <div class="input-info input-name">
                                <label class="text-lable m-b-4">Tên<span style="color: red; margin-left: 4px">*</span></label>   
                                <input FieldName="EmployeeName" type="text">
                            </div>
                        </div>
                        <div class="info-line info-line-item m-b-16">
                            <label class="text-lable">Đơn vị<span style="color: red; margin-left: 4px">*</span></label>   
                            <ComboBox
                                v-bind:customDataDropDown="department_dropdown"
                                FieldName="Department"
                                style="width: 100%; height: 32px;">
                            </ComboBox>
                        </div>
                        <div class="info-line info-line-item">
                            <label class="text-lable">Chức danh</label>   
                            <input FieldName="Job" type="text">
                        </div>
                         
                    </div>
                    <div class="info-right">
                        <div class="info-r-line m-b-16">
                            <div class="input-info input-date-birth">
                                <label class="text-lable m-b-4">Ngày sinh<span style="color: red; margin-left: 4px">*</span></label>   
                                <input FieldName="EmployeeCode" type="date">
                            </div>
                             <div class="input-info input-gender">
                                <label class="text-lable m-b-4">Giới tính<span style="color: red; margin-left: 4px">*</span></label>   
                                <div class="value-gender">
                                    <div class="value-gender-item m-r-16">                                        
                                        <input FieldName="EmployeeCode" type="radio" style="width: 18px">
                                        <label class="text-lable">Nam</label>  
                                    </div>
                                    <div class="value-gender-item m-r-16">                                          
                                        <input FieldName="EmployeeCode" type="radio" style="width: 18px">
                                        <label class="text-lable">Nữ</label>
                                    </div>
                                    <div class="value-gender-item">                                        
                                        <input FieldName="EmployeeCode" type="radio" style="width: 18px">
                                        <label class="text-lable">Khác</label> 
                                    </div>         
                                </div>                                                      
                            </div>
                        </div>    
                        <div class="info-r-line m-b-16">
                            <div class="input-info input-cmt">
                                <label class="text-lable m-b-4">Số CMND</label>   
                                <input FieldName="EmployeeCode" type="text">
                            </div>    
                            <div class="input-info input-date-cmt">
                                <label class="text-lable m-b-4">Ngày cấp</label>   
                                <input FieldName="EmployeeCode" type="date" style="width: 170px; height: 32px">
                            </div>    
                        </div> 
                        <div class="info-r-line">
                            <div class="input-info">
                                <label class="text-lable m-b-4">Nơi cấp</label>   
                                <input FieldName="EmployeeCode" type="text" style="width: 432px">
                            </div>                           
                        </div> 
                    </div>                
                </div> 
                <div class="address input-info m-b-16">
                    <label class="text-lable m-b-4">Địa chỉ</label>   
                    <input FieldName="EmployeeCode" type="text" style="width: 840px;">
                </div>
                <div class="contact" style="margin-bottom: 48px;">
                    <div class="contact-item m-b-16">
                        <div class="con-item-line m-r-8">
                            <label class="text-lable m-b-4">ĐT di động</label>   
                            <input FieldName="EmployeeCode" type="text" style="width: 200px">
                        </div>
                        <div class="con-item-line m-r-8">
                            <label class="text-lable m-b-4">ĐT cố định</label>   
                            <input FieldName="EmployeeCode" type="text" style="width: 200px">
                        </div>
                        <div class="con-item-line m-r-8">
                            <label class="text-lable m-b-4">Email</label>   
                            <input FieldName="EmployeeCode" type="text" style="width: 200px">
                        </div>
                    </div>
                    <div class="contact-item">
                         <div class="con-item-line m-r-8">
                            <label class="text-lable m-b-4">Tài khoản ngân hàng</label>   
                            <input FieldName="EmployeeCode" type="text" style="width: 200px">
                        </div>
                        <div class="con-item-line m-r-8">
                            <label class="text-lable m-b-4">Tên ngân hàng</label>   
                            <input FieldName="EmployeeCode" type="text" style="width: 200px">
                        </div>
                        <div class="con-item-line m-r-8">
                            <label class="text-lable m-b-4">Chi nhánh</label>   
                            <input FieldName="EmployeeCode" type="text" style="width: 200px">
                        </div>
                    </div>
                </div>   
                <div class="line-border"></div>     
            </div>
            
            <div class="form-content-footer">
                <div class="button-cancel" style="margin-left: 24px;" @click="closeFormDetail">Hủy</div>
                <div class="button-right">
                    <div class="button-save">Cất</div>
                    <div class="button-save-add">Cất và thêm</div>
                </div>
            </div>
        </div>
        <FormConfirm ref="FormConfirm" :type="type" :message="message" @acceptCloseFormDetail="acceptCloseFormDetail"/>
    </div>
</template>

<script>

import ComboBox from '../components/common/ComboBox.vue'
import FormConfirm from '../components/Dialog/FormConfirm.vue'

export default {
    components: {
        ComboBox,
        FormConfirm
    },
    data() {
        return {
            type: "error",
            message: "Dữ liệu bị thay đổi. Bạn có muốn cất không?",
            isShowFormDetail: false,
            department_dropdown:[
                {
                    data_text:'Phòng nhân sự',
                },
                {
                    data_text:'Phòng hành chính',
                },
                {
                    data_text:'Phòng nghiến cứu',
                }
            ],  
        }
    },
    methods: {
        /**
         * Hàm show form thêm mới nhân viên
         * MTDAI 05.07.2021
         */
        showFormDeatil() {
            this.isShowFormDetail = true;
        },

        /**
         * Hàm khi click buttn x để đóng formdetail
         * MTDAI 05.07.2021
         */
        closeFormDetail() {
            this.$refs.FormConfirm.showFormConfirm();
            this.type = 'conf';
        },

        /**
         * Hàm khi người dùng accept đóng form detail
         * MTDAI 05.07.2021
         */
        acceptCloseFormDetail() {
            this.isShowFormDetail = false;
        },
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
        height: 460px;
        padding: 0 24px 0 24px;

        .persion-info {
            width: calc(100% - 48px);
            height: 200px;
            display: flex;
            justify-content: space-between;

            .info-left {
                width: 46%;
                height: 100%;

                .info-line {
                    width: 100%;
                    height: 53px;
                    display: flex;
                    justify-content: space-between;                                     
                }

                .info-line-item {
                    display: flex;
                    flex-direction: column;        
                }
            }

            .info-right {
                width: 52%;
                height: 100%;              
            }
        }
    }
}

.input-info  {
    display: flex;
    flex-direction: column;                       
} 

.input-code {
    width: 150px;                           
}

.input-name {
    width: 235px;
}

input:focus {
  border: 1px solid #2ca01c !important;
}

.input-date-birth {
    width: 160px;
}

.info-r-line {
    display: flex;
    justify-content: space-between;
}

.input-gender {
    width: 250px;
}

.value-gender {
    display: flex;
    align-items: center;

    .value-gender-item {
        display: flex;
        align-items: center;
        font-size: 18px;
    }
}

.input-cmt {
    width: 250px;
}

.contact {
    width: 660px;
}

.contact-item {
    display: flex;
    justify-content: space-around;
}

.line-border {
    width: 850px;
    height: 1px;
    background-color: #ccc;
}

.form-content-footer {
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
    width: 215px;
    justify-content: space-between;
}

.button-save {
    height: 36px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #8d9096
}

.button-save:hover {
    background-color: #d2d3d6;
}

.button-save-add {
    height: 38px;
    display: flex;
    padding-right: 16px;
    padding-left: 16px;
    align-items: center;
    background-color: #2ca01c;
    border-radius: 3px;
    color: #fff;
    margin-right: 24px;
}

.button-save-add:hover {
    background-color: #35bf22;
}

</style>
