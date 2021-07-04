<template>
  <div id="app">
    <SideBar></SideBar>
    <div :class="['body-content', {'body-content-big': !isSideBarOpen}]">
      <NavBar>
      </NavBar>
      <div class="content">
        <Content/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../src/layout/NavBar.vue'
import SideBar from '../src/layout/SideBar.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    Content
  },
  computed: {
    isSideBarOpen(){
        return this.$store.getters.isSideBarOpen;
    }
  },
}
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.body-content {
  position: absolute;
  top: 0;
  left: 178px;
  bottom: 0;
  right: 0;

  .content {
    width: 100%;
    height: calc(100% - 48px);
    background-color: #f4f5f8;
  }
}
.body-content-big {
  left: 52px !important; 
}
</style>
