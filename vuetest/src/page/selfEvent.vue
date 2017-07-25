<template>
  <div>
      <div @myself = 'getData' @click='dothis'>{{num}}</div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                num:1,
            }
        },
        methods:{
            getData(d) {
                console.log("这是传递的数据"+d)
            },
            dothis() {
                console.log(this.num)
                this.$emit('myself',this.num)
            }
        }
    }
</script>