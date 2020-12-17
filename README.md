```zsh
> jest

 FAIL  __tests__/DragSortableView.test.js
  ● Test suite failed to run

    /Users/tagawahirotaka/Desktop/rn-test-sample/__tests__/DragSortableView.test.js: Unexpected token (6:31)

      Jest encountered an unexpected token
      This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
      By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".
      Here's what you can do:
       • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
       • If you need a custom transformation specify a "transform" option in your config.
       • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.
      You'll find more details and examples of these config options in the docs:
      https://jestjs.io/docs/en/configuration.html
      Details:
        4 |
        5 | test("renders correctly", () => {
      > 6 |   const tree = renderer.create(<DragSortableView />).toJSON();
          |                                ^
        7 |   expect(tree).toMatchSnapshot();
        8 | });
        9 |

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.449s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! rn-test-sample@1.0.0 test: `jest`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the rn-test-sample@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/tagawahirotaka/.npm/_logs/2020-12-17T13_07_32_048Z-debug.log
```
