tasks = [
    {'title': 'Learn HTML, CSS and Javascript',
        'completed' : false
    },
    {'title': 'Learn the basics of Vue JS', 
        'completed' : false
    },  
    {'title': 'Complete Vue JS Challenge with excellence', 
        'completed' : false
    },  
]

const ToDoList = {
    data(){
        return {
            todolist : window.tasks,
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
                alert('task ca not be empty');
            }

        },
        clearList: function(){
            this.todolist = [];
        }
    }
}

Vue.createApp(ToDoList).mount('#app');