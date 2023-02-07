#!/bin/bash
git for-each-ref --merged --format '%(refname:short)' refs/heads | grep -v "master\|main" | xargs git branch -D
