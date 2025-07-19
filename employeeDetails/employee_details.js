const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 } , 
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    {id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 }
];

function displayEmployees()
{
    const totalEmployees = employees.map( employee => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries()
{
    const totalSalaries = employees.reduce( (acc , employee) => acc + employee.salary, 0);
   alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees()
{
    const HREmployees = employees.filter( employee => employee.department === 'HR');
    const HREmployeesDislpay = HREmployees.map(employee => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}</p>`).join('');

    document.getElementById('employeesDetails').innerHTML = HREmployeesDislpay;
}

function findEmployeeByID(employeeID)
{
    const foundEmployee = employees.find(employee => employee.id === employeeID );

    if(foundEmployee)
    {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
    }
    else
    {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}