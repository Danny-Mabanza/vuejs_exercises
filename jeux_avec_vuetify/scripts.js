const ToDoList = {
    data() {
        return {
            todolist: [],
            newtask: '',
        };
    },
    methods: {
        addTask() {
            if (this.newtask.trim()) {
                this.todolist.push({
                    title: this.newtask,
                    completed: false
                });
                this.newtask = '';
                this.updateLocalStorage();
            } else {
                alert('Task cannot be empty');
            }
        },
        clearList() {
            this.todolist = [];
            this.updateLocalStorage();
        },
        toggleTask(task) {
            task.completed = !task.completed; // Change l'état de completion
            this.updateLocalStorage();
        },
        updateLocalStorage() {
            localStorage.setItem("todolist", JSON.stringify(this.todolist));
        }
    },
    created() {
        // Chargement de la liste des tâches depuis le local storage au démarrage
        const savedList = localStorage.getItem("todolist");
        if (savedList) {
            this.todolist = JSON.parse(savedList);
        }
    }
};

// Initialiser Vue avec Vuetify
const vuetify = Vuetify.createVuetify();
Vue.createApp(ToDoList).use(vuetify).mount('#app');
