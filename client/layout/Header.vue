<template>
  <header :class="$style.mainHeader">
    <h1>Rtodo</h1>
  </header>
</template>

<style scoped lang="stylus" module>
  .main-header {
    text-align: center;
    h1 {
      color: #f00;
      font-size: 100px;
      font-weight: 300;
      margin: 20px;
      opacity: 0.4;
    }
  }
</style>

// 使用cssModule,解决css命名冲突
// export default {
//   computed: {
//     $style() {
//       return {
//         mainHeader: {
          
//         }
//       }
//     }
//   }
// }
