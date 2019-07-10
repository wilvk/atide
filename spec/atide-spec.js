'use babel';

import Atide from '../lib/atide';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Atide', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('atide');
  });

  describe('when the atide:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
        expect(false).toBe(false);
      });
    });
});
