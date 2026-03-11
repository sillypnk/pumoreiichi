/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    // Empty Line
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration', 'after-comment'],
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      { ignore: ['after-comment', 'first-nested'] },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        ignore: [
          'after-comment',
          'first-nested',
          'inside-single-line-block',
          'after-custom-property',
        ],
      },
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignore: ['after-comment'] },
    ],

    // Selectors
    'selector-no-vendor-prefix': [
      false,
      { ignoreSelectors: ['/-webkit-.*/', '/-moz-.*/'] },
    ],

    // Patterns
    'selector-class-pattern': '[a-z]+',
    'custom-property-pattern': '[a-z]+',
  },
}
