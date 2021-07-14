<template>
  <div class="content">
    <div class="a"  v-for="i in articles" :key="i">
      <img src="../assets/sheyingshi/sanya.jpg" width="100%" alt="" />
      <div> 三亚</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      articles:40
      }
  },
}
</script>
<style scoped>
.content {
  margin-left: 1vw;
}
.a {
  display: inline-block;
  width: 23vw;
  margin-right: 1vw;
}
.a div{
  width: 100%;
  height: 5vh;
}
</style>
  <!-- <div class="a">
    <img src="../assets/sheyingshi/001.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/002.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/003.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/004.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/xiamen.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/005.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/006.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/007.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/beijing.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/008.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/009.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/dalian.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/010.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/011.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/012.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/lijiang.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/013.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/014.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/015.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/dali.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/016.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/017.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/018.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/qingdao.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/019.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/020.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/021.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/chengdu.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/022.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/023.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/guilin.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/024.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/hangzhou.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/025.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/guangzhou.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/01/037.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/026.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/027.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/balidao.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/028.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/pujidao.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/029.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/ouzou.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/030.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/xianggelila.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/031.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/032.jpg" width="100%" alt="" />
    <div> </div>
  </div>
  <div class="a">
    <img src="../assets/sheyingshi/xishuangbabna.jpg" width="100%" alt="" />
    <div> </div>
  </div> -->