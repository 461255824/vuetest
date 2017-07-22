<template>
  <div>
      <div v-for = ' item in list ' :key='item.id'>{{item}}</div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                list:['苹果','香蕉','火龙果']
            }
        },
        methods:{

        }
    }
</script>