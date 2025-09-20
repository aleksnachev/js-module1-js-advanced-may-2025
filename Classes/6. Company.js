class Employee {
    constructor(name, salary, position) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}
 
class Company {
    constructor() {
        this.departments = {};
    }
 
    addEmployee(name, salary, position, department) {
 
        if (!name || !position || !department || salary == null || salary < 0) {
            throw new Error("Invalid input!");
        }
 
        const employee = new Employee(name, salary, position);
 
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
 
        this.departments[department].push(employee);
 
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
 
    bestDepartment() {
        let bestDept = "";
        let bestAvgSalary = 0;
 
        for (let dept in this.departments) {
            let employees = this.departments[dept];
            let totalSalary = 0;
 
            for (let emp of employees) {
                totalSalary += emp.salary;
            }
 
            let avg = totalSalary / employees.length;
 
            if (avg > bestAvgSalary) {
                bestAvgSalary = avg;
                bestDept = dept;
            }
        }
 
        if (bestDept === "") {
            return "No departments yet.";
        }
 
        let sorted = this.departments[bestDept].slice().sort((a, b) => {
            if (b.salary !== a.salary) {
                return b.salary - a.salary;
            }
            return a.name.localeCompare(b.name);
        });
 
        let result = `Best Department is: ${bestDept}\n`;
        result += `Average salary: ${bestAvgSalary.toFixed(2)}\n`;
 
        for (let emp of sorted) {
            result += `${emp.name} ${emp.salary} ${emp.position}\n`;
        }
 
        return result.trim();
    }
}