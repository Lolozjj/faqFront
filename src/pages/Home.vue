<template>
  <div>
    <div class="header">
        <header-menu></header-menu>
    </div>
   

  </div>
</template>
<script>
import headerMenu from "../components/headerMenu.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    "header-menu": headerMenu,
  },
};
</script>

<style scoped>
.header{
    position: fixed;
    width: 100%;
}
</style>>
