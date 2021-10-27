use hr;

-- 1 - Escreva uma query que exiba o maior salário da tabela.
select max(SALARY) as `max_salary` from employees;

-- 2 - Escreva uma query que exiba a diferença entre o maior e o menor salário.
select max(SALARY) - min(SALARY) as `max_difference` from employees;

-- 3 - Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
select JOB_ID, avg(SALARY) as `average_salary` from employees
group by JOB_ID order by `average_salary` desc;

-- 4 - Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
select sum(SALARY) as `total_salary` from employees;

-- 5 - Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
select format(max(SALARY), 2) as `max_salary`, format(min(SALARY), 2) as `min_salary`, 
format(sum(SALARY), 2) as `total_salary`, format(avg(SALARY), 2) as `average_salary` from employees;

-- 6 - Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
select JOB_ID, count(*) as `programmers_count` from employees group by JOB_ID
having JOB_ID = 'IT_PROG';

-- 7 - Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
select JOB_ID, sum(SALARY) as `total_salary` from employees group by JOB_ID;

-- 8 - Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
select JOB_ID, sum(SALARY) as `total_salary` from employees group by JOB_ID
having JOB_ID = 'IT_PROG';

-- 9 - Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
select JOB_ID, avg(SALARY) as `average_salary` from employees group by JOB_ID
having JOB_ID <> 'IT_PROG'
order by `average_salary` desc;

-- 10 - Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
select DEPARTMENT_ID, avg(SALARY) as `average_salary`, count(*) as `employee_count` from employees
group by DEPARTMENT_ID having `employee_count` >= 10;

-- 11 - Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
update employees
set PHONE_NUMBER = replace(PHONE_NUMBER, '515', '777')
where PHONE_NUMBER like '515%';

-- 12 - Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
select * from employees where char_length(FIRST_NAME) >= 8;

-- 13 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
select EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) as `HIRE_YEAR` from employees;

-- 14 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
select EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) as `HIRE_DAY` from employees;

-- 15 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
select EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) as `HIRE_MONTH` from employees;

-- 16 - Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
select UCASE(FIRST_NAME) as `UPPERCASE_FIRST_NAME` from employees;

-- 17 - Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
select LAST_NAME, HIRE_DATE from employees
where year(HIRE_DATE) = '1987' and month(HIRE_DATE) = '7';

-- 18 - Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
select FIRST_NAME, LAST_NAME, datediff(now(), HIRE_DATE) as `days_in_company` from employees;
