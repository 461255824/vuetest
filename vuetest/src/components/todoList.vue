<template>
<div>
    <div v-for='item in data' @click='say'>{{item}}</div>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
                {{typeof select == "string" ?select:'下拉菜单'}}
                <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for='item1 in data' :command='item1'>{{item1}}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <div @myself="say">自定义事件</div>
    <div>这是我引人的文件</div>
    <html-name-hh></html-name-hh>
    <div> 这行是用来测试git上传文件的 </div>
</div>
</template>
<script>
import Vue from 'vue';
import htmlNameHh from './htmlName';
export default {
    //name: 'todo-list',
    data() {
        return {
            select: String
        }
    },
    components: {
        htmlNameHh
    },
    props: {
        data: Array,

    },
    methods: {
        handleCommand(command) {
            this.select = command
            this.$message('click' + command)
            this.$emit('myself', '1')
        },
        say() {
            alert('zhe')
        }
    }
}
</script>
