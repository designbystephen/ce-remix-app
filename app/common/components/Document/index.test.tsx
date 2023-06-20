/**
 * @jest-environment jsdom
 */

import Document from '.';

describe('Document', () => {
  it('exists', () => {
    expect(Document).toBeDefined();
  });

  // NOTE: at this moment there is no well-defined approach for testing with Remix wrappers using RTL
  //   it('renders', () => {
  //     render(
  //         <Document>
  //             content
  //         </Document>
  //     );
  //   });
});
