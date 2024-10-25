

const ToDoList = {
    data(){
        return {
            todolist :[],
            newtask : '',
        };
    },
    methods : {
        addTask: function(){
            if (this.newtask){
                this.todolist.push({
                    'title': this.newtask,
                    'completed' : false
                });
                this.newtask = '';
            }else{
                alert('task can not be empty');
            }

        },
        clearList: function(){
            this.todolist = [];
        }
    }
}

Vue.createApp(ToDoList).mount('#app');