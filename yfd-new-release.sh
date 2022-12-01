#!/bin/bash

git checkout -b releases/v$1 main
git branch -u origin/main releases/v$1
git push

git tag -a v$1 HEAD -m "New Release v$1"

echo "Release v$1 branch prepared for deployment!"
