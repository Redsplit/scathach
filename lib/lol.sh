#! /bin/bash
cat keparat.json | grep -Po '"rank":.*?[^\\]",' | sed 's/{/\\n/' | sed 's/"rank"/Rank/' | sed 's/"name"/ => /' | head -n 20 > a.txt