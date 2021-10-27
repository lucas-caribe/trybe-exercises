use sakila;

-- Procedures

-- 1 - Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
delimiter $$
create procedure getMostPopularActors()
begin
	select actor.actor_id, actor.first_name, count(*) as `movie_appearances` from film_actor
	join actor on actor.actor_id = film_actor.actor_id
	group by actor_id
	order by `movie_appearances` desc
	limit 10;
end $$
delimiter ;

call getMostPopularActors();

-- 2 - Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
delimiter $$
create procedure getMoviesByCategory(in category varchar(50))
begin
	select f.film_id, f.title, c.category_id, c.name from film_category as fc
	join film as f on f.film_id = fc.film_id
	join category as c on c.category_id = fc.category_id
	where c.name = category;
end $$
delimiter ;

call getMoviesByCategory('Action');

-- 3 - Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
delimiter $$
create procedure getCustomerActiveStatus(in e varchar(100), out isActive bool)
begin
	select active from customer
	where email = e
    into isActive;
end $$
delimiter ;

call getCustomerActiveStatus('PATRICIA.JOHNSON@sakilacustomer.org', @isActive);
select @isActive;

-- Functions

-- 1 - Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
delimiter $$
create function getTotalPaymentsById(id int)
returns int reads sql data
begin
	declare totalPayments int;
    
    select count(*) from payment
	where customer_id = id
    into totalPayments;
    
    return totalPayments;
end $$
delimiter ;

select getTotalPaymentsById(1);

-- 2 - Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
delimiter $$
create function getMovieTitleById(id int)
returns varchar(128) reads sql data
begin
	declare movieTitle varchar(128);
    
    select title from film
	where film_id = id
    into movieTitle;
    
    return movieTitle;
end $$
delimiter ;

select getMovieTitleById(1);

-- 3 - Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
delimiter $$
create function getMovieCountByCategory(categoryName varchar(25))
returns int reads sql data
begin
	declare movieCount int;

	select count(*) from film_category
	join category on category.category_id = film_category.category_id
	where category.name = categoryName
	group by category.category_id
    into movieCount;
    
    return movieCount;
end $$
delimiter ;

select getMovieCountByCategory('Action') as `movie_count`;