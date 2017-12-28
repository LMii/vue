Vue.component("TodoList",{
  template:`<div><header>
        <span>ToDoList</span>
        <input type="text" placeholder="请输入事项" @keyup.13="add" v-model="con">
    </header>
    <main>
        <div class="main-header">
            <button v-on:click="changeStatus('0')" :class="{check:status=='0'}">未完成</button>
            <button v-on:click="changeStatus('1')" :class="{check:status=='1'}">已完成</button>
            <button v-on:click="changeStatus('all')" :class="{check:status=='all'}">全部</button>
        </div>
        <ul>
            <li v-for="item in data">
                <div v-if="item.editA" @dblclick="edit(item)">
                    <span class="status" @click="changeP(item)" :class="{change:item.status=='1'}"></span>
                    <p class="con">{{item.con}}</p>
                    <span class="del" @click="del(item.id)">删除</span>
                </div>
                <div v-else class="edit">
                   <input type="text" @blur="blur(item)" v-model="item.con">
                </div>
            </li>

        </ul>
        <div v-if="all.length==0" style="line-height: 32px">没有数据...</div>
    </main></div>`,
    data(){
      return{
          all:localStorage.todo?JSON.parse(localStorage.todo):[],
          con:'',
          status:'all',
          editA:true,
      }
    },
    methods:{
        add(){
            if(!this.con.trim()){
                return;
            }
            var obj={};
            obj.con=this.con;
            obj.status=0;
            /*要给每一个绑定一个*/
            obj.editA=true;
            obj.id=Math.random()+new Date().getTime();
            this.all.push(obj);
            this.con='';///添加完将自动清空
            localStorage.todo=JSON.stringify(this.all);
        },
        changeStatus(status){
            this.status=status;
            localStorage.todo=JSON.stringify(this.all);
        },
        del(id){
            this.all=this.all.filter((value)=>{return value.id!=id})
            localStorage.todo=JSON.stringify(this.all);
        },
        changeP(item){
            if(item.status=='0'){
                item.status='1';
            }else if(item.status=='1'){
                item.status='0';
            }
            localStorage.todo=JSON.stringify(this.all);
        },
        edit(item){
            item.editA=false;
        },
        blur(item){
            item.editA=true;
            localStorage.todo=JSON.stringify(this.all);
        }
    },
    computed:{
        data(){
            var data=[];
            if(this.status=='all'){
                data=this.all;
            }else{
                data=this.all.filter((value)=>{
                    return value.status==this.status
                });
            }

            return data;
        }
    },
})