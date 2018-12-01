create table if not exists admins
(
    id uuid primary key default gen_random_uuid(),
    user_handle uuid references users(user_handle)
);
grant select, insert, update, delete on table admins to project_app;
grant select on table admins to project_read;
