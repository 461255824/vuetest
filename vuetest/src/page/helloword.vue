<template>
    <div>
        <div @click="sayHello">你好世界</div>
        <div>{{word}}</div>
        <div>
            <el-button @click="show = !show">Click Me</el-button>
            <transition name="el-zoom-in-top">
                <div v-show='show'>要操作的内容</div>
            </transition>
            <div>
                <el-slider v-model="value8" show-input>
                </el-slider>
            </div>
            <el-radio-group v-model="radio2" @change='chan'>
                <el-radio :label="1">备选项</el-radio>
                <el-radio :label="2">备选项</el-radio>
                <el-radio :label="3">备选项</el-radio>
            </el-radio-group>
            <router-link to='/sayHello/childrenComponent'>点击去子组件</router-link>
            <router-link to='/sayHello/children2'>2组件</router-link>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import ch from './childrenComponent.vue'
export default {
    components:{ch},
    data() {
        return {
            word: '你好',
            show: true,
            value8: 0,
            radio2:3,
        }
    },
    methods: {
        sayHello() {
            alert('你好啊')
        },
        chan(data) {
            console.log(data);
        }
    }
}
</script>
<style scoped>
div {
    font-size: 20px;
}
</style>

