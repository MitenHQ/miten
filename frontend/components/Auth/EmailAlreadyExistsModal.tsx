import React, { FC, useRef } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useForgotPasswordMutation } from '../../lib/graphql/hooks';
import { useRedirectToEmailSentPage } from './useEmailSentRouter';

export type Props = {
  email: string;
  isOpen: boolean;
  onClose: () => void;
};

export const EmailAlreadyExistsModal: FC<Props> = ({ email, isOpen, onClose }) => {
  const redirectToResEmailSent = useRedirectToEmailSentPage(); // used to redirect to EmailSent component after submit and sending email as a location state
  const [forgotPasswordMutation, { loading }] = useForgotPasswordMutation({
    errorPolicy: 'all',
  }); // request handler

  const handle = async (): Promise<void> => {
    const { data } = await forgotPasswordMutation({
      variables: { credentials: { email } },
    });
    // if it was successful
    if (email && data?.forgotPassword?.success) {
      redirectToResEmailSent(email);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>This email already exists</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          This email is already exists in Miten.io. You can set your password by clicking
          the button below.
        </ModalBody>
        <ModalFooter>
          <Button onClick={handle} disabled={loading} colorScheme="teal">
            Set password
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
