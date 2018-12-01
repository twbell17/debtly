create table if not exists plans
(
  plan_id uuid primary key,
  company_name text,
  owner uuid references users(user_handle),
  created_date timestamp not null,
  last_updated_by uuid not null,
  last_updated_on timestamp not null
);
grant select, insert, update, delete on table plans to debtly_app;
grant select on table plans to debtly_read;
