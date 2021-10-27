create schema if not exists Zoo;
use Zoo;

create table Manager (
  manager_id int auto_increment primary key,
  name varchar(50) not null
);

create table Employee (
  employee_id int auto_increment primary key,
  name varchar(50) not null,
  manager_id int not null,
  foreign key (manager_id) references Manager (manager_id)
);

create table Animal (
  animal_id int auto_increment primary key,
  name varchar(50) not null,
  species varchar(100) not null,
  sex varchar(20) not null,
  age tinyint unsigned not null,
  location varchar(250) not null
);

create table Animal_employee (
  animal_id int not null,
  employee_id int not null,
  constraint primary key (animal_id, employee_id),
  foreign key (animal_id) references Animal (animal_id),
  foreign key (employee_id) references Employee (employee_id)
);

insert into Manager (name) values
('Lucas'),
('Caribé'),
('Robson');

select * from Manager;

insert into Employee (name, manager_id) values
('Luquinhas', 1),
('Zé', 2),
('Marcelim', 1),
('Alan', 3);

select e.name as `employee_name`, m.name as `manager_name` from Employee as e
join Manager as m using(manager_id);

insert into Animal (name, species, sex, age, location) values
('Zena', 'lion', 'female', 12, 'NE'),
('Maxwell', 'lion', 'male', 15, 'NE'),
('Joe', 'penguim', 'male', 10, 'SE'),
('Paulette', 'snake', 'female', 5, 'SW'),
('Orval', 'elephant', 'male', 15, 'NW');

select * from Animal;
select * from Animal where sex = 'female';

insert into Animal_employee (animal_id, employee_id) values
(1, 2),
(2, 4),
(3, 4),
(3, 3);

select
  Animal.name as `Animal name`,
  Employee.name as `Employee name`
from Animal_employee
join Animal using(animal_id)
join Employee using(employee_id);