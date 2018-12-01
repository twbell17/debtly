insert into users (user_handle, username, first_name, middle_name, last_name, suffix, email, joined_date) values
    ('cd44f599-b2d2-4fce-84c6-69ea40f0859a', 'Russia', 'Anastasia', 'A', 'Hayden', '', 'stasena@gmail.com', now()),
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', 'QuietOmen', 'Bryce', 'C', 'Hayden', '', 'bryce.c.hayden@gmail.com', now())
on conflict do nothing;
