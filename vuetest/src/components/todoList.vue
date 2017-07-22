<template>
    <div>
        <div v-for='item in data'>{{item}}</div>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                {{typeof select == "string" ?select:'下拉菜单'}}
                <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for='item1 in data' :command='item1'>{{item1}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'todo-list',
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
        }
    }
}
</script>
