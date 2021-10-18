#!/bin/sh
set -e
command=$1

case "$command" in
    "serve")
        node dist/bin/www
        ;;
    "migrations_run")
        ./node_modules/.bin/sequelize db:migrate
        ;;
    "migrations_revert")
        ./node_modules/.bin/sequelize db:migrate:undo
        ;;
    *)
        echo "Valid commands are: serve | migrations_run | migrations_revert "
        exit 1
    ;;
esac
