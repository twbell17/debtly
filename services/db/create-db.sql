drop table if exists plans;
drop table if exists passhash;
drop table if exists users;

drop database if exists debtly;
drop database if exists debtly_integration;
drop role if exists debtly_app;
drop role if exists debtly_read;

create role debtly_app login password 'debtlydev' valid until 'infinity';
create role debtly_read login password 'debtlydev' valid until 'infinity';
create database debtly;
create database debtly_integration;
