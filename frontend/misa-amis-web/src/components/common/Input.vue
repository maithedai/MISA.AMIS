<template>
    <div class="input-search" :class="cssClass">
        <input class="search" type="text" :placeholder="placeholder">
        <div v-show="type == 'search'" class="icon-search"></div>
    </div>
</template>

<script>
export default {
    props:{
        type: {
            type: String,
            default: 'input'
        },
        value:{
            type: String,
            default: 'aa'
        },
        placeholder:{
            type: String,
            default: "Tìm theo mã, tên nhân viên"
        },
        cssClass:{
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.input-search {
    width: 240px;
    height: 30px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    
    input {
        background-color: unset !important;
        border: none !important;
        outline: none !important;
        &::placeholder{
            font-style: italic;
            font-size: 12px;
        }
    }
    .search {
        width: 100%;
        height: 100%;
    }

    .search::placeholder {
        margin-left: 8px;
    }

    .icon-search {
        position: relative;
    }      
}                   
</style>    