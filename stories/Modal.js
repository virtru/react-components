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

const ModalContentSmall = () => (
  <div
    style={{
      color: '#2d323b',
      font: "normal 13px 'Open Sans', Helvetica, Arial, sans-serif",
      lineHeight: '18px',
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum sapien ut libero rutrum
    tristique.
  </div>
);

const ModalContentLarge = () => (
  <div
    style={{
      background: '#F7E2FC',
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
          <Modal
            title={title}
            variant={VARIANT.SMALL}
            footer={<ModalFooter />}
            showCloseButton={false}
          >
            <ModalContentSmall />
          </Modal>
        )}
      </Container>
    );
  })
  .add('small - no content', () => (
    <Container>
      <Modal
        title="Warning this is a Modal Title"
        variant={VARIANT.SMALL}
        showCloseButton={false}
      />
    </Container>
  ))
  .add('small - with content', () => (
    <Container>
      <Modal
        title="Warning this is a Modal Title"
        variant={VARIANT.SMALL}
        footer={<ModalFooter />}
        showCloseButton={false}
      >
        <ModalContentSmall />
      </Modal>
    </Container>
  ))
  .add('large - no footer buttons', () => (
    <Container>
      <Modal
        title="This is an interactive modal frame... put stuff below in the pink area"
        variant={VARIANT.LARGE}
      >
        <ModalContentLarge />
      </Modal>
    </Container>
  ))
  .add('large - with footer buttons', () => (
    <Container>
      <Modal
        title="This is an interactive modal frame... put stuff below in the pink area"
        variant={VARIANT.LARGE}
        footer={<ModalFooter />}
      >
        <ModalContentLarge />
      </Modal>
    </Container>
  ));
