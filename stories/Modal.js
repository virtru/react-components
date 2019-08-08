/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Modal, Button } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const ModalFooter = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ marginRight: '15px' }}>
      <Button size={Button.SIZE.MEDIUM} variant={Button.VARIANT.SECONDARY}>
        Cancel
      </Button>
    </div>
    <Button size={Button.SIZE.MEDIUM} variant={Button.VARIANT.PRIMARY}>
      Ok
    </Button>
  </div>
);

const ModalContent = () => (
  <div
    style={{
      color: '#2d323b',
      font: "normal 1.3rem 'Open Sans', Helvetica, Arial, sans-serif",
      lineHeight: '1.8rem',
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum sapien ut libero rutrum
    tristique.
  </div>
);

storiesOf('Modal', module).add('default', () => {
  const title = text('Modal title', 'Warning this is a Modal Title');
  const isOpened = boolean('Modal is opened', true);

  return (
    <Container>
      <Modal title={title} footer={<ModalFooter />} isOpened={isOpened}>
        <ModalContent />
      </Modal>
    </Container>
  );
});
