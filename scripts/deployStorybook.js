/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const AWS = require('aws-sdk');

const ecs = new AWS.ECS({
  region: 'us-east-1',
});

const updateStorybook = async () => {
  try {
    console.log('Getting task...');
    const { taskDefinition } = await ecs
      .describeTaskDefinition({
        taskDefinition: 'storybook',
      })
      .promise();

    delete taskDefinition.taskDefinitionArn;
    delete taskDefinition.revision;
    delete taskDefinition.status;
    delete taskDefinition.requiredAttributes;
    delete taskDefinition.compatibilities;
    delete taskDefinition.requiresAttributes;

    console.log('Registering new task...');
    const newTask = await ecs.registerTaskDefinition(taskDefinition).promise();
    const {
      taskDefinition: { revision },
    } = newTask;

    console.log(`Updating service with new task with revision "${revision}"...`);
    await ecs
      .updateService({
        cluster: 'storybook',
        service: 'storybook',
        taskDefinition: `storybook:${revision}`,
      })
      .promise();
    console.log('Done!');
  } catch (err) {
    console.error(err);
  }
};

updateStorybook();
