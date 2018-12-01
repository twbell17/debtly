#!/bin/bash

host="percv-db"
adminUser="admin"

psql -U $adminUser --echo-errors -q -f ~/create-db.sql
/bin/bash ~/schema-script.sh $adminUser
/bin/bash ~/seed-script.sh $adminUser
