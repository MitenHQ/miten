import React, { FC } from 'react';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';
import styled from 'styled-components';

const A = styled.a`
  margin-top: 8px;
`;

export type Props = {
  href: string;
};

export const Link: FC<Props> = (props) => (
  <NextLink href={props.href} passHref>
    <A href={props.href} aria-label="forgot password">
      <Button w="100%" colorScheme="teal" variant="outline">
        {props.children}
      </Button>
    </A>
  </NextLink>
);
