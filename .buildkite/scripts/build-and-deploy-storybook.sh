#!/bin/bash

# todo remove this omg
AWS_ACCESS_KEY_ID=AKIAUUGNTHZFUQTD6VFJ
AWS_SECRET_ACCESS_KEY=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

set -eu

source buildkite-scripts/utils/logging.sh

buildkite-scripts/scripts/verify-node-modules.sh

$(aws ecr get-login --no-include-email --region us-east-1)

docker build -t storybook .

docker tag storybook:latest 318258757195.dkr.ecr.us-east-1.amazonaws.com/storybook:latest

docker push 318258757195.dkr.ecr.us-east-1.amazonaws.com/storybook:latest

node scripts/deployStorybook.js
