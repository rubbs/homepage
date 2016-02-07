#!/bin/bash

PROJECT=/home/ruben/projekte/homepage
GRUNT_PROJECT=/home/ruben/projekte/homepage/src/main/node
TERM=gnome-terminal

## start intelliJ and atom editor

/opt/idea-IC-143.1184.17/bin/idea.sh ${PROJECT} &

/usr/bin/atom ${PROJECT}/src/main/node &

## start appengine devserver
$TERM $PROJECT -e "mvn appengine:devserver" --window-with-profile=dev &

## start grunt dev server
$TERM $GRUNT_PROJECT &
