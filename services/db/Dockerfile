FROM postgres:9-alpine



MAINTAINER Bryce Hayden


# If you alter this list then make sure to run the following commands:
# docker-compose -f docker-compose.yml -f docker-development.yml down
# docker-compose -f docker-compose.yml -f docker-development.yml stop users-db
# docker volume prune
# docker-compose -f docker-compose.yml -f docker-development.yml up --build


# Add the create script to the postgres entry point for docker
ADD ./init-script.sh /docker-entrypoint-initdb.d

# Add the rest of the files to the home directory
ADD ./create-db.sql  /var/lib/postgresql/
ADD ./schema-script.sh  /var/lib/postgresql/
ADD ./seed-script.sh  /var/lib/postgresql/
ADD ./schema/  /var/lib/postgresql//schema/
ADD ./seed/  /var/lib/postgresql/seed/

RUN dos2unix /docker-entrypoint-initdb.d/init-script.sh
RUN dos2unix  /var/lib/postgresql/schema-script.sh
RUN dos2unix  /var/lib/postgresql/seed-script.sh

RUN chmod u+x /docker-entrypoint-initdb.d/init-script.sh
RUN chmod u+x /var/lib/postgresql/schema-script.sh
RUN chmod u+x /var/lib/postgresql/seed-script.sh

# ADD ./init/0-000-create-db.sql /docker-entrypoint-initdb.d/
# ADD ./init/schema/1-000-users.sql /docker-entrypoint-initdb.d/
