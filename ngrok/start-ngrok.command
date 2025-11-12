#!/bin/zsh
cd -- "$(dirname "$0")"

echo ">> $PATH <<"

ngrok start --config ~/Library/Application\ Support/ngrok/ngrok.yml --config ngrok.yml nestjs
