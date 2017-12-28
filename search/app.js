new Vue({
    el:'.root',
    data:{
        datas:[{content:'111',id:1},{content:'222',id:2}],
        con:'',
        show:false,
    },
    methods:{
        change(val){
            this.con=val.content;
            this.show=false;
        },
        focus(){
            this.show=true;
        },
    }
})