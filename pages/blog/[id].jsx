import React from 'react';
import { Flex, Box, Heading, Image } from 'rebass/styled-components';
import MDX from '@mdx-js/runtime';
import { useRouter } from 'next/router';

const mdx = `
# react-markdown

Renders Markdown as pure React components.

[![npm version](https://img.shields.io/npm/v/react-markdown.svg?style=flat-square)](https://www.npmjs.com/package/react-markdown)[![Build Status](https://img.shields.io/travis/rexxars/react-markdown/master.svg?style=flat-square)](https://travis-ci.org/rexxars/react-markdown)

Demo available at https://rexxars.github.io/react-markdown/

---

react-markdown is proudly sponsored by

<a href="https://www.sanity.io/?utm_source=GitHub&utm_campaign=react-markdown" rel="nofollow" target="_blank">
<img src="https://www.sanity.io/static/images/logo_red.svg?v=2" width="300" /><br />
Sanity: The Headless CMS Construction Kit
</a>

---

## Installing


## Basic usage


## Upgrading to 4.0

Should be straightforward. You might need to alter you code slightly if you:

See [CHANGELOG](CHANGELOG.md) for more details.

## Notes


## Options

## Parsing HTML

If you want to specify options for the HTML parsing step, you can instead import the HTML parser plugin directly:

## Node types

Note: Disallowing a node will also prevent the rendering of any children of that node, unless the
children text nodes.

## Developing

## License

MIT © [Espen Hovlandsdal](https://espen.codes/)
`;

export default function Post() {
  const router = useRouter();
  const direction = 'left';

  return (
    <>
      <Flex justifyContent="center">
        <Box p={3} width={[1, 1 / 2, 2 / 3]} color="text">
          <Heading textAlign={direction} mt={2} fontSize={8} fontWeight="light">
            {router.query.id}
          </Heading>
          <Image
            src="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            mt={5}
          />
          <MDX>{mdx}</MDX>
        </Box>
      </Flex>
    </>
  );
}
