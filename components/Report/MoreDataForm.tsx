import React, { FC, useEffect, useRef } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
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
import styled from 'styled-components';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LimitWidth } from './LimitWidth';

const Root = styled.div`
  background-color: ${theme.colors.blue[50]};
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

  const initialRef = useRef();

  return (
    <Root>
      <LimitWidth>
        <Button leftIcon={<HiOutlineLightBulb />} colorScheme="blue" onClick={onOpen}>
          Do you need the data in other shape? Tell us about it
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
                  <Textarea ref={initialRef} />
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
              Thanks for sharing, we will consider it in the plans. <span>😊</span>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </Root>
  );
};
