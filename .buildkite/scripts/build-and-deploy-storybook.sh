#!/bin/bash

set -eu

source buildkite-scripts/utils/logging.sh

buildkite-scripts/scripts/verify-node-modules.sh

# todo remove this omg
export AWS_ACCESS_KEY_ID=AKIAUUGNTHZFUQTD6VFJ
export AWS_SECRET_ACCESS_KEY=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

$(aws ecr get-login --no-include-email --region us-east-1)

docker build -t storybook .

docker tag storybook:latest 318258757195.dkr.ecr.us-east-1.amazonaws.com/storybook:latest

docker push 318258757195.dkr.ecr.us-east-1.amazonaws.com/storybook:latest

node scripts/deployStorybook.js
