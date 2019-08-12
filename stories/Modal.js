/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Modal, Button } from '../lib';
import { VARIANT } from '../lib/components/Modal/Modal';

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

const ModalContentInteractive = () => (
  <div
    style={{
      background: '#F7E2FC',
      color: 'white',
      padding: '20px',
      width: '700px',
      height: '450px',
    }}
  ></div>
);

storiesOf('Modal', module)
  .lokiSkip('default', () => {
    const isOpened = boolean('Modal is opened', true);
    const title = text('Modal title', 'Warning this is a Modal Title');

    return (
      <Container>
        {isOpened && (
          <Modal title={title} footer={<ModalFooter />} showCloseButton={false}>
            <ModalContent />
          </Modal>
        )}
      </Container>
    );
  })
  .add('no content', () => (
    <Container>
      <Modal title="Warning this is a Modal Title" showCloseButton={false} />
    </Container>
  ))
  .add('with content', () => (
    <Container>
      <Modal title="Warning this is a Modal Title" footer={<ModalFooter />} showCloseButton={false}>
        <ModalContent />
      </Modal>
    </Container>
  ))
  .add('interactive - no footer buttons', () => (
    <Container>
      <Modal
        title="This is an interactive modal frame... put stuff below in the pink area"
        variant={VARIANT.LARGE}
      >
        <ModalContentInteractive />
      </Modal>
    </Container>
  ))
  .add('interactive - with footer buttons', () => (
    <Container>
      <Modal
        title="This is an interactive modal frame... put stuff below in the pink area"
        variant={VARIANT.LARGE}
        footer={<ModalFooter />}
      >
        <ModalContentInteractive />
      </Modal>
    </Container>
  ));
