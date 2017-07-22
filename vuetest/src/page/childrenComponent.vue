<template>
  <div>
      <div>这是子组件的内容</div>
      <todo-list v-bind:data = 'list'></todo-list>
  </div>
</template>
<script>
import todoList from '../components/todoList'
    export default {
        components:{todoList},
        data() {
            return {
                list:['唱歌','跳舞','打篮球'],
                text:'nihoa'
            }
        },
        methods:{

        }
    }
</script>
