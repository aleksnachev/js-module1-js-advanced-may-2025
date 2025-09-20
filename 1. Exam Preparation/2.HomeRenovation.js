class HomeRenovation {
    constructor(budget) {
        this.budget = Number(budget);
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        const task = { description, cost, priority };
        this.tasks.push(task);
        this.budget -= cost;

        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        const index = this.tasks.findIndex(task => task.description === description);

        if (index === -1) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        const [task] = this.tasks.splice(index, 1);
        this.completedTasks.push(task);

        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative.";
        }

        const count = this.tasks.filter(task => task.priority >= minimalPriority).length;

        if (count === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${count} task${count !== 1 ? 's' : ''} to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        }

        const pendingTasks = this.tasks
            .map(t => `${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`)
            .join('\n');

        return `Budget left $${this.budget}.\nYou have completed ${this.completedTasks.length} tasks.\nPending tasks in the renovation plan:\n${pendingTasks}`;
    }
}

//Testing all
const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());

