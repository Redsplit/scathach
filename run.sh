#! /bin/bash
git add .
git commit -am "memek"
git push -f heroku master
heroku ps:scale worker=1