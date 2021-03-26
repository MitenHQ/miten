import React, { FC } from 'react';
import NextLink from 'next/link';
import { Button, ButtonProps } from '@chakra-ui/react';
import styled from 'styled-components';

const A = styled.a`
  margin-top: 8px;
`;

export type Props = {
  href: string;
} & ButtonProps;

export const Link: FC<Props> = ({ href, children, ...buttonProps }) => (
  <NextLink href={href} passHref>
    <A href={href} aria-label="forgot password">
      <Button w="100%" colorScheme="teal" variant="outline" {...buttonProps}>
        {children}
      </Button>
    </A>
  </NextLink>
);
