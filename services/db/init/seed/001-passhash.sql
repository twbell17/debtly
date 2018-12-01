insert into passhash (user_handle, passhash, mod_date) values
    ('037b4897-8a2a-46b6-8ed7-47a555bb40f2', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now()),
    ('17832b68-e91e-45f4-9a92-042c69b1b9c5', '$2a$10$RNki7aWKS6386IIR9PyFpOrY7ljeVweyD3H5HejDj9tHbR1.yjUY.',  now())
on conflict do nothing;
