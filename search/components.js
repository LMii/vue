Vue.component("search",{
    props:['con'],
    template:`<header>
        <input type="text" v-model="con" @focus="focus">
        <div class="search">搜索</div>
    </header>`,
    methods:{
        focus(){
            this.$emit('increment')
        }
    }
})
Vue.component("list",{
    props:['listData','show'],
    template:`<ul v-if="show">
        <li v-for="item in listData" @click="changeValue(item)">{{item.content}}</li>
    </ul>`,
    methods:{
        changeValue(item){
            this.$emit('increment',item)
        },
    }
})