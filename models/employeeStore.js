const fs = require('fs')
const Employee = require('./employee')

class EmployeeStore{
    constructor(employee){
        this.employee = new Employee(employee)
        this.employeeArray = []
    }

    save(){
        this.employeeArray.push(this.employee);
        fs.writeFileSync('employee.txt',this.employeeArray,'utf-8');
    }

    load(){
        fs.readFileSync('employee.txt','utf-8');
    }

}

module.exports = EmployeeStore