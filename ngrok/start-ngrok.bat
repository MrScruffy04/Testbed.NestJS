@echo off

ngrok start --config %localappdata%\ngrok\ngrok.yml --config ngrok.yml nestjs

@echo on
