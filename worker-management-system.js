// worker-management-system.js

class Worker {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.profile = {};
        this.sessions = [];
        this.projects = [];
        this.salary = 0;
        this.attendance = [];
    }

    // Create or update worker profile
    updateProfile(details) {
        this.profile = { ...this.profile, ...details };
    }

    // Track work sessions
    addSession(session) {
        this.sessions.push(session);
    }

    // Assign project
    assignProject(project) {
        this.projects.push(project);
    }

    // Calculate salary based on hours worked
    calculateSalary() {
        const hoursWorked = this.sessions.reduce((total, session) => total + session.hours, 0);
        this.salary = hoursWorked * this.profile.hourlyRate;
    }

    // Mark attendance
    markAttendance(date) {
        this.attendance.push({ date, status: 'Present' });
    }

    // Mark absence
    markAbsence(date) {
        this.attendance.push({ date, status: 'Absent' });
    }

    // Generate productivity report
    generateProductivityReport() {
        return {
            name: this.name,
            role: this.role,
            totalHoursWorked: this.sessions.reduce((total, session) => total + session.hours, 0),
            projects: this.projects,
            attendance: this.attendance
        };
    }

    // Analyze performance
    analyzePerformance() {
        // Logic for performance analytics
    }
}

class WorkSession {
    constructor(date, hours, project) {
        this.date = date;
        this.hours = hours;
        this.project = project;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.assignedWorkers = [];
    }

    // Add worker to project
    addWorker(worker) {
        this.assignedWorkers.push(worker);
        worker.assignProject(this);
    }
}

// Example usage
const worker1 = new Worker('John Doe', 'Developer');
worker1.updateProfile({ hourlyRate: 20, experience: 5 });

const project1 = new Project('Project Alpha');
project1.addWorker(worker1);

const session1 = new WorkSession('2026-02-26', 8, project1);
worker1.addSession(session1);
worker1.calculateSalary();

console.log(worker1.generateProductivityReport());