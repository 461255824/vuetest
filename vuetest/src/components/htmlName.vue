<template>
    <div>
       这是我引人的自定义标签
    </div>
</template>
<script>
import Vue from 'vue';

export default {
    //name: 'todo-list',
    data() {
        return {
            select: String
        }
    },
    props: {
        data: Array,
        
    },
    methods: {
        handleCommand(command) {
            this.select = command
            this.$message('click' + command)
            this.$emit('myself','1')
        },
        say() {
            alert('zhe')
        }
    }
}
</script>
