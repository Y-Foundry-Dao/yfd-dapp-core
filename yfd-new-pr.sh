#!/bin/bash
# $1 = PR Title
# $2 = PR Description and Commit message

branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

git branch -u origin/main $branch
git commit -a -m "$2"

git push

gh pr create -t "$1" -b "$2"

echo "PR: "$1" Created!"

