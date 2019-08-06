/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';

import { Tab, Tabs, TabList, TabPanel } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: 1 }}>{children}</div>
);

storiesOf('Tabs', module)
  .lokiSkip('default', () => {
    return (
      <Container>
        <Tabs>
          <TabList>
            <Tab>
              Foo
            </Tab>
            <Tab>
              Bar
            </Tab>
          </TabList>
          <TabPanel>
            Foo Data
          </TabPanel>
          <TabPanel>
            Bar Data
          </TabPanel>
        </Tabs>
      </Container>
    );
  })
