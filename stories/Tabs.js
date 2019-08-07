/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';

import { Tab, Tabs, TabList, TabPanel } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: 1 }}>{children}</div>
);

const printTabs = (count) => (
  <Tabs>
    <TabList>
      {Array.from({ length: count }).map((_, index) => (
        <Tab>
          Label {index + 1}
        </Tab>
      ))}
    </TabList>
    {Array.from({ length: count }).map((_, index) => (
      <TabPanel>
        <div style={{ padding: '20px' }}>
          Content for tab {index + 1}
        </div>
      </TabPanel>
    ))}
  </Tabs>
);

storiesOf('Tabs', module)
  .lokiSkip('default', () => {
    const tabsCount = number('Number of tabs', 2);

    return (
      <Container>
        {printTabs(tabsCount)}
      </Container>
    );
  })
  .add('one tab', () => (
    <Container>
      {printTabs(1)}
    </Container>
  ))
  .add('multiple tabs', () => (
    <Container>
      {printTabs(3)}
    </Container>
  ));
