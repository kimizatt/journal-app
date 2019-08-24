delete from entries 
where entry_id = $1;

select * from entries 
where user_id = $2;