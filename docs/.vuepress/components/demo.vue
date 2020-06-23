<!--
 * @Author: your name
 * @Date: 2020-05-26 17:32:36
 * @LastEditTime: 2020-05-26 17:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-admin\docs\.vuepress\components\demo.vue
--> 
<template>
  <div class="demo">
    {{ msg }}
    <my-hello></my-hello>
    <el-button>button</el-button>   // 使用了el-button
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>