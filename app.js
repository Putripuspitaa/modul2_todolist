var app = new Vue({
    el: '#app',
    data() {
        return {
            todos: [],
            todo: ''
        }
    },

    methods:
    {

        addTodo() {
            if (this.todo.trim()) {
                this.todos.push(this.todo);
                this.todo = '';
            }
        },
        deleteTodo8(index){
            this.todos.splice(index, 1);
        },
        loadLocalStorage() {
            const ls = JSON.parse(localStorage.getItem('todos'));
            console.log(ls);
            if (ls == null) {
                return;
            }
            this.todos = ls;
            console.log(this.todos);
        }
    },

    create() {
    this.loadLocalStorage();
},
    watch: {
    todos() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
}
});