insert into plans (plan_id, company_name, owner, created_date, last_updated_by, last_updated_on) values
    ('c722f60c-dfae-11e7-80c1-9a214cf093ae', 'Stockton 12 Honda', '037b4897-8a2a-46b6-8ed7-47a555bb40f2',  now() - interval '21 days', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now())
on conflict do nothing;
