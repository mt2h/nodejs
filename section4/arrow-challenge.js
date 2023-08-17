const tasks = {
    tasks: [{
            text: 'Grocery shoping',
            completed: true
        },{
            text: 'Clean yard',
            completed: false 
        },{
            text: 'Film cpurse',
            completed: false
        }],
    /*getTaskToDo(){
        return this.tasks.filter((task) => {
            return task.completed === false
            })
        }*/
    getTaskToDo(){
        return this.tasks.filter((task) => task.completed === false)
        }
    }

console.log(tasks.getTaskToDo())