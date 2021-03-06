import React, { FC, useEffect, useRef } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  theme,
  useDisclosure,
} from '@chakra-ui/react';
import { FocusableElement } from '@chakra-ui/utils';
import styled from 'styled-components';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LimitWidth } from './LimitWidth';

const Root = styled.div`
  background-color: ${(theme as any).colors.blue[50]};
  padding: 50px 30px;
`;

export const MoreDataForm: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isThanksVisible,
    onOpen: showThanks,
    onClose: hideThanks,
  } = useDisclosure();

  useEffect(() => {
    hideThanks();
  }, [isOpen, hideThanks]);

  const initialRef = useRef<FocusableElement>(null);

  return (
    <Root>
      <LimitWidth>
        <Button leftIcon={<HiOutlineLightBulb />} colorScheme="blue" onClick={onOpen}>
          Need more data?
        </Button>
      </LimitWidth>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What is your need?</ModalHeader>
          <ModalCloseButton />
          {!isThanksVisible ? (
            <>
              <ModalBody pb={6}>
                <FormControl mt={4}>
                  <FormLabel>
                    Please explain what representation of the data you need to be shown in
                    the reports page
                  </FormLabel>
                  <Textarea ref={initialRef as any} />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={showThanks}>
                  Share the need
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </>
          ) : (
            <ModalBody pb={6}>
              Thanks for sharing, we will consider it in the plans.{' '}
              <span role="img" aria-label="Smile face emoji">
                😊
              </span>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </Root>
  );
};
