use Pixar;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
select movies.title, sales.domestic_sales, sales.international_sales from BoxOffice as sales
inner join Movies as movies on movies.id = sales.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
select movies.title, sales.domestic_sales, sales.international_sales from BoxOffice as sales
inner join Movies as movies on movies.id = sales.movie_id
where sales.international_sales > sales.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
select Movies.title, BoxOffice.rating from BoxOffice
inner join Movies on Movies.id = BoxOffice.movie_id
order by BoxOffice.rating desc;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
select Theater.*, Movies.* from Theater left join Movies
on Movies.theater_id = Theater.id
order by Theater.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
select Theater.*, Movies.* from Theater right join Movies
on Movies.theater_id = Theater.id
order by Theater.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
select Movies.title, BoxOffice.rating from BoxOffice
inner join Movies on Movies.id = BoxOffice.movie_id
where BoxOffice.rating > 7.5;

select title from Movies
where id in (
	select movie_id from BoxOffice
    where rating > 7.5
);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
select m.title, bo.rating from BoxOffice as bo
inner join Movies as m on m.id = bo.movie_id
where m.year > 2009;

select rating from BoxOffice
where movie_id in (
	select movie_id from Movies
    where year > 2009
);

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
select name, location from Theater
where exists (
	select theater_id from Movies
    where theater_id = Theater.id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
select name, location from Theater
where not exists (
	select theater_id from Movies
    where theater_id = Theater.id
);

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
select * from Movies as m
join BoxOffice as bo on bo.movie_id = m.id
where bo.rating > 8 and m.theater_id is not null;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
select m1.title, m1.length_minutes, m2.title, m2.length_minutes
from Movies as m1, Movies as m2
where m1.director = m2.director
and m1.title <> m2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
select title from Movies as m
inner join BoxOffice as bo
on m.id = bo.movie_id
where bo.domestic_sales + bo.international_sales >= 500000000
and m.length_minutes > 110;

select title from Movies
where id in (
	select movie_id from BoxOffice
    where domestic_sales + international_sales >= 500000000
	and Movies.length_minutes > 110
);
