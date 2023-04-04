const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
    );
  next();
});

app.post('/api/employee', (req, res, next) => {
  const employee = req.body;
  console.log(employee);
  res.status(201).json({
    message: 'Employee Added Successfully!'
  });
});

app.use('/api/employee',(req, res, next) => {
  const employees = [
    {
    id: 'dasg2c2cdc',
    tNumber: 'first server tnum',
    firstName: 'First Server Fname',
    lastName: 'First Server Lname',
    job: 'First Server job',
    employmentStatus: 'First Server empStat',
    employmentDates: 'First Server empDate',
    salary: 'first Server salary',
    DOB: 'first server DOB',
    SSN: 'first server ssn'
    },
    {
    id: 'adsfasdga32e',
    tNumber: '2 server tnum',
    firstName: 'Second Server Fname',
    lastName: '2 Server Lname',
    job: '2 Server job',
    employmentStatus: '2 Server empStat',
    employmentDates: '2 Server empDate',
    salary: '2 Server salary',
    DOB: '2 server DOB',
    SSN: '2 server ssn'
    }
  ]
  res.status(200).json({
    message: 'Employees fetched successfully!',
    employees: employees
  });
});

module.exports = app;
