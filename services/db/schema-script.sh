#!/bin/bash

white="\033[0m"
green="\033[0;32m"
cyan="\033[0;36m"



for file in `ls "$(dirname $0)"/schema/**.sql | sort`; do
  echo -e "\n${green}Running ${cyan} $file schema scripts${green} on debtly db...${white}"
    psql -U $1 -d debtly --echo-errors -q -f $file
  echo ""

  if [ -z "$3" ] || [ "$3" != "prod" ]; then
    echo -e "\n${green}Running ${cyan} $file db schema scripts${green} on debtly_integration db...${white}"
      psql -U $1 -d debtly_integration --echo-errors -q -f`` $file
    echo ""
  fi
done
