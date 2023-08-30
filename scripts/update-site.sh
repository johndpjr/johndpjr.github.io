#!/bin/bash
repo="Personal_Website"
git clone --depth=1 https://github.com/johndpjr/${repo}.git
rm -rf ${repo}/.git
rsync -r --delete --exclude='.git/' --exclude='scripts/' . .
cp -r ${repo}/* .
rm -rf ${repo}
