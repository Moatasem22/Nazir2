class Worker {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

class WorkerManagementSystem {
    constructor() {
        this.workers = [];
    }

    addWorker(id, name, role) {
        const worker = new Worker(id, name, role);
        this.workers.push(worker);
        console.log(`Worker added: ${name}`);
    }

    removeWorker(id) {
        this.workers = this.workers.filter(worker => worker.id !== id);
        console.log(`Worker with ID: ${id} removed`);
    }

    updateWorker(id, name, role) {
        const worker = this.workers.find(worker => worker.id === id);
        if (worker) {
            worker.name = name;
            worker.role = role;
            console.log(`Worker updated: ${name}`);
        } else {
            console.log(`Worker with ID: ${id} not found`);
        }
    }

    listWorkers() {
        console.log("Current Workers:");
        this.workers.forEach(worker => {
            console.log(`ID: ${worker.id}, Name: ${worker.name}, Role: ${worker.role}`);
        });
    }
}

// Example Usage
const system = new WorkerManagementSystem();
system.addWorker(1, 'Alice', 'Engineer');
system.addWorker(2, 'Bob', 'Manager');
system.listWorkers();
system.updateWorker(1, 'Alice Johnson', 'Senior Engineer');
system.removeWorker(2);
system.listWorkers();
