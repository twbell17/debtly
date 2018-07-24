# Debtly Monolith
Debtly Monolith is the base project used to build an minimal viable product.
Postgresql is the main database, node and express are used for the api, and react with redux-saga for the UI.

# Getting Started

The following is an explanation for getting debtly-monolith runing on your local machine. These instructions do not include any instructions for use with windows (these will be added at a later date).

## Setup

### General steps to clone the repo
1. Open a terminal.
    1. Run the following command `git config --global user.email "email@example.com"` (replace with your own email that is used for gitlab).
    1. Use cd to move to the directory within your OS where you'd like to save the repo (ex `cd Documents`).
    1. If you have setup ssh capabilities on gitlab:
        1. Run the following command `git clone git@github.com:QuietOmen/debtly.git`.
    1. If you haven't setup ssh and simply want to type in your password each time:
        1. Run the following command `git clone https://github.com/QuietOmen/debtly.git`.
    1. Move into the newly cloned directory by running `cd debtly-monolith`.

### OSX Only Steps - One time only
1. Install [docker ce](https://store.docker.com/editions/community/docker-ce-desktop-mac).

### Linux Only Steps - One time only
1. Install [docker](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#install-docker-ce) _(Ubuntu)_
1. Install [docker-compose](https://docs.docker.com/compose/install).


### Windows Only Steps - One time only
1. Install [docker ce](https://store.docker.com/editions/community/docker-ce-desktop-windows).


### Common steps for all operating systems - One time only
1. Setup docker.
    1. Open a terminal.
        1. Type the following command: `sudo vim /etc/hosts`.
        1. Add `127.0.0.1 docker postgres.dev` to the hosts file.
        1. Press `esc` key and then type `:wq`.



### Steps to run latest changes (run daily and from inside the cloned repo)
1. Inside a terminal.
    1. cd into the directory where you cloned the repo (ex `cd Documents/perc-monolith`)
    1. Run `git pull` to make sure you have the latest.
    1. Run `docker-compose -f docker-compose.yml -f docker-development.yml up -d --build`.
1. Go to `localhost:3000` with the browser of your choice (Chrome or Firefox recommended).
