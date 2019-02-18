insert into users (username, password, role)
  values ('Admin','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','admin');
insert into users (username, password, role)
  values ('ydrc','$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG','user');

insert into events (title,start_date,end_date,org_name,price,capacity,note,"userId",status)
  values ('Interview',DATE 'Thu, 14 February 2019 13:30:00', DATE 'Thu, 14 February 2019 13:30:00','YDRC',120,10,'The event is for the interview',1,1);
  insert into lunches (note,price,time,"eventId")
    values ('Makloba',30,'12:15',1)
  insert into coffees (note,price,time,"eventId")
    values ('Coffee without suger!',5,'10:30',1)
  insert into equipment (note,price,"eventId")
    values ('Datashow',20,1)

insert into events (title,start_date,end_date,org_name,price,capacity,note,"userId",status)
  values ('Meeting',DATE 'Mon, 11 February 2019 13:30:00', DATE 'Mon, 11 February 2019 13:30:00','PPU',50,5,'The event is for the interview',2,1);
  insert into lunches (note,price,time,"eventId")
    values ('Kabsa',30,'12:30',2)
  insert into coffees (note,price,time,"eventId")
    values ('3 Coffee without suger! and 2 with suger',5,'11:00',2)
  insert into equipment (note,price,"eventId")
    values ('Datashow',20,2)
