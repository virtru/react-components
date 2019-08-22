$(aws ecr get-login --no-include-email --region us-east-1)
docker build -t storybook .
docker tag storybook:latest 318258757195.dkr.ecr.us-east-1.amazonaws.com/storybook:latest
docker push 318258757195.dkr.ecr.us-east-1.amazonaws.com/storybook:latest
node scripts/deployStorybook.js
