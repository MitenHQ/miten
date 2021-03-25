import React, { FC } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  IconButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

export const Drawer: FC = ({ children }) => {
  const [isSmallScreen] = useMediaQuery('(max-width: 480px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  if (!isSmallScreen) return <div>{children}</div>;

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        aria-label="Open Menu"
        icon={<BiMenu />}
      />
      <ChakraDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Miten</DrawerHeader>
            <DrawerBody>{children}</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </>
  );
};
