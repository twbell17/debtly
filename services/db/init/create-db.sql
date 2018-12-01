drop table if exists plans;
drop table if exists passhash;
drop table if exists users;

drop database if exists percv;
drop database if exists percv_integration;
drop role if exists percv_app;
drop role if exists percv_read;

create role percv_app login password 'percvdev' valid until 'infinity';
create role percv_read login password 'percvdev' valid until 'infinity';
create database percv;
create database percv_integration;
