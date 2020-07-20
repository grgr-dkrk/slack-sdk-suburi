#!/bin/sh
yarn
zip -r ./lambda.zip ./
aws lambda update-function-code \
    --function-name slack-events \
    --zip-file fileb://lambda.zip