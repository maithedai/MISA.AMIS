<template>
    <div class="content-wapper">
        <div class="content">
            <div class="content-header">
                <div class="page-name">Nhân viên</div>
                <div class="button-add button pointer" @click="showFormDeatil">Thêm mới nhân viên</div>
            </div>
            <div class="content-body">
                <div class="bo-header">
                    <Input v-model="value" cssClass="m-r-24" type="search"></Input>
                    <div class="icon-reload m-r-24"></div>
                    <div class="icon-export"></div>
                </div>
            </div>
        </div>
        <FormDeatil ref="FormDeatil"/>
    </div>
</template>

<script>

import FormDeatil from '../components/FormDetai.vue'
import Input from '@/components/common/Input.vue'
export default {
    components: {
        FormDeatil,
        Input
    },
    data() {
        return {
            value: ""
        }
    },
    methods: {

        /**
         * Hàm xử lý khi click mở form thêm mới
         * MTDAI 05.07.2021
         */
        showFormDeatil() {           
            this.$refs.FormDeatil.showFormDeatil();
        }

    }
    
}
</script>

<style lang="scss" scoped>

.content-wapper {
    width: 100%;
    height: 100%;

    .content {
        position: absolute;
        top: 48px;
        left: 16px;
        right: 16px;
        bottom: 0px;
        padding-top: 24px ;

        .content-header {
            width: 100%;
            height: 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .page-name {
                font-size: 24px;
                font-weight: 1000;
            }

            .button-add {
                background-color: #2ca01c;
                color: #fff;
            }

            .button-add:hover {
                background-color: #86bd7f;
            }

        }

        .content-body {
            position: absolute;
            top: 84px;
            bottom: 16px;
            left: 0px;
            right: 0px;
            background-color: #fff;
            padding: 10px;

            .bo-header {             
                width: 100%;
                height: 32px; 
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }
        }
    }
}

</style>