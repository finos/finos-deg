/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function GetInvolved(props) {

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](/)`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions and stay up to date; [sign up to our mailing-list](mailto:deg+subscribe@finos.org) and [check the web archives](https://groups.google.com/a/finos.org/forum/#!forum/deg)',
      title: 'Join the community',
    }
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Get Involved</h1>
          </header>
          <p>If you would like to participate in this working group, please review our participation requirements below, then feel free to join our next meeting.  We also encourage you to join the mailing list, by <a target="_blank" href="mailto:deg+subscribe@finos.org">sending a blank email to deg+subscribe@finos.org</a>.  Once you are subscribed, please send a brief email introducing yourself and your interest in the group's work to the mailing-list - this will help save time on the calls themselves.</p>
          <GridBlock contents={supportLinks} layout="twoColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = GetInvolved;
