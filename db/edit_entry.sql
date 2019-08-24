update entries 
set date = $2, title = $3, content = $4, mood = $5
where entry_id = $1;

select * from entries 
where user_id = $6;