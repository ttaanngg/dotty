#!/bin/bash

ng build;
rm dist/index.html
rsync -a ./dist/ /Users/tangweiqiang/PycharmProjects/noob/static/dist/
