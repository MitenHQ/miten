import React, { FC } from 'react';
import {
  Stack,
  Text,
  Heading,
  List,
  OrderedList,
  ListItem,
  ListIcon,
} from '@chakra-ui/layout';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

export const PrivacyPolicy: FC = () => (
  <Stack>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      is part of Artingle OY. This privacy policy will explain how our organization uses
      the personal data we collect from you when you use our website.
    </Text>
    <Heading as="h3" size="l">
      Topics:
    </Heading>
    <Text pl="10">
      <OrderedList>
        <ListItem>What data do we collect?</ListItem>
        <ListItem>How do we collect your data?</ListItem>
        <ListItem>How will we use your data?</ListItem>
        <ListItem>How do we store your data?</ListItem>
        <ListItem>Marketing</ListItem>
        <ListItem>What are your data protection rights?</ListItem>
        <ListItem>Privacy policies of other websites</ListItem>
        <ListItem>Changes to our privacy policy</ListItem>
        <ListItem>How to contact us</ListItem>
      </OrderedList>
    </Text>
    <Heading as="h3" size="l">
      What data do we collect?
    </Heading>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      collects the following data:{' '}
      <List pl="4">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          IP addresses of the website visitors
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Your Email address, if you create a meeting link
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Feedback provided via the feedback links
        </ListItem>
      </List>
    </Text>
    <Heading as="h3" size="l">
      How do we collect your data?
    </Heading>
    <Text>
      <Text>
        You directly provide{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>{' '}
        with most of the data we collect. We collect data and process data when you:
      </Text>
      <List pl="4">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Create a feedback link.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Use a feedback link to provide feedback to a meeting organiser.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          View our website using request IPs.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Anonymous error reporting when our website encounters a problem when you are
          working with it. We will do our best to not collect any personal information in
          the error reports.
        </ListItem>
      </List>
    </Text>
    <Heading as="h3" size="l">
      How will we use your data?
    </Heading>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      collects your data so that we can:
    </Text>
    <Text>
      <List pl="4">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Send you the feedback links, and report links.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Email you with more information about our services that we think you might like
          by asking for your consent beforehand.
        </ListItem>
      </List>
    </Text>
    <Text>
      <Text>
        In order to provide the service,{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>{' '}
        uses SendGrid mail service but it does not use email tracking features.
      </Text>
      <Text>
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>{' '}
        uses Plausible Analytics, to collect anonymous analytics. It doesn’t register
        tracking cookies.
      </Text>
    </Text>
    <Heading as="h3" size="l">
      How do we store your data?
    </Heading>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      securely stores your data in{' '}
      <Link href="https://www.digitalocean.com">DigitalOcean</Link> servers inside the EU.
    </Text>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      will keep your email address and feedback until you request to delete them, feedback
      data is anonymous and feedback providers can request deleting their feedback.
    </Text>
    <Heading as="h3" size="l">
      Marketing
    </Heading>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      would like to send you information about products and services of ours that we think
      you might like.
    </Text>
    <Text>
      If you have agreed to receive marketing emails, you may always opt out at a later
      date.
    </Text>
    <Text>
      You have the right at any time to stop{' '}
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      from contacting you for marketing purposes or giving your data to other members of
      Artingle OY.
    </Text>
    <Text>
      If you no longer wish to be contacted for marketing purposes, please contact us at
      our email: <Link href="mailto:support@miten.io">support@miten.io</Link>
    </Text>
    <Heading as="h3" size="l">
      What are your data protection rights?
    </Heading>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      would like to make sure you are fully aware of all of your data protection rights.
      Every user is entitled to the following:
    </Text>
    <List pl="4">
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        The right to access - You have the right to request{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>{' '}
        for copies of your personal data. We may charge you a small fee for this service.
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        The right to rectification - You have the right to request that{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>{' '}
        correct any information you believe is inaccurate. You also have the right to
        request{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>{' '}
        to complete information you believe is incomplete.
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        The right to erasure - You have the right to request that{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>{' '}
        erase your personal data, under certain conditions.
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        The right to restrict processing - You have the right to request that{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>
        restrict the processing of your personal data, under certain conditions.
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        The right to object to processing - You have the right to object to{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>
        &apos;s processing of your personal data, under certain conditions.
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        The right to data portability - You have the right to request that{' '}
        <Link href="/" aria-label="homepage">
          Miten.io
        </Link>
        transfer the data that we have collected to another organization, or directly to
        you, under certain conditions.
      </ListItem>
    </List>
    <Text>
      If you make a request, we have one month to respond to you. If you would like to
      exercise any of these rights, please contact us at our email:{' '}
      <Link href="mailto:support@miten.io">support@miten.io</Link>
    </Text>
    <Heading as="h3" size="l">
      Privacy policies of other websites
    </Heading>
    <Text>
      The{' '}
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      website contains links to other websites. Our privacy policy applies only to our
      website, so if you click on a link to another website, you should read their privacy
      policy.
    </Text>
    <Heading as="h3" size="l">
      Changes to our privacy policy
    </Heading>
    <Text>
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>{' '}
      keeps its privacy policy under regular review and places any updates on this web
      page. This privacy policy was last updated on 14 March 2021.
    </Text>
    <Heading as="h3" size="l">
      How to contact us
    </Heading>
    <Text>
      If you have any questions about{' '}
      <Link href="/" aria-label="homepage">
        Miten.io
      </Link>
      &apos;s privacy policy, the data we hold on you, or you would like to exercise one
      of your data protection rights, please do not hesitate to contact us.
    </Text>
    <Text>
      Email us at: <Link href="mailto:support@miten.io">support@miten.io</Link>
    </Text>
  </Stack>
);
