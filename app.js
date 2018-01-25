webpackJsonp([1],{

/***/ "+Rw1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_root_less__ = __webpack_require__("JLpR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_root_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_root_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
//  DesignSystem - Query History Cards
// ==================================================





var UIQueryHistoryCard = function UIQueryHistoryCard() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap button-ui' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Query History'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Query Cards'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'In Compass, users can view queries that they have either favorited or previously used in the following cards. The cards separate each query option ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'i',
            null,
            '(e.g. Filter or Limit)'
          ),
          ' into separate code snippets. We use ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://github.com/mongodb-js/codemirror-mongodb' },
            'codemirror'
          ),
          ' to pretty print and color code the queries to heighten legibility.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'query-history-recent-query' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'button-group' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { title: 'Favorite Query', className: 'button button-is-small query-history-button query-history-button-favorite' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { 'aria-hidden': 'true', className: 'fa fa-star-o' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { title: 'Copy Query to Clipboard', className: 'button button-is-small query-history-button query-history-button-copy' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { 'aria-hidden': 'true', className: 'fa fa-clipboard' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { title: 'Delete Query from Favorites List', className: 'button button-is-small query-history-button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { 'aria-hidden': 'true', className: 'fa fa-trash' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'query-history-card' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'query-history-card-title' },
              'Tue Sep 05 2017 13:15:32 GMT-0400 (EDT)'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h',
                  { className: 'query-history-card-label' },
                  'filter'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'js hljs javascript' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '{'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '  field_1:',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'hljs-string' },
                        '\'value\''
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '  field_2:',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'hljs-string' },
                        '\'value\''
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '}'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h',
                  { className: 'query-history-card-label' },
                  'sort'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'js hljs javascript' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '{'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '  field_1: ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'hljs-number' },
                        '-1'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '}'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h',
                  { className: 'query-history-card-label' },
                  'limit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'js hljs javascript' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'hljs-number' },
                      '100'
                    )
                  )
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'query-history-favorite-query' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'button-group' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { title: 'Copy Query to Clipboard', className: 'button button-is-small query-history-button query-history-button-copy' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { 'aria-hidden': 'true', className: 'fa fa-clipboard' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { title: 'Delete Query from Favorites List', className: 'button button-is-small query-history-button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { 'aria-hidden': 'true', className: 'fa fa-trash' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'query-history-card' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'query-history-card-title' },
              'Favorite Query Name'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h',
                  { className: 'query-history-card-label' },
                  'filter'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'js hljs javascript' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '{'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '  field_1: {'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '    $',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        'in:'
                      ),
                      ' ['
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '      ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'hljs-string' },
                        '\'value_1\''
                      ),
                      ','
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '      ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'hljs-string' },
                        '\'value_2\''
                      ),
                      ','
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '      ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'hljs-string' },
                        '\'value_3\''
                      ),
                      ','
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '      ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'hljs-string' },
                        '\'value_4\''
                      ),
                      ','
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '    ]'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '  }'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      null,
                      '}'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h',
                  { className: 'query-history-card-label' },
                  'limit'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'pre',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'code',
                    { className: 'js hljs javascript' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'hljs-number' },
                      '25'
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="query-history-favorite-query">\n<div class="button-group-button">\n  <button class="button button-is-small query-history-button query-history-button-copy">\n    <span aria-hidden="true" class="fa fa-clipboard"></span>\n  </button>\n  <button class="button button-is-small query-history-button">\n    <span aria-hidden="true" class="fa fa-trashcan"></span>\n  </button>\n</div">\n  <div class="query-history-card">\n    <div class="query-history-card-title"> Favorite Query Name</div>\n    <ul>\n      <li>\n        <h class="query-history-card-label">Query Option Label</h>\n        <pre>\n          <code> Insert Codemirror Snippet </code>\n        </pre>\n    </ul>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Zero States'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'These simple zero state cards notify users to favorite or run a query.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'query-history-zero-state' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'query-history-zero-state-title' },
            'Run a query to see it saved here!'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'query-history-zero-state' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'query-history-zero-state-title' },
            'Favorite a query to see it saved here!'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="query-history-zero-state">\n  <div class="query-history-zero-state-title"> Insert Text Here </div>\n</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIQueryHistoryCard);

/***/ }),

/***/ "/LLj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
//  DesignSystem - DSGrid
// ==================================================




var UIGrid = function UIGrid() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Grid'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Grid 12-Column'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'A general-purpose 12-column grid is provided via ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: "http://foundation.zurb.com/sites/docs/grid.html", className: 'link' },
            'Foundation grid'
          ),
          ' for quickly building features.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Usage'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'When setting up your page with the grid, be sure to include the ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'code' },
            'small-#'
          ),
          ', ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'code' },
            'medium-#'
          ),
          ' and ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'code' },
            'large-#'
          ),
          ' values. These values represent how the grid will adapt to small, medium and large screen formats.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-3 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '3'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-3 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '3'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-3 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '3'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-3 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '3'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-4 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '4'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-4 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '4'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-4 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '4'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-5 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '5'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-5 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '5'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-6 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '6'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-6 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '6'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-7 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '7'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-3 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '3'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-8 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '8'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-9 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '9'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-10 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '10'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-2 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '2'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-11 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '11'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-1 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '1'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12 medium-6 large-12 grid-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          '12'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="columns small-12 medium-6 large-1">Content Here</div>\n<div class="columns small-12 medium-6 large-2">Content Here</div>\n<div class="columns small-12 medium-6 large-3">Content Here</div>\n<div class="columns small-12 medium-6 large-4">Content Here</div>\n<div class="columns small-12 medium-6 large-5">Content Here</div>\n<div class="columns small-12 medium-6 large-6">Content Here</div>\n<div class="columns small-12 medium-6 large-7">Content Here</div>\n<div class="columns small-12 medium-6 large-8">Content Here</div>\n<div class="columns small-12 medium-6 large-9">Content Here</div>\n<div class="columns small-12 medium-6 large-10">Content Here</div>\n<div class="columns small-12 medium-6 large-11">Content Here</div>\n<div class="columns small-12 medium-6 large-12">Content Here</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIGrid);

/***/ }),

/***/ "/m+n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// ==================================================
// DesignSystem - DSTypography
// ==================================================



var UITypography = function UITypography() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "wrap" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "row" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "columns small-12 u-mb-3" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h1",
          null,
          "Typography"
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "row" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "columns small-12" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h1",
          null,
          "H1 Headline"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "row" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "columns small-12" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          null,
          "H2 Headline"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "row" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "columns small-12" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h3",
          null,
          "H3 Headline"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "row" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "columns small-12" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h4",
          null,
          "H4 Headline"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          null,
          "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UITypography);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+prg");
module.exports = __webpack_require__("kxkY");


/***/ }),

/***/ "3sIU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


// 3rd

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var Component = React.Component;

var PropTypes = __webpack_require__("KSGD");
var Clipboard = __webpack_require__("V33R");
var classNames = __webpack_require__("HW6M");

// Components
var Tooltip = __webpack_require__("V3ZX").default;

var CopyableCommand = (_temp2 = _class = function (_Component) {
  _inherits(CopyableCommand, _Component);

  function CopyableCommand() {
    var _temp, _this, _ret;

    _classCallCheck(this, CopyableCommand);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      tooltipText: 'Click to Copy'
    }, _this.onMouseLeave = function () {
      _this.setState({ tooltipText: 'Click to Copy' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CopyableCommand.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.clipboard = new Clipboard(this.copyButton);

    this.clipboard.on('success', function () {
      _this2.setState({ tooltipText: 'Copied!' });
    });

    this.clipboard.on('error', function () {
      _this2.setState({ tooltipText: 'Copying Failed!' });
    });
  };

  CopyableCommand.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.clipboard) this.clipboard.destroy();
  };

  CopyableCommand.prototype.render = function render() {
    var _classNames,
        _this3 = this;

    var _props = this.props,
        copyableText = _props.copyableText,
        otherClasses = _props.otherClasses,
        fullWidth = _props.fullWidth;
    var tooltipText = this.state.tooltipText;


    return React.createElement(
      'div',
      { className: classNames('copy-command', (_classNames = {}, _classNames[otherClasses] = !!otherClasses, _classNames))
      },
      React.createElement(
        'span',
        { className: classNames('copy-command-text', { 'copy-command-is-full-width': fullWidth })
        },
        this.props.children || copyableText
      ),
      React.createElement(
        'button',
        {
          ref: function ref(button) {
            _this3.copyButton = button;
          },
          className: 'copy-command-button',
          'data-clipboard-mixin': true,
          'data-clipboard-text': copyableText,
          onMouseLeave: this.onMouseLeave
        },
        React.createElement(
          Tooltip,
          { content: tooltipText },
          React.createElement('i', { className: 'fa fa-files-o' }),
          ' COPY'
        )
      )
    );
  };

  return CopyableCommand;
}(Component), _class.propTypes = {
  copyableText: PropTypes.string.isRequired,
  otherClasses: PropTypes.string,
  children: PropTypes.node,
  fullWidth: PropTypes.bool
}, _class.defaultProps = {
  otherClasses: '',
  children: null,
  fullWidth: false
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (CopyableCommand);

/***/ }),

/***/ "5WeY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==================================================
// DesignSystem
// ==================================================




var container_class = "navigation-is-vertical-container";

var UIDesignSystem = function (_React$Component) {
  _inherits(UIDesignSystem, _React$Component);

  function UIDesignSystem(props) {
    _classCallCheck(this, UIDesignSystem);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { open: false };
    return _this;
  }

  UIDesignSystem.prototype.getClassName = function getClassName(container_class) {
    if (this.state.open) {
      return container_class + ' ' + container_class + '-is-open';
    }
    return container_class;
  };

  UIDesignSystem.prototype.toggleMobileMenu = function toggleMobileMenu() {
    this.setState({ open: !this.state.open });
  };

  UIDesignSystem.prototype.closeMobileMenu = function closeMobileMenu() {
    this.setState({ open: false });
  };

  UIDesignSystem.prototype.render = function render() {
    var children = this.props.children;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { className: 'navigation-is-vertical' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'navigation-mobile-menu-button button button-extra-small', onClick: this.toggleMobileMenu.bind(this), onBlur: this.closeMobileMenu.bind(this) },
          'Component Navigation'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: this.getClassName(container_class), onClick: this.closeMobileMenu.bind(this) },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'navigation-is-vertical-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/welcome', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                'Welcome'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navigation-is-vertical-child' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'navigation-link' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/principles', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Design Principles'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'navigation-is-vertical-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/base-styles', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                'Base Styles'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navigation-is-vertical-child' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/base-styles/colors', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Colors'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/base-styles/typography', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Typography'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/guidelines/grid', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Grid'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/base-styles/icons', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Icons'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'navigation-is-vertical-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                'Components'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navigation-is-vertical-child' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/buttons', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Buttons'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/banners', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Banners'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/bubbles', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Bubbles'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/code', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Code'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/forms', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Inputs'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/rich-forms', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Rich Inputs'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/layouts', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Layouts'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/lists', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Lists'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/view-modal', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Modals'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/tabs', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Tabs'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/components/tables', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Tables'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'navigation-is-vertical-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/compass-components', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                'Compass'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navigation-is-vertical-child' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/compass-components/query-history', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Query History'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'navigation-is-vertical-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/guidelines', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                'Guidelines'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'navigation-is-vertical-child' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                  { to: '/ui-design-system/guidelines/modify', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                  'Modify'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'navigation-is-vertical-parent' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/resources', className: 'navigation-link', activeClassName: 'navigation-link-active' },
                'Resources'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'content' },
        children
      )
    );
  };

  return UIDesignSystem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UIDesignSystem);

/***/ }),

/***/ "8Tkg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
// ==================================================
// DesignSystem - DSWelcome
// ==================================================




var ComponentsIndex = function ComponentsIndex() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'row' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'heading' },
        'Components'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12 u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'A collection of UI components common to MongoDB Cloud Manager, Atlas, Compass, and University.'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ComponentsIndex);

/***/ }),

/***/ "8ssp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clipboard__ = __webpack_require__("V33R");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button_js__ = __webpack_require__("kjwo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Button_js__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");



var ColorChip = function (_React$Component) {
  _inherits(ColorChip, _React$Component);

  function ColorChip() {
    _classCallCheck(this, ColorChip);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ColorChip.prototype.componentDidMount = function componentDidMount() {
    this.clipboard = new __WEBPACK_IMPORTED_MODULE_0_clipboard___default.a(this.copyButton);
  };

  ColorChip.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      { className: 'color-chip' },
      React.createElement('span', { className: 'color-chip-swatch ' + this.props.className }),
      React.createElement(
        'div',
        { className: 'color-chip-container' },
        React.createElement(
          'span',
          { className: 'color-chip-code code' },
          this.props.code
        ),
        React.createElement(
          'p',
          { className: 'color-chip-hex', id: this.props.hex, value: this.props.hex },
          this.props.hex
        ),
        React.createElement(
          'button',
          {
            className: 'button button-is-xs color-chip-copy-button',
            ref: function ref(button) {
              _this2.copyButton = button;
            },
            'data-clipboard-text': this.props.hex },
          'Copy to Clipboard'
        )
      )
    );
  };

  return ColorChip;
}(React.Component);

ColorChip.propTypes = {
  code: PropTypes.string,
  className: PropTypes.string,
  hex: PropTypes.string
};

/* harmony default export */ __webpack_exports__["a"] = (ColorChip);

/***/ }),

/***/ "97qb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
//  DesignSystem - DSTables
// ==================================================





var UITables = function UITables() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Tables'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/tables', className: 'section-header-tab-link' },
              'CSS'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/tables/react-tables', className: 'section-header-tab-link' },
              'React'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Standard Table'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Light Theme'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Use on a light background.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'table',
          { className: 'table' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'thead',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header' },
                'Name'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header' },
                'Status'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header' },
                'Version'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header table-cell-has-actions' },
                'Actions'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tbody',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'link' },
                  'free-shard-0'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                '1 min ago'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                '3.4.4'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-has-actions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'data'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs' },
                  'modify'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'link' },
                  'free-shard-1'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                '3 min ago'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                '3.4.4'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-has-actions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'data'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs' },
                  'modify'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'link' },
                  'free-shard-2'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                '5 min ago'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell' },
                '3.4.4'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-has-actions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'data'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs' },
                  'modify'
                )
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<table className="table">\n  <thead>\n    <tr className="table-row">\n      <th className="table-header">Name</th>\n      <th className="table-header">Status</th>\n      <th className="table-header">Version</th>\n      <th className="table-header table-cell-has-actions">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr className="table-row">\n      <td className="table-column table-cell"><a href={""} className="link">free-shard-0</a></td>\n      <td className="table-column table-cell">1 min ago</td>\n      <td className="table-column table-cell">3.4.4</td>\n      <td className="table-column table-cell table-cell-has-actions">\n        <button className="button table-button button-is-xs u-mr-1">data</button>\n        <button className="button table-button button-is-xs u-mr-1">metrics</button>\n        <button className="button table-button button-is-xs">modify</button>\n      </td>\n    </tr>\n    <tr className="table-row">\n      <td className="table-column table-cell"><a href={""} className="link">free-shard-1</a></td>\n      <td className="table-column table-cell">3 min ago</td>\n      <td className="table-column table-cell">3.4.4</td>\n      <td className="table-column table-cell table-cell-has-actions">\n        <button className="button table-button button-is-xs u-mr-1">data</button>\n        <button className="button table-button button-is-xs u-mr-1">metrics</button>\n        <button className="button table-button button-is-xs">modify</button>\n      </td>\n    </tr>\n    <tr className="table-row">\n      <td className="table-column table-cell"><a href={""} className="link">free-shard-2</a></td>\n      <td className="table-column table-cell">5 min ago</td>\n      <td className="table-column table-cell">3.4.4</td>\n      <td className="table-column table-cell table-cell-has-actions">\n        <button className="button table-button button-is-xs u-mr-1">data</button>\n        <button className="button table-button button-is-xs u-mr-1">metrics</button>\n        <button className="button table-button button-is-xs">modify</button>\n      </td>\n    </tr>\n  </tbody>\n</table>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Dark Theme'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Use on a dark background.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'table',
          { className: 'table' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'thead',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row table-row-is-dark' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header table-header-is-dark' },
                'Name'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header table-header-is-dark' },
                ' Status'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header table-header-is-dark' },
                'Version'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'th',
                { className: 'table-header table-header-is-dark table-cell-has-actions' },
                'Actions'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'tbody',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row table-row-is-dark' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: "", className: 'link link-on-dark' },
                  'free-shard-0'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                '1 min ago'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                '3.4.4'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark table-cell-has-actions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'data'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs' },
                  'modify'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row table-row-is-dark' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: "", className: 'link link-on-dark' },
                  'free-shard-1'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                '3 min ago'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                '3.4.4'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark table-cell-has-actions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'data'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs' },
                  'modify'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tr',
              { className: 'table-row table-row-is-dark' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: "", className: 'link link-on-dark' },
                  'free-shard-2'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                '5 min ago'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark' },
                '3.4.4'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'td',
                { className: 'table-column table-cell table-cell-is-dark table-cell-has-actions' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'data'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs u-mr-1' },
                  'metrics'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'button',
                  { className: 'button table-button button-is-xs' },
                  'modify'
                )
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'columns small-12' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<table className="table">\n  <thead>\n    <tr className="table-row table-row-is-dark">\n      <th className="table-header table-header-is-dark">Name</th>\n      <th className="table-header table-header-is-dark">Status</th>\n      <th className="table-header table-header-is-dark">Version</th>\n      <th className="table-header table-header-is-dark table-cell-has-actions">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr className="table-row table-row-is-dark">\n      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link">free-shard-0</a></td>\n      <td className="table-column table-cell table-cell-is-dark">1 min ago</td>\n      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>\n      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">\n        <button className="button table-button button-is-xs u-mr-1">data</button>\n        <button className="button table-button button-is-xs u-mr-1">metrics</button>\n        <button className="button table-button button-is-xs">modify</button>\n      </td>\n    </tr>\n    <tr className="table-row table-row-is-dark">\n      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link">free-shard-1</a></td>\n      <td className="table-column table-cell table-cell-is-dark">3 min ago</td>\n      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>\n      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">\n        <button className="button table-button button-is-xs u-mr-1">data</button>\n        <button className="button table-button button-is-xs u-mr-1">metrics</button>\n        <button className="button table-button button-is-xs">modify</button>\n      </td>\n    </tr>\n    <tr className="table-row table-row-is-dark">\n      <td className="table-column table-cell table-cell-is-dark"><a href={""} className="link">free-shard-2</a></td>\n      <td className="table-column table-cell table-cell-is-dark">5 min ago</td>\n      <td className="table-column table-cell table-cell-is-dark">3.4.4</td>\n      <td className="table-column table-cell table-cell-is-dark table-cell-has-actions">\n        <button className="button table-button button-is-xs u-mr-1">data</button>\n        <button className="button table-button button-is-xs u-mr-1">metrics</button>\n        <button className="button table-button button-is-xs">modify</button>\n      </td>\n    </tr>\n  </tbody>\n</table>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { id: 'pagination' },
          'Pagination States'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Controls Enabled'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'paginator' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'paginator-control paginator-control-is-left' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'paginator-button paginator-button-is-previous' }),
            ' Previous'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'paginator-text' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              '100-200 results (both controls enabled)'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'paginator-control paginator-control-is-right' },
            'Next',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'paginator-button paginator-button-is-next' })
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="paginator">\n  <span class="paginator-control paginator-control-is-left">\n    <button class="paginator-button paginator-button-is-previous">\n    </button> Previous\n  </span>\n  <span class="paginator-text">\n    <strong>100-200 results (both controls enabled)</strong>\n  </span>\n  <span class="paginator-control paginator-control-is-right">Next\n    <button class="paginator-button paginator-button-is-next">\n    </button>\n  </span>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Controls Disabled'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'paginator paginator-is-borderless' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'paginator-control paginator-control-is-left paginator-control-is-disabled' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'paginator-button paginator-button-is-previous', disabled: true }),
            ' Previous'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'paginator-text' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              '0-0 results (both controls disabled, borderless example)'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'paginator-control paginator-control-is-right paginator-control-is-disabled' },
            'Next',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'paginator-button paginator-button-is-next', disabled: true })
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="paginator paginator-is-borderless">\n  <span class="paginator-control paginator-control-is-left paginator-control-is-disabled">\n    <button class="paginator-button paginator-button-is-previous" disabled>\n    </button> Previous\n  </span>\n  <span class="paginator-text">\n    <strong>0-0 results (both controls disabled, borderless example)</strong>\n  </span>\n  <span class="paginator-control paginator-control-is-right paginator-control-is-disabled">Next\n    <button class="paginator-button paginator-button-is-next" disabled>\n    </button>\n  </span>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Properties Table'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'data-viz-row data-viz-row-is-rounded' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'header',
            { className: 'data-viz-row-cell data-viz-row-title' },
            'Cluster Details'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'dl',
            { className: 'properties-table data-viz-row-cell data-viz-row-cell-is-first' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'properties-table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-note' },
                '*Note: All new clusters are on WiredTiger and MongoDB 3.2.'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'properties-table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-left-half' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'vCPU'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  '2'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-right-half ' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'RAM'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  '8 GB'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'properties-table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-left-half' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'Disk Storage'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  '40 GB'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-right-half' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'Disk Speed'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  '120'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'properties-table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-left-half' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'Shards'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  '1'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-right-half' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'Replication Factor'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  '3'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'properties-table-row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-left-half' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'Backup'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  'Disabled'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'properties-table-right-half' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dt',
                  { className: 'properties-table-title' },
                  'Region'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'dd',
                  { className: 'properties-table-description' },
                  'N. Virginia'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'properties-table-row properties-table-row-is-last' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'properties-table-title' },
                'Estimate'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'properties-table-description properties-table-description-is-large' },
                '$399.00/month'
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="data-viz-row data-viz-row-is-rounded">\n  <header class="data-viz-row-cell data-viz-row-title">Cluster Details</header>\n  <dl class="properties-table data-viz-row-cell data-viz-row-cell-is-first">\n    <div class="properties-table-row">\n      <div class="properties-table-note">\n        *Note: All new clusters are on WiredTiger and MongoDB 3.2.\n      </div>\n    </div>\n    <div class="properties-table-row">\n      <div class="properties-table-left-half">\n        <dt class="properties-table-title">vCPU</dt>\n        <dd class="properties-table-description">2</dd>\n      </div>\n      <div class="properties-table-right-half ">\n        <dt class="properties-table-title">RAM</dt>\n        <dd class="properties-table-description">8 GB</dd>\n      </div>\n    </div>\n    <div class="properties-table-row">\n      <div class="properties-table-left-half">\n        <dt class="properties-table-title">Disk Storage</dt>\n        <dd class="properties-table-description">40 GB</dd>\n      </div>\n      <div class="properties-table-right-half">\n        <dt class="properties-table-title">Disk Speed</dt>\n        <dd class="properties-table-description">120</dd>\n      </div>\n    </div>\n    <div class="properties-table-row">\n      <div class="properties-table-left-half">\n        <dt class="properties-table-title">Shards</dt>\n        <dd class="properties-table-description">1</dd>\n      </div>\n      <div class="properties-table-right-half">\n        <dt class="properties-table-title">Replication Factor</dt>\n        <dd class="properties-table-description">3</dd>\n      </div>\n    </div>\n    <div class="properties-table-row">\n      <div class="properties-table-left-half">\n        <dt class="properties-table-title">Backup</dt>\n        <dd class="properties-table-description">Disabled</dd>\n      </div>\n      <div class="properties-table-right-half">\n        <dt class="properties-table-title">Region</dt>\n        <dd class="properties-table-description">N. Virginia</dd>\n      </div>\n    </div>\n    <div class="properties-table-row properties-table-row-is-last">\n      <dt class="properties-table-title">Estimate</dt>\n      <dd class="properties-table-description properties-table-description-is-large">$399.00/month</dd>\n    </div>\n  </dl>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Summary Table'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'summary-table summary-table-is-rounded' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-header' },
            'Cluster Overview'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-row-is-first summary-table-row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-left' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'Region'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-regionName' },
                'N. Virginia'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-right' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'Instance Size'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-instanceSize' },
                'M30'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-left' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'RAM'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-RAM' },
                '8 GB'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-right' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'Disk Storage'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-diskSizeGB' },
                '40 GB'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-left' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'Disk Speed'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-diskIOPS' },
                '120 IOPS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-right' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'Replication Factor'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-replicationFactor' },
                '3'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-row-is-last summary-table-row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-left' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'Backup'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-backupEnabled' },
                'Enabled'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'summary-table-row-half summary-table-row-half-is-right' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dt',
                { className: 'summary-table-row-title' },
                'Shards'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'dd',
                { className: 'summary-table-row-value js-numShards' },
                '1'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-header' },
            'Pricing'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-list-row js-pricing-popover', 'data-content': '<div className=\'pricing-estimate-popover\'>Your monthly estimate is <span className=\'pricing-estimate-popover-price\'> $387.62</span><span className=\'pricing-estimate-popover-subscript\'>/mo</span></div>', 'data-placement': 'top', 'data-html': 'true', 'data-trigger': 'hover', 'data-container': 'body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dt',
              { className: 'summary-table-list-row-title' },
              'Hourly Cost'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dd',
              { className: 'summary-table-list-row-value' },
              '$0.54',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'summary-table-list-row-subscript' },
                '/hr'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-list-row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dt',
              { className: 'summary-table-list-row-title' },
              '30-day Cost'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'dd',
              { className: 'summary-table-list-row-value js-monthlyCostEstimate' },
              '$387.62',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'summary-table-list-row-subscript' },
                '/mo'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'summary-table-list-row summary-table-list-row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'summary-table-list-row-money-icon', src: '/../client/assets/icon-moneytime.svg' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'summary-table-list-row-description' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Pay-as-you-go!'
              ),
              ' You will be billed hourly and you can terminate your cluster at any time.'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="summary-table summary-table-is-rounded">\n  <div class="summary-table-header">Cluster Overview</div>\n  <div class="summary-table-row-is-first summary-table-row">\n    <div class="summary-table-row-half summary-table-row-half-is-left">\n      <dt class="summary-table-row-title">Region</dt>\n      <dd class="summary-table-row-value js-regionName">N. Virginia</dd>\n    </div>\n    <div class="summary-table-row-half summary-table-row-half-is-right">\n      <dt class="summary-table-row-title">Instance Size</dt>\n      <dd class="summary-table-row-value js-instanceSize">M30</dd>\n    </div>\n  </div>\n  <div class="summary-table-row">\n    <div class="summary-table-row-half summary-table-row-half-is-left">\n      <dt class="summary-table-row-title">RAM</dt>\n      <dd class="summary-table-row-value js-RAM">8 GB</dd>\n    </div>\n    <div class="summary-table-row-half summary-table-row-half-is-right">\n      <dt class="summary-table-row-title">Disk Storage</dt>\n      <dd class="summary-table-row-value js-diskSizeGB">40 GB</dd>\n    </div>\n  </div>\n  <div class="summary-table-row">\n    <div class="summary-table-row-half summary-table-row-half-is-left">\n      <dt class="summary-table-row-title">Disk Speed</dt>\n      <dd class="summary-table-row-value js-diskIOPS">\n        120 IOPS\n      </dd>\n    </div>\n    <div class="summary-table-row-half summary-table-row-half-is-right">\n      <dt class="summary-table-row-title">Replication Factor</dt>\n      <dd class="summary-table-row-value js-replicationFactor">3</dd>\n    </div>\n  </div>\n  <div class="summary-table-row-is-last summary-table-row">\n    <div class="summary-table-row-half summary-table-row-half-is-left">\n      <dt class="summary-table-row-title">Backup</dt>\n      <dd class="summary-table-row-value js-backupEnabled">Enabled</dd>\n    </div>\n    <div class="summary-table-row-half summary-table-row-half-is-right">\n      <dt class="summary-table-row-title">Shards</dt>\n      <dd class="summary-table-row-value js-numShards">1</dd>\n    </div>\n  </div>\n  <div class="summary-table-header">Pricing</div>\n  <div class="summary-table-list-row js-pricing-popover" data-content="<div class=\'pricing-estimate-popover\'>Your monthly estimate is <span class=\'pricing-estimate-popover-price\'> $387.62</span><span class=\'pricing-estimate-popover-subscript\'>/mo</span></div>" data-placement="top" data-html="true" data-trigger="hover" data-container="body">\n    <dt class="summary-table-list-row-title">Hourly Cost</dt>\n    <dd class="summary-table-list-row-value">\n      $0.54<span class="summary-table-list-row-subscript">/hr</span>\n    </dd>\n  </div>\n  <div class="summary-table-list-row">\n    <dt class="summary-table-list-row-title">30-day Cost</dt>\n    <dd class="summary-table-list-row-value js-monthlyCostEstimate">\n      $387.62<span class="summary-table-list-row-subscript">/mo</span>\n    </dd>\n  </div>\n  <div class="summary-table-list-row summary-table-list-row">\n    <span>\n      <img class="summary-table-list-row-money-icon" src="/../client/assets/icon-moneytime.svg" />\n    </span>\n    <span class="summary-table-list-row-description">\n      <strong>Pay-as-you-go!</strong> You will be billed hourly and you can terminate your cluster at any time.\n    </span>\n  </div>\n</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UITables);

/***/ }),

/***/ "9jNw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_scroll__ = __webpack_require__("Pt99");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_jsx__ = __webpack_require__("KsGD");
// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================







__webpack_require__("JLpR");
__webpack_require__("5W1q");

var Root = function Root() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], {
    routes: __WEBPACK_IMPORTED_MODULE_3__routes_jsx__["a" /* default */],
    history: __WEBPACK_IMPORTED_MODULE_1_react_router__["hashHistory"],
    render: Object(__WEBPACK_IMPORTED_MODULE_1_react_router__["applyRouterMiddleware"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_router_scroll__["useScroll"])())
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),

/***/ "AX07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
// ==================================================
// DesignSystem - DSWelcome
// ==================================================




var CompassIndex = function CompassIndex() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'row' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'heading' },
        'MongoDB Compass'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12 u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'A collection of UI components specific to MongoDB Compass.'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (CompassIndex);

/***/ }),

/***/ "BQku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
//  DesignSystem - DSBanners
// ==================================================





var UIBanners = function UIBanners() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap button-ui' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Banners'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/banners', className: 'section-header-tab-link' },
              'CSS'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/banners/react-banners', className: 'section-header-tab-link' },
              'React'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Alerts'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Alerts are available in four levels \u2013 success, warning, danger, and info \u2013 and with or without a dismiss button.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Success'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bem-alert bem-alert-is-success' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'bem-alert-close-button', 'aria-label': 'Close' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { 'aria-hidden': 'true' },
              '\xD7'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Well done! You successfully read this important alert message.'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div className="bem-alert bem-alert-is-success">\n    <button type="button" className="bem-alert-close-button" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n    </button>\n    <div>Well done! You successfully read this important alert message.</div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Warning'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bem-alert bem-alert-is-warning' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Warning! Better check yourself before you wreck yourself, you\u2019re not looking good.'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div className="bem-alert bem-alert-is-warning">\n    <div>Warning! Better check yourself before you wreck yourself, you\u2019re not looking good.</div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Danger'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bem-alert bem-alert-is-danger' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Danger! Better check yourself, you\u2019re not looking good.'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div className="bem-alert bem-alert-is-danger">\n    <div>Danger! Better check yourself, you\u2019re not looking good.</div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Info'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bem-alert bem-alert-is-info' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Heads up! This alert needs your attention, but it\u2019s not super important.'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div className="bem-alert bem-alert-is-info">\n    <div>Heads up! This alert needs your attention, but it\u2019s not super important.</div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Status Banners'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Our button styles comes in a variety of flavors including default, primary, destructive and disabled.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Draft'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'banner banner-is-draft' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Information explaining the draft banner notification.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-float-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-text button-is-xs u-mr-3' },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-xs' },
              'Learn More'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="banner banner-is-draft">\n  <p>Information explaining the draft banner notification.</p>\n  <div class="u-float-right">\n    <button class="button button-is-text button-is-xs u-mr-3">Close</button>\n    <button class="button button-is-xs">Learn More</button>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'In Progress'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'banner banner-is-in-progress' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Information explaining the in progress banner notification.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-float-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-text button-is-xs u-mr-3' },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-xs' },
              'Learn More'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="banner banner-is-in-progress">\n  <p>Information explaining the in progress banner notification.</p>\n  <div class="u-float-right">\n    <button class="button button-is-text button-is-xs u-mr-3">Close</button>\n    <button class="button button-is-xs">Learn More</button>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Alert'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'banner banner-is-alert' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Information explaining the alert banner notification.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-float-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-text button-is-xs u-mr-3' },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-xs' },
              'Learn More'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="banner banner-is-alert">\n  <p>Information explaining the alert banner notification.</p>\n  <div class="u-float-right">\n    <button class="button button-is-text button-is-xs u-mr-3">Close</button>\n    <button class="button button-is-xs">Learn More</button>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Success'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'banner banner-is-success' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Information explaining the success banner notification.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-float-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-text button-is-xs u-mr-3' },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-xs' },
              'Learn More'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="banner banner-is-success">\n  <p>Information explaining the success banner notification.</p>\n  <div class="u-float-right">\n    <button class="button button-is-text button-is-xs u-mr-3">Close</button>\n    <button class="button button-is-xs">Learn More</button>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Callout Banners'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Used for calling attention to new products, features, and functionality.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Standard Callout'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'banner banner-is-callout' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Looking for a way to be webscale?'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-float-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-small u-mr-2' },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-primary button-is-small' },
              'Learn How'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="banner banner-is-callout">\n    <p>Looking for a way to be webscale?</p>\n    <div class="u-float-right">\n      <button class="button button-is-small u-mr-2">Close</button>\n      <button class="button button-is-primary">Learn How</button>\n    </div>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Condensed Banner Callout'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'banner banner-is-callout banner-is-condensed' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'Without the bubble label above'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'u-mb-3' },
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-float-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-small u-mr-2' },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-primary button-is-small' },
              'Learn How'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'banner banner-is-callout banner-is-condensed' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'bubble-label bubble-label-blue' },
            'NEW!'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            null,
            'With the bubble label above'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'u-mb-3' },
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'u-float-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-small u-mr-2' },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-primary button-is-small' },
              'Learn How'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="banner banner-is-callout banner-is-condensed">\n  <h4>Without the bubble label above</h4>\n  <p class="u-mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>\n  <div class="u-float-right">\n    <button class="button button-is-small u-mr-2">Close</button>\n    <button class="button button-is-primary button-is-small">Learn How</button>\n  </div>\n</div>\n\n<div class="banner banner-is-callout banner-is-condensed">\n  <div class="bubble-label bubble-label-blue">NEW!</div>\n  <h4>With the bubble label above</h4>\n  <p class="u-mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>\n  <div class="u-float-right">\n    <button class="button button-is-small u-mr-2">Close</button>\n    <button class="button button-is-primary button-is-small">Learn How</button>\n  </div>\n</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIBanners);

/***/ }),

/***/ "BRyp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
//  DesignSystem - DSBubbles
// ==================================================




var UIBubbles = function UIBubbles() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap button-ui' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Bubbles'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Default Bubble Style'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bubble-label bubble-label-gray u-mr-2' },
          '3 Shards'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bubble-label bubble-label-lighter-gray' },
          '5 Nodes'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="bubble-label bubble-label-gray">3 Shards</div>\n<div class="bubble-label bubble-label-lighter-gray">5 Nodes</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'NEW Bubble Style'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bubble-label bubble-label-blue' },
          'NEW!'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="bubble-label bubble-label-blue">NEW!</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIBubbles);

/***/ }),

/***/ "Bdpm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_CopyableCommand_js__ = __webpack_require__("3sIU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_Button_js__ = __webpack_require__("kjwo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__ = __webpack_require__("e0BD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__react_components_Checkbox_js__ = __webpack_require__("ynmW");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var UICopyableCommandReact = function (_React$Component) {
  _inherits(UICopyableCommandReact, _React$Component);

  function UICopyableCommandReact() {
    var _temp, _this, _ret;

    _classCallCheck(this, UICopyableCommandReact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      fullWidth: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UICopyableCommandReact.prototype.render = function render() {
    var _this2 = this;

    var isFullWidth = this.state.fullWidth ? ',\n  fullWidth={true}' : '';
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Code'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'section-header-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/code', className: 'section-header-tab-link' },
                'CSS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab section-header-tab-is-active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/code/react-copyablecommand', className: 'section-header-tab-link' },
                'React'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Code Styles'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Copyable Command'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_CopyableCommand_js__["a" /* default */], {
            copyableText: 'This is a command that you can copy.',
            fullWidth: this.state.fullWidth })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Options'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'State'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__react_components_Checkbox_js__["a" /* default */], {
            label: 'Full Width',
            checked: this.state.fullWidth,
            onChange: function onChange(fullWidth) {
              _this2.setState({ fullWidth: fullWidth });
              setTimeout(function () {
                Prism.highlightAll();
              }, 5);
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-html',
            text: '<CopyableCommand \n  copyableText=\'This is a command that you can copy. It will not break onto the next line since the overflow will keep scrolling horizontally.\'>' + isFullWidth + '\n</CopyableCommand>' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Available Props'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'table' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Prop Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Type'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Description'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'copyableText'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String, Required'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Text rendered as the code snippet'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'otherClasses'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Additional CSS class(es) passed to the parent wrapper'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'children'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Node'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'A collection of child elements of the code snippet'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'fullWidth'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Boolean'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Default = ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'false'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines whether the code snippet expands to take the full width of its parent container'
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  return UICopyableCommandReact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UICopyableCommandReact);

/***/ }),

/***/ "C8B9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modify3.033ce697.mp4";

/***/ }),

/***/ "CHzl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// ==================================================
// NotFound
// ==================================================


// import UIDesignSystem from './ui-design-system/index.jsx';
// const NotFound = () => UIDesignSystem({ children: (<div>404</div>)});

var NotFound = function NotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    '404'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ "D9Q8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modify1.7ebaa15e.mp4";

/***/ }),

/***/ "Dyv9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__ = __webpack_require__("8ssp");
// ==================================================
// DesignSystem - DSColors
// ==================================================




var UIColors = function UIColors() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Design Principles'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'UI Greens'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@green0',
          className: 'green0',
          hex: '#224620'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@green1',
          className: 'green1',
          hex: '#4E8E36'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@green2',
          className: 'green2',
          hex: '#69B241'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@green3',
          className: 'green3',
          hex: '#86C16A'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@green4',
          className: 'green4',
          hex: '#A4D18F'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@green5',
          className: 'green5',
          hex: '#C2E0B4'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@green8',
          className: 'green8',
          hex: '#EFF6EC'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'UI Grays'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray0',
          className: 'gray0',
          hex: '#303434'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray1',
          className: 'gray1',
          hex: '#464c4f'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray2',
          className: 'gray2',
          hex: '#626668'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray3',
          className: 'gray3',
          hex: '#818487'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray4',
          className: 'gray4',
          hex: '#9fa1a2'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray5',
          className: 'gray5',
          hex: '#babdbe'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray6',
          className: 'gray6',
          hex: '#d7dbdb'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray7',
          className: 'gray7',
          hex: '#e8e9e9'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@gray8',
          className: 'gray8',
          hex: '#f5f6f7'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Alert Colors'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@alertOrange',
          className: 'alert-orange',
          hex: '#fbb129'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@alertBlue',
          className: 'alert-blue',
          hex: '#43b1e5'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@alertRed',
          className: 'alert-red',
          hex: '#ef4c4c'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@alertGreen',
          className: 'alert-green',
          hex: '#69B241'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@alertBlueInputDisabled',
          className: 'alert-blue-input-disabled',
          hex: '#C9DBE4'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@alertBlueTextDisabled',
          className: 'alert-blue-text-disabled',
          hex: '#5A869C'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Text Colors'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@linkText',
          className: 'link-text',
          hex: '#006cbc'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@linkTextOnDark',
          className: 'link-text-on-dark',
          hex: '#2898dd'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@warningText',
          className: 'warning-text',
          hex: '#fbb129'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@errorText',
          className: 'error-text',
          hex: '#ef4c4c'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@successText',
          className: 'success-text',
          hex: '#69B241'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@mutedText',
          className: 'muted-text',
          hex: '#9fa1a2'
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-5' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@veryMutedText',
          className: 'very-muted-text',
          hex: '#babdbe'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-4' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_color_chip__["a" /* default */], {
          code: '@subNavText',
          className: 'sub-nav-text',
          hex: '#6f6763'
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIColors);

/***/ }),

/***/ "E9ps":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
// DesignSystem - DSForms
// ==================================================





var UIViewModal = function UIViewModal() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Modals'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/view-modal', className: 'section-header-tab-link' },
              'CSS'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/view-modal/react-view-modal', className: 'section-header-tab-link' },
              'React'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'View Modal'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'The View Modal is a BEM component for the viewAsModal mixin. If you need functionality out of the header or footer that is not supported by the mixin, consider placing the functionality in the body instead and using the markup below:'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { tabIndex: '-1', className: 'view-modal-content view-modal-content-is-small' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { type: 'button', name: 'close', className: 'view-modal-close close', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
        '\xD7'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        { className: 'view-modal-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          { className: 'view-modal-header-title' },
          'Your Title Here'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'view-modal-body' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'footer',
        { className: 'view-modal-footer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'view-modal-actions' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button' },
              'Optional Secondary Action'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button u-mr-2' },
              'Cancel'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-primary' },
              'Confirm'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="view-modal-content view-modal-content-is-small">\n  <button type="button" name="close" class="view-modal-close close" data-dismiss="modal" aria-hidden="true">\xD7</button>\n  <header class="view-modal-header">\n    <h3 class="view-modal-header-title">Your Title Here</h3>\n    <hr></hr>\n  </header>\n  <div class="view-modal-body">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n  </div>\n  <footer class="view-modal-footer">\n    <hr></hr>\n    <div class="view-modal-actions">\n      <div>\n        <button class="button">Optional Secondary Action</button>\n      </div>\n      <div>\n        <button class="button u-mr-2">Cancel</button>\n        <button class="button button-is-primary">Confirm</button>\n      </div>\n    </div>\n  </footer>\n</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIViewModal);

/***/ }),

/***/ "JLpR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KdkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");

function SectionHeader(props) {
    var headlineText = props.headlineText,
        hasBottomSpacing = props.hasBottomSpacing,
        children = props.children;


    return React.createElement(
        'h1',
        {
            className: classNames('section-header-title', {
                'section-header-title-with-bottom-spacing': hasBottomSpacing
            }) },
        React.createElement(
            'span',
            { className: 'section-header-title-text' },
            headlineText
        ),
        children && React.createElement(
            'span',
            { className: 'section-header-title-actions' },
            children
        )
    );
}

SectionHeader.propTypes = {
    headlineText: PropTypes.string.isRequired,
    hasBottomSpacing: PropTypes.bool,
    children: PropTypes.node
};

SectionHeader.defaultProps = {
    children: null,
    hasBottomSpacing: false
};

module.exports = SectionHeader;

/***/ }),

/***/ "KsGD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_layout_index_jsx__ = __webpack_require__("X+lf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_not_found_jsx__ = __webpack_require__("CHzl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_ui_design_system_resources_index_jsx__ = __webpack_require__("UuTD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__site_index_jsx__ = __webpack_require__("kLhi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__site_ui_design_system_index_jsx__ = __webpack_require__("5WeY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__site_ui_design_system_welcome_index_jsx__ = __webpack_require__("sqOS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__site_ui_design_system_welcome_principles_jsx__ = __webpack_require__("i9i8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__site_ui_design_system_base_styles_index_jsx__ = __webpack_require__("na90");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__site_ui_design_system_base_styles_colors_index_jsx__ = __webpack_require__("Dyv9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__site_ui_design_system_base_styles_icons_index_jsx__ = __webpack_require__("Tuc0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__site_ui_design_system_base_styles_typography_index_jsx__ = __webpack_require__("/m+n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__site_ui_design_system_compass_components_index_jsx__ = __webpack_require__("AX07");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__site_ui_design_system_compass_components_query_history_index_jsx__ = __webpack_require__("+Rw1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__site_ui_design_system_components_index_jsx__ = __webpack_require__("8Tkg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__site_ui_design_system_components_banners_index_jsx__ = __webpack_require__("BQku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__site_ui_design_system_components_banners_react_banners_jsx__ = __webpack_require__("c8Ap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__site_ui_design_system_components_buttons_index_jsx__ = __webpack_require__("O2WA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__site_ui_design_system_components_buttons_react_buttons_jsx__ = __webpack_require__("NnzM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__site_ui_design_system_components_code_index_jsx__ = __webpack_require__("uCbW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__site_ui_design_system_components_code_react_copyablecommand_jsx__ = __webpack_require__("Bdpm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__site_ui_design_system_components_bubbles_index_jsx__ = __webpack_require__("BRyp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__site_ui_design_system_components_forms_index_jsx__ = __webpack_require__("dZmM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__site_ui_design_system_components_rich_forms_index_jsx__ = __webpack_require__("lhwQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__site_ui_design_system_components_layouts_index_jsx__ = __webpack_require__("rZiR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__site_ui_design_system_components_layouts_react_layouts_jsx__ = __webpack_require__("LCz2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__site_ui_design_system_components_lists_index_jsx__ = __webpack_require__("XBP8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__site_ui_design_system_components_tabs_index_jsx__ = __webpack_require__("clJE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__site_ui_design_system_components_tabs_react_tabs_jsx__ = __webpack_require__("Vok7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__site_ui_design_system_components_tables_index_jsx__ = __webpack_require__("97qb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__site_ui_design_system_components_tables_react_tables_jsx__ = __webpack_require__("XOgp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__site_ui_design_system_components_view_modal_index_jsx__ = __webpack_require__("E9ps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__site_ui_design_system_components_view_modal_react_view_modal_jsx__ = __webpack_require__("pq9a");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__site_ui_design_system_guidelines_index_jsx__ = __webpack_require__("z+MQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__site_ui_design_system_guidelines_grid_index_jsx__ = __webpack_require__("/LLj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__site_ui_design_system_guidelines_modify_index_jsx__ = __webpack_require__("Ur7R");













//Base Styles





//Compass Components



//Components




















//Guidelines




var routes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
  { path: '/ui-design-system', component: __WEBPACK_IMPORTED_MODULE_2__site_layout_index_jsx__["a" /* default */] },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_6__site_ui_design_system_index_jsx__["a" /* default */] }),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { path: '/', component: __WEBPACK_IMPORTED_MODULE_5__site_index_jsx__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_5__site_index_jsx__["a" /* default */] })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { path: '/', component: __WEBPACK_IMPORTED_MODULE_6__site_ui_design_system_index_jsx__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/welcome', component: __WEBPACK_IMPORTED_MODULE_7__site_ui_design_system_welcome_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/principles', component: __WEBPACK_IMPORTED_MODULE_8__site_ui_design_system_welcome_principles_jsx__["a" /* default */] }),
    '//Base Styles',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/base-styles', component: __WEBPACK_IMPORTED_MODULE_9__site_ui_design_system_base_styles_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/base-styles/colors', component: __WEBPACK_IMPORTED_MODULE_10__site_ui_design_system_base_styles_colors_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/base-styles/icons', component: __WEBPACK_IMPORTED_MODULE_11__site_ui_design_system_base_styles_icons_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/base-styles/typography', component: __WEBPACK_IMPORTED_MODULE_12__site_ui_design_system_base_styles_typography_index_jsx__["a" /* default */] }),
    '//Compass Components',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/compass-components', component: __WEBPACK_IMPORTED_MODULE_13__site_ui_design_system_compass_components_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/compass-components/query-history', component: __WEBPACK_IMPORTED_MODULE_14__site_ui_design_system_compass_components_query_history_index_jsx__["a" /* default */] }),
    '//Components',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components', component: __WEBPACK_IMPORTED_MODULE_15__site_ui_design_system_components_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/code', component: __WEBPACK_IMPORTED_MODULE_20__site_ui_design_system_components_code_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/code/react-copyablecommand', component: __WEBPACK_IMPORTED_MODULE_21__site_ui_design_system_components_code_react_copyablecommand_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/banners', component: __WEBPACK_IMPORTED_MODULE_16__site_ui_design_system_components_banners_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/banners/react-banners', component: __WEBPACK_IMPORTED_MODULE_17__site_ui_design_system_components_banners_react_banners_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/bubbles', component: __WEBPACK_IMPORTED_MODULE_22__site_ui_design_system_components_bubbles_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/buttons', component: __WEBPACK_IMPORTED_MODULE_18__site_ui_design_system_components_buttons_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/buttons/react-buttons', component: __WEBPACK_IMPORTED_MODULE_19__site_ui_design_system_components_buttons_react_buttons_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/code', component: __WEBPACK_IMPORTED_MODULE_20__site_ui_design_system_components_code_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/code/react-copyablecommand', component: __WEBPACK_IMPORTED_MODULE_21__site_ui_design_system_components_code_react_copyablecommand_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/forms', component: __WEBPACK_IMPORTED_MODULE_23__site_ui_design_system_components_forms_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/rich-forms', component: __WEBPACK_IMPORTED_MODULE_24__site_ui_design_system_components_rich_forms_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/layouts', component: __WEBPACK_IMPORTED_MODULE_25__site_ui_design_system_components_layouts_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/layouts/react-layouts', component: __WEBPACK_IMPORTED_MODULE_26__site_ui_design_system_components_layouts_react_layouts_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/lists', component: __WEBPACK_IMPORTED_MODULE_27__site_ui_design_system_components_lists_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/tabs', component: __WEBPACK_IMPORTED_MODULE_28__site_ui_design_system_components_tabs_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/tabs/react-tabs', component: __WEBPACK_IMPORTED_MODULE_29__site_ui_design_system_components_tabs_react_tabs_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/tables', component: __WEBPACK_IMPORTED_MODULE_30__site_ui_design_system_components_tables_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/tables/react-tables', component: __WEBPACK_IMPORTED_MODULE_31__site_ui_design_system_components_tables_react_tables_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/view-modal', component: __WEBPACK_IMPORTED_MODULE_32__site_ui_design_system_components_view_modal_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/components/view-modal/react-view-modal', component: __WEBPACK_IMPORTED_MODULE_33__site_ui_design_system_components_view_modal_react_view_modal_jsx__["a" /* default */] }),
    '//Guidelines',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/guidelines', component: __WEBPACK_IMPORTED_MODULE_34__site_ui_design_system_guidelines_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/guidelines/grid', component: __WEBPACK_IMPORTED_MODULE_35__site_ui_design_system_guidelines_grid_index_jsx__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/guidelines/modify', component: __WEBPACK_IMPORTED_MODULE_36__site_ui_design_system_guidelines_modify_index_jsx__["a" /* default */] }),
    '//Misc',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/ui-design-system/resources', component: __WEBPACK_IMPORTED_MODULE_4__site_ui_design_system_resources_index_jsx__["a" /* default */] })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '*', component: __WEBPACK_IMPORTED_MODULE_3__site_not_found_jsx__["a" /* default */] })
);

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "LCz2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Button_js__ = __webpack_require__("kjwo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_SplashView_js__ = __webpack_require__("bu9Z");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var UILayoutsReact = function (_React$Component) {
  _inherits(UILayoutsReact, _React$Component);

  function UILayoutsReact() {
    _classCallCheck(this, UILayoutsReact);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  UILayoutsReact.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Layouts'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'section-header-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/layouts', className: 'section-header-tab-link' },
                'CSS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab section-header-tab-is-active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/layouts/react-layouts', className: 'section-header-tab-link' },
                'React'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Zero States'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Empty State'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__react_components_SplashView_js__["a" /* default */],
            {
              graphic: null,
              headlineText: 'Enter your empty view placeholder text here.' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default.a, {
              label: 'Do Something',
              className: 'button-is-primary button-is-large',
              onClick: function onClick() {
                return null;
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-html',
            text: '<SplashView \n  graphic={null}\n  headlineText="Enter your empty view placeholder text here.">\n  <Button\n    label="Do Something"\n    className="button-is-primary button-is-large"\n  />\n</SplashView>' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Loading State'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_SplashView_js__["a" /* default */], { headlineText: 'Retrieving list of databases and collections...', isLoading: true })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-html',
            text: '<SplashView headlineText="Retrieving list of databases and collections..." isLoading />' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Error State'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__react_components_SplashView_js__["a" /* default */],
            { headlineText: 'Write something about what they did wrong here.', isError: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default.a, {
              label: 'Do Something Else',
              className: 'button-is-large',
              onClick: function onClick() {
                return null;
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-html',
            text: '<SplashView headlineText="Write something about what they did wrong here." isError >\n  <Button\n    label="Do Something Else"\n    className="button-is-large"\n  />\n</SplashView>' })
        )
      )
    );
  };

  return UILayoutsReact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UILayoutsReact);

/***/ }),

/***/ "LQIX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = __webpack_require__("rdLu");
var React = __webpack_require__("U7vG");
var PureComponent = React.PureComponent;

var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");

var CellHeader = (_temp = _class = function (_PureComponent) {
    _inherits(CellHeader, _PureComponent);

    function CellHeader() {
        _classCallCheck(this, CellHeader);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    CellHeader.prototype.render = function render() {
        var _props = this.props,
            sortable = _props.sortable,
            children = _props.children,
            sortOrder = _props.sortOrder,
            onClick = _props.onClick,
            className = _props.className;


        return React.createElement(
            'th',
            { className: className },
            sortable ? React.createElement(
                'a',
                {
                    role: 'button',
                    tabIndex: 0,
                    onClick: onClick,
                    className: classNames('table-header-is-sortable', {
                        'table-header-is-descending': sortOrder === 'descending',
                        'table-header-is-ascending': sortOrder === 'ascending'
                    })
                },
                children
            ) : children
        );
    };

    return CellHeader;
}(PureComponent), _class.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    sortable: PropTypes.bool,
    sortOrder: PropTypes.oneOf(['ascending', 'descending'])
}, _class.defaultProps = {
    children: null,
    className: '',
    sortable: false,
    sortOrder: undefined,
    onClick: _.noop
}, _temp);


module.exports = CellHeader;

/***/ }),

/***/ "N4Za":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var Component = React.Component;

var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");

var KeyCodes = {
    Escape: 27
};

var ModalFooter = function ModalFooter(_ref) {
    var children = _ref.children;
    return React.createElement(
        'footer',
        { className: 'view-modal-footer' },
        React.createElement('hr', null),
        React.createElement(
            'div',
            { className: 'view-modal-actions' },
            React.createElement('div', null),
            React.createElement(
                'div',
                null,
                children
            )
        )
    );
};

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired
};

var Modal = (_temp2 = _class = function (_Component) {
    _inherits(Modal, _Component);

    function Modal() {
        var _temp, _this, _ret;

        _classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onDocumentClick = function (e) {
            if (!_this.modalContent) {
                return;
            }

            // Don't handle this global click if the click originates from within
            // the modal content element itself.
            if (_this.modalContent.contains(e.target)) {
                return;
            }

            _this.props.onClose();
        }, _this.onDocumentKeydown = function (e) {
            if (_this.props.open && e.keyCode === KeyCodes.Escape) {
                _this.props.onClose();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Modal.prototype.componentDidMount = function componentDidMount() {
        if (this.props.open) {
            this.addGlobalHandlers();
        }
    };

    Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
            if (this.props.open) {
                this.addGlobalHandlers();
            } else {
                this.removeGlobalHandlers();
            }
        }
    };

    Modal.prototype.componentWillUnmount = function componentWillUnmount() {
        this.removeGlobalHandlers();
    };

    Modal.prototype.addGlobalHandlers = function addGlobalHandlers() {
        // Create a global event handler. This is used to listen for when a user clicks
        // anywhere on the page, so we can close the dropdown if it is open.
        // Allows for better UX.
        document.addEventListener('click', this.onDocumentClick, true);

        document.addEventListener('keydown', this.onDocumentKeydown, true);
    };

    Modal.prototype.removeGlobalHandlers = function removeGlobalHandlers() {
        document.removeEventListener('click', this.onDocumentClick, true);
        document.removeEventListener('keydown', this.onDocumentKeydown, true);
    };

    Modal.prototype.render = function render() {
        var _this2 = this,
            _classNames;

        var _props = this.props,
            open = _props.open,
            title = _props.title,
            children = _props.children,
            hideClose = _props.hideClose,
            onClose = _props.onClose,
            onBack = _props.onBack,
            size = _props.size;


        if (!open) {
            return null;
        }

        return React.createElement(
            'div',
            null,
            React.createElement('div', { className: 'view-modal-overlay' }),
            React.createElement(
                'div',
                { className: 'view-modal-layout' },
                React.createElement(
                    'div',
                    {
                        ref: function ref(r) {
                            _this2.modalContent = r;
                        },
                        tabIndex: '-1',
                        className: classNames('view-modal-content', (_classNames = {}, _classNames['view-modal-content-is-' + size] = size, _classNames))
                    },
                    hideClose || React.createElement(
                        'button',
                        {
                            type: 'button',
                            name: 'close',
                            className: 'view-modal-close close',
                            onClick: onClose,
                            'data-dismiss': 'modal',
                            'aria-hidden': 'true'
                        },
                        '\xD7'
                    ),
                    title && React.createElement(
                        'header',
                        { className: 'view-modal-header' },
                        onBack && React.createElement(
                            'a',
                            { className: 'view-modal-back view-modal-back-is-high', tabIndex: '0', role: 'button', onClick: onBack },
                            React.createElement('i', { className: 'mms-icon-back' }),
                            ' Back'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'view-modal-header-title' },
                            title
                        ),
                        React.createElement('hr', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'view-modal-body' },
                        children
                    )
                )
            )
        );
    };

    return Modal;
}(Component), _class.ModalFooter = ModalFooter, _class.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(['xs', 'small', 'medium', 'large', 'xlarge']),
    hideClose: PropTypes.bool,
    onClose: PropTypes.func,
    onBack: PropTypes.func
}, _class.defaultProps = {
    open: true,
    children: undefined,
    title: undefined,
    size: undefined,
    hideClose: false,
    onClose: function onClose() {},
    onBack: undefined
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ "NnzM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Button_js__ = __webpack_require__("kjwo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_ButtonGroup_js__ = __webpack_require__("PE2N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_ButtonGroup_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__react_components_ButtonGroup_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__react_components_Checkbox_js__ = __webpack_require__("ynmW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__react_components_RadioGroup_js__ = __webpack_require__("e0BD");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==================================================
//  DesignSystem - DSButtons
// ==================================================








var Prism = __webpack_require__("OEdS");

var buttonPairing = [['', 'Default Button'], ['button-is-primary', 'Primary Button'], ['button-is-info', 'Outline Button'], ['button-is-danger', 'Danger Button'], ['button-is-default-inverse', 'Dark Button']];
var buttonMap = new Map(buttonPairing);

var UIButtonsReact = function (_React$Component) {
  _inherits(UIButtonsReact, _React$Component);

  function UIButtonsReact() {
    var _temp, _this, _ret;

    _classCallCheck(this, UIButtonsReact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      controlDisabled: false,
      controlTypeClassName: "",
      controlLabel: "Default Button",
      selected: 'Topology'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UIButtonsReact.prototype.codeSnippetHandler = function codeSnippetHandler() {
    var disabled = this.state.controlDisabled ? ',\n  disabled={true}' : '';
    var className = this.state.controlTypeClassName ? ' ' + this.state.controlTypeClassName : '';
    return '<Button\n  label="' + this.state.controlLabel + '",\n  className="button' + className + '"' + disabled + '\n/>';
  };

  UIButtonsReact.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap button-ui' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Buttons'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'section-header-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/buttons', className: 'section-header-tab-link' },
                'CSS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab section-header-tab-is-active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/buttons/react-buttons', className: 'section-header-tab-link' },
                'React'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Button Component'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Our button component can be configured in a variety of flavors including default, primary, destructive and disabled.'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default.a, {
            label: this.state.controlLabel,
            className: this.state.controlTypeClassName,
            disabled: this.state.controlDisabled,
            onClick: function onClick() {
              return null;
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Options'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'Type'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__react_components_RadioGroup_js__["b" /* RadioGroup */],
            {
              name: 'button-state',
              selectedValue: this.state.controlTypeClassName,
              onChange: function onChange(controlTypeClassName, controlLabel) {
                _this2.setState({ controlTypeClassName: controlTypeClassName });
                _this2.setState({ controlLabel: buttonMap.get(controlTypeClassName) });
                setTimeout(function () {
                  Prism.highlightAll();
                }, 5);
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__react_components_RadioGroup_js__["a" /* Radio */], { value: '', id: 'type-default', checked: true }),
              ' Default'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__react_components_RadioGroup_js__["a" /* Radio */], { value: 'button-is-primary', id: 'type-primary' }),
              ' Primary'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__react_components_RadioGroup_js__["a" /* Radio */], { value: 'button-is-info', id: 'type-outline' }),
              ' Outline'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__react_components_RadioGroup_js__["a" /* Radio */], { value: 'button-is-danger', id: 'type-danger' }),
              ' Danger'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__react_components_RadioGroup_js__["a" /* Radio */], { value: 'button-is-default-inverse', id: 'type-dark' }),
              ' Dark'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'state'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_Checkbox_js__["a" /* default */], {
            label: 'Disabled',
            checked: this.state.controlDisabled,
            onChange: function onChange(controlDisabled) {
              _this2.setState({ controlDisabled: controlDisabled });
              setTimeout(function () {
                Prism.highlightAll();
              }, 5);
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-jsx',
            text: this.codeSnippetHandler() })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Available Props'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'table' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Prop Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Type'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Description'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'onClick'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Function, Required'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Click event handler'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'className'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'CSS class(es) passed to the button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'name'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the name reference of the button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'label'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Node'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Text rendered in the body of the button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'children'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Node'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'A collection of child elements of the button. Can be used in place of the label prop'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'value'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the default value of the button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'disabled'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Boolean'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Default = ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'false'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the disabled state of the button'
                  )
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Button Group Component'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_ButtonGroup_js___default.a, {
            buttonClassName: 'button-is-xs',
            options: [{
              label: 'Topology',
              iconClassName: 'fa fa-bars',
              value: 'Topology'
            }, {
              label: 'List',
              iconClassName: 'fa fa-list',
              value: 'List'
            }],
            value: this.state.selected,
            onChange: function onChange(newValue) {
              _this2.setState({ selected: newValue });
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-jsx',
            text: '<ButtonGroup\n  buttonClassName="button-is-xs"\n  options={[\n    {\n      label: \'Topology\',\n      iconClassName: \'fa fa-bars\',\n      value: \'Topology\'\n    },\n    {\n      label: \'List\',\n      iconClassName: \'fa fa-list\',\n      value: \'List\'\n    }\n  ]}\n  value={this.state.selected}\n  onChange={(newValue) => {\n    this.setState({ selected: newValue });\n  }}\n/>' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Available Props'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'table' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Prop Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Type'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Description'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'onChange'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Function, Required'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Click event handler'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'label'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Text rendered in the body of the button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'value'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String, Required'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the default value of the button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'iconClassName'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Icon(s) using Font-Awesome class'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'buttonClassName'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'string'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'CSS class(es) passed to the button'
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  return UIButtonsReact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UIButtonsReact);

/***/ }),

/***/ "O2WA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
//  DesignSystem - DSButtons
// ==================================================





var UIButtons = function UIButtons() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap button-ui' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Buttons'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/buttons', className: 'section-header-tab-link' },
              'CSS'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/buttons/react-buttons', className: 'section-header-tab-link' },
              'React'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Button Styles'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Our button styles comes in a variety of flavors including default, primary, destructive and disabled.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button u-mr-2' },
          'Default Button'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-primary u-mr-2' },
          'Primary Button'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-danger u-mr-2' },
          'Destructive Button'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button', disabled: true },
          'Disabled Button'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<button class="button">Default Button</button>\n<button class="button button-is-primary">Primary Button</button>\n<button class="button button-is-danger">Destructive Button</button>\n<button class="button" disabled>Disabled Button</button>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Dark Background'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Use the darker button when placed on a dark background.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-default-inverse u-mr-2' },
          'Darker Button'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pre',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'code',
            { className: 'language-html hljs xml', 'data-lang': 'html' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              '<button class="button button-is-default-inverse">Darker Button</button>'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'With Ellipsis Icons'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'button button-has-ellipsis-only u-mr-2' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'button button-has-ellipsis-only button-is-small u-mr-2' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'button button-has-ellipsis-only button-is-xs u-mr-2' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<button class="button button-has-ellipsis-only"></button>\n<button class="button button-has-ellipsis-only button-is-small"></button>\n<button class="button button-has-ellipsis-only button-is-xs"></button>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Button Sizes'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Our buttons can be displayed as four different sizes.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-xs u-mr-2' },
          'Extra Small'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-small u-mr-2' },
          'Small Button'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button u-mr-2' },
          'Normal Button'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-large u-mr-2' },
          'Large Button'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-full' },
          'Full Width Button'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<button class="button button-is-xs">Extra Small</button>\n<button class="button button-is-small">Small Button</button>\n<button class="button">Normal Button</button>\n<button class="button button-is-large">Large Button</button>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Button Groups'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Our buttons can be displayed as four different sizes.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'button-group u-mr-2' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button-group-button button button-is-xs' },
            'First'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button-group-button button button-is-xs' },
            'Last'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'button-group' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button-group-button button button-is-xs' },
            'First'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button-group-button button button-is-xs' },
            'Middle'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button-group-button button button-is-xs' },
            'Last'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="button-group">\n  <button class="button-group-button button button-is-xs">First</button>\n  <button class="button-group-button button button-is-xs">Last</button>\n</div>\n<div class="button-group">\n  <button class="button-group-button button button-is-xs">First</button>\n  <button class="button-group-button button button-is-xs">Middle</button>\n  <button class="button-group-button button button-is-xs">Last</button>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Links'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'link' },
          'This is a normal styled link'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'link link-is-underlined' },
          'This link is always underlined, even when not hovering'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'link link-on-dark' },
          'This link is brighter, to be used against a blue background'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'link link-is-disabled' },
          'This link is disabled, which prevents click and hover events like tooltips'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<a class="link">This is a normal styled link</a><br></br>\n<a class="link link-is-underlined">This link is always underlined, even when not hovering</a><br></br>\n<a class="link link-on-dark">This link is brighter, to be used against a blue background</a><br></br>\n<a class="link link-is-disabled">This link is disabled, which prevents click and hover events like tooltips</a>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIButtons);

/***/ }),

/***/ "PE2N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");

function ButtonGroup(props) {
    var options = props.options,
        buttonClassName = props.buttonClassName,
        selectedValue = props.value,
        onChange = props.onChange;


    return React.createElement(
        'span',
        null,
        React.createElement(
            'div',
            {
                className: 'button-group'
            },
            options.map(function (option) {
                var label = option.label,
                    iconClassName = option.iconClassName,
                    value = option.value;

                return React.createElement(
                    'button',
                    {
                        key: value,
                        onClick: function onClick() {
                            return onChange(value);
                        },
                        className: classNames('button', 'button-group-button', buttonClassName, {
                            'button-is-active': value === selectedValue
                        })
                    },
                    iconClassName && React.createElement('i', {
                        className: classNames(iconClassName, 'button-left-icon'),
                        'aria-hidden': true }),
                    label
                );
            })
        )
    );
}

ButtonGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string.isRequired,
        iconClassName: PropTypes.string
    })).isRequired,
    buttonClassName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

ButtonGroup.defaultProps = {
    options: [],
    buttonClassName: ''
};

module.exports = ButtonGroup;

/***/ }),

/***/ "Pk+t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_themes_prism_css__ = __webpack_require__("0BLv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs_themes_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs_themes_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_site_mongodb_prism_less__ = __webpack_require__("Wp9I");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_site_mongodb_prism_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_site_mongodb_prism_less__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var Prism = __webpack_require__("OEdS");
__webpack_require__("DTmK");



var Code = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code(props) {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  Code.prototype.componentDidMount = function componentDidMount() {
    Prism.highlightAll();
  };

  Code.prototype.render = function render() {
    return React.createElement(
      'pre',
      null,
      React.createElement(
        'code',
        { className: this.props.language },
        this.props.text
      )
    );
  };

  return Code;
}(React.Component);

Code.propTypes = {
  text: PropTypes.string,
  language: PropTypes.string
};

/* harmony default export */ __webpack_exports__["a"] = (Code);

/***/ }),

/***/ "SZMO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");

function SplashViewGraphic(props) {
    var fallback = props.fallback,
        isError = props.isError,
        isLoading = props.isLoading;


    if (isError) {
        return React.createElement(
            'div',
            { className: 'empty-view-graphic' },
            React.createElement('i', { className: 'fa fa-4x fa-exclamation-triangle empty-view-icon' }),
            React.createElement(
                'svg',
                { className: 'empty-view-shadow empty-view-shadow-is-error' },
                React.createElement('ellipse', { cx: '50%', cy: '50%', rx: '50%', ry: '50%' })
            )
        );
    }

    if (isLoading) {
        return React.createElement(
            'div',
            { className: 'empty-view-graphic' },
            React.createElement('i', { className: 'mms-icon-continuous empty-view-icon empty-view-icon-is-rotating' }),
            React.createElement(
                'svg',
                { className: 'empty-view-shadow' },
                React.createElement('ellipse', { cx: '50%', cy: '50%', rx: '50%', ry: '50%' })
            )
        );
    }

    return fallback;
}

SplashViewGraphic.propTypes = {
    fallback: PropTypes.node,
    isError: PropTypes.bool,
    isLoading: PropTypes.bool
};

SplashViewGraphic.defaultProps = {
    fallback: null,
    isError: false,
    isLoading: false
};

/* harmony default export */ __webpack_exports__["default"] = (SplashViewGraphic);

/***/ }),

/***/ "Tuc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// ==================================================
// DesignSystem - DSIcons
// ==================================================



var UIIcons = function UIIcons() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "wrap" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h1",
      { className: "heading" },
      "Icons"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "p",
      null,
      "We use several sets of icons in our products, including Google\u2019s Material Design and Font Awesome, as well as icons developed internally for MongoDB-specific terminolgy."
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h2",
      null,
      "MongoDB Cloud Services"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      null,
      "Agents"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "table",
      { className: "icons-table" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "thead",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Name"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Icon"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Add"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Edit"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Remove"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Restart"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "tbody",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Monitoring"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-monitoring" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-monitoring-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-monitoring-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-monitoring-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-monitoring-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Backup"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-backup" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-backup-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-backup-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-backup-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-backup-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Automation"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-automation" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-automation-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-automation-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-automation-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-automation-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      null,
      "Deployment Items"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "table",
      { className: "icons-table" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "thead",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Name"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Icon"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Add"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Edit"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Remove"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Restart"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "tbody",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Standalone"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-standalone" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-standalone-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-standalone-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-standalone-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-standalone-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Replica Set"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-replica-set" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-replica-set-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-replica-set-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-replica-set-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-replica-set-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Cluster"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-cluster" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-cluster-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-cluster-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-cluster-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-cluster-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "MongoS"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-mongos" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-mongos-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-mongos-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-mongos-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-mongos-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      null,
      "Replica Set Members"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "table",
      { className: "icons-table" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "thead",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Name"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Icon"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Selected"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Add"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Edit"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Remove"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Restart"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "tbody",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Primary"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-primary" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-primary-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-primary-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-primary-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-primary-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-primary-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Secondary"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-secondary" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-secondary-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-secondary-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-secondary-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-secondary-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-secondary-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Arbiter"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-arbiter" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-arbiter-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-arbiter-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-arbiter-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-arbiter-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-arbiter-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Hidden"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-hidden-s" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-hidden-s-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-hidden-s-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-hidden-s-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-hidden-s-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-hidden-s-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Delayed"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-delayed" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-delayed-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-delayed-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-delayed-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-delayed-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-delayed-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "No State"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-nostate" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-nostate-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-nostate-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-nostate-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-nostate-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Startup"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-startup" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-startup-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-startup-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-startup-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-startup-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-startup-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Startup2"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-startup2" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-startup2-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Recovering"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-recovering" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-recovering-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-recovering-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-recovering-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-recovering-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-recovering-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Rollback"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-rollback" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-rollback-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-rollback-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-rollback-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-rollback-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-rollback-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Down"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-down" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-down-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-down-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-down-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-down-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-down-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Fatal"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-fatal" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-fatal-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-fatal-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-fatal-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-fatal-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-fatal-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Shunned"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-shunned" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-shunned-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-shunned-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-shunned-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-shunned-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-shunned-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Unknown"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-unknown" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-unknown-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-unknown-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-unknown-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-unknown-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-unknown-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      null,
      "Config Server Replica Sets"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "table",
      { className: "icons-table" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "thead",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "th",
          { className: "icons-table-header" },
          "Name"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "th",
          { className: "icons-table-header" },
          "Icon"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "th",
          { className: "icons-table-header" },
          "Selected"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "th",
          { className: "icons-table-header" },
          "Add"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "th",
          { className: "icons-table-header" },
          "Edit"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "th",
          { className: "icons-table-header" },
          "Remove"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "th",
          { className: "icons-table-header" },
          "Restart"
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "tbody",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Primary Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-primary" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-primary" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-primary-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-primary-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-primary-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-primary-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Secondary Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-secondary" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-secondary-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-secondary-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-secondary-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-secondary-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-secondary-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Arbiter Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-arbiter" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-arbiter-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-arbiter-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-arbiter-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-arbiter-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-arbiter-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Hidden Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-hidden" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-hidden-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-hidden-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-hidden-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-hidden-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-hidden-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Delayed Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-delayed" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-delayed-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-delayed-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-delayed-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-delayed-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-delayed-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "No State Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-nostate" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-nostate-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-nostate-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-nostate-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-nostate-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Startup Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-startup" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-startup-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-startup-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-startup-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-startup-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-startup-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Startup2 Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-startup2" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-startup2-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Recovering Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-recovering" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-recovering-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-recovering-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-recovering-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-recovering-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-recovering-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Rollback Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-rollback" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-rollback-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-rollback-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-rollback-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-rollback-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-rollback-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Down Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-down" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-down-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-down-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-down-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-down-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-down-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Fatal Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-fatal" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-fatal-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-fatal-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-fatal-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-fatal-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-fatal-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Shunned Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-shunned" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-shunned-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-shunned-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-shunned-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-shunned-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-shunned-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Unknown Config"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-unknown" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-configsvr-unknown-selected" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-unknown-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-unknown-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-unknown-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-configsvr-unknown-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      null,
      "Other Managed Features"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "table",
      { className: "icons-table" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "thead",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Name"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Icon"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Add"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Edit"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Remove"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Manual Mode"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "th",
            { className: "icons-table-header" },
            "Restart"
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "tbody",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Project"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-group" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-group-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-group-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-group-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-group-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "User"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-user" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-user-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-user-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-user-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-user-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Role"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-role" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-role-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-role-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-role-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-role-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "MongoDB Version"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-leaf" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-leaf-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-leaf-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-leaf-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-leaf-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Server"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-server" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-server-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-server-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-server-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell muted" },
            "N/A"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-server-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-header" },
            "Automation Wrench"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-wrench" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-wrench-add" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-wrench-edit" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-wrench-remove" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-wrench-exclamation" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              { className: "mms-icon-wrench-restart" },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null)
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "h3",
      null,
      "Misc UI"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "table",
      { className: "icons-table" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "tbody",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-dragtopleft" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-bell" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-list" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-topology" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-cloud" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-lock" })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-laptop" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-office" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-floppy" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-support1" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-support2" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-add" })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-remove" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-check" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-creditcard" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-graph" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-api" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-2fa" })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-smartphone" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-continuous" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-pointintime" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-hammer" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-edit" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-umbrella" })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-ellipsis" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-dragleft" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-list-skinny" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-grid" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-ssl" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-auth" })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-database" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-databases" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-servers" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-server" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-dashboard" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-setup" })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-settings" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-activity" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-ops-manager" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-addcenter" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-modify" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-metrics" })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "tr",
          { className: "icons-table-row" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-back" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-surprisedface" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-sadface" })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "td",
            { className: "icons-table-column icons-table-cell" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "mms-icon-deadface" })
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIIcons);

/***/ }),

/***/ "Ur7R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_root_less__ = __webpack_require__("JLpR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_root_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_root_less__);
// ==================================================
// DesignSystem - UIModify
// ==================================================



var modPattern1 = __webpack_require__("D9Q8");
var modPattern2 = __webpack_require__("cNyB");
var modPattern3 = __webpack_require__("C8B9");
var modPattern4 = __webpack_require__("l6zV");
var modPattern5 = __webpack_require__("XjR5");

var UIModify = function UIModify() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap guidelines-modify' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'heading' },
      'Modifying Elements'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      { className: 'u-mt-6' },
      'Client-Side Application Data'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'We encounter fewer performance concerns when modifying client-side application data than we do with MongoDB infrastructure, so these modification patterns are less precautionary and more straightforward.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      null,
      'Change Instantly'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          { className: 'guidelines-video u-mb-4', controls: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: modPattern1, type: 'video/mp4' }),
          'I\'m sorry; your browser doesn\'t support HTML5 video.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'In this pattern, information is modified and committed at once, without additional views or actions. It\'s most appropriate for small changes.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: 'u-mt-6' },
          'When to use'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'To modify an inline element'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Presentation layer matches complexity of configurable options.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Example: a MongoDB Charts chart title'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      null,
      'Commit Changes'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          { className: 'guidelines-video u-mb-4', controls: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: modPattern2, type: 'video/mp4' }),
          'I\'m sorry; your browser doesn\'t support HTML5 video.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'In this pattern, committing changes require an additional action, like Save. Users are warned if changes they made are about to be lost.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: 'u-mt-6' },
          'When to use'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Parent container with any number of inline child elements'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Presentation matches complexity of configurable options'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Example: settings form in MongoDB Cloud'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      { className: 'u-mt-6' },
      'MongoDB Data and Infrastructure'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Modifying MongoDB data and infrastructure can have greater performance concerns, so these patterns aim to manage complexity and progressively disclose precise changes. We recommend that a container should map directly to a single MongoDB concept as described in our documentation.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'If application behavior and status information is competing with MongoDB behavior and status information, choose in favor of application concepts wherever possible.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      null,
      'Commit Changes on Object'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          { className: 'guidelines-video', controls: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: modPattern3, type: 'video/mp4' }),
          'I\'m sorry; your browser doesn\'t support HTML5 video.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'In this pattern, multiple inline changes can be made individually, but committing them is done from the parent container level.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: 'u-mt-6' },
          'When to use'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Parent container with any number of inline child elements'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Presentation layer matches complexity of configurable options'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Example: Compass Document CRUD'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h3',
      null,
      'Modify in Separate Layer'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          { className: 'guidelines-video', controls: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: modPattern4, type: 'video/mp4' }),
          'I\'m sorry; your browser doesn\'t support HTML5 video.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'In this pattern, modifications are made on a modification layer separate from the presentation layer. On the modification layer, changes are committed from the parent container.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: 'u-mt-6' },
          'When to use'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Presentation layer obfuscates complexity of configurable options'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Example: Atlas clusters'
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIModify);

/***/ }),

/***/ "UuTD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_root_less__ = __webpack_require__("JLpR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_root_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_root_less__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==================================================
// Resources
// ==================================================




var client = new stitch.StitchClient('mdb-design-site-apis-wpxcw');

var Resources = function (_React$Component) {
  _inherits(Resources, _React$Component);

  function Resources() {
    var _temp, _this, _ret;

    _classCallCheck(this, Resources);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      coreLastUpdated: '',
      compassLastUpdated: '',
      cloudLastUpdated: '',
      stitchLastUpdated: '',
      universityLastUpdated: ''

      // Fetch last commit dates for each sketch file
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Resources.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var files = ["_mongodb-core.sketch", "_compass-template-1.7.sketch", "_cloud-template.sketch", "_stitch-template.sketch", "_university-template-1.2.sketch"];
    var statePairing = [["_mongodb-core.sketch", "coreLastUpdated"], ["_compass-template-1.7.sketch", "compassLastUpdated"], ["_cloud-template.sketch", "cloudLastUpdated"], ["_stitch-template.sketch", "stitchLastUpdated"], ["_university-template-1.2.sketch", "universityLastUpdated"]];
    var stateMap = new Map(statePairing);

    client.login().then(function () {
      client.executeFunction("fetchLastUpdated").then(function (result) {
        result.http_result.forEach(function (item) {
          var _this2$setState;

          var item_json = JSON.parse(item.response.body.toString());
          var updatedDate = item_json.data.repository.ref.target.history.edges[0].node.committedDate.split('T')[0];
          var file = item.file;
          var fileState = stateMap.get(file);

          _this2.setState((_this2$setState = {}, _this2$setState[fileState] = updatedDate, _this2$setState));
        });
      });
    });
  };

  Resources.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: 'heading' },
            'Resources'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'heading' },
            'Sketch Templates'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'table' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Filename'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Description'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Last Updated'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'https://github.com/leafygreen/sketchUILibrary/blob/master/_mongodb-core.sketch?raw=true' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      null,
                      '_mongodb-core.sketch'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  'Core components common to all MongoDB products'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  this.state.coreLastUpdated
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'https://github.com/leafygreen/sketchUILibrary/blob/master/_compass-template-1.7.sketch?raw=true' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      null,
                      '_compass-template-1.7.sketch'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  'Components and layouts for MongoDB Compass'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  this.state.compassLastUpdated
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'https://github.com/leafygreen/sketchUILibrary/blob/master/_cloud-template.sketch?raw=true' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      null,
                      '_cloud-template.sketch'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  'Components and layouts for MongoDB Cloud Manager, Ops Manager, and Atlas'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  this.state.cloudLastUpdated
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'https://github.com/leafygreen/sketchUILibrary/blob/master/_stitch-template.sketch?raw=true' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      null,
                      '_stitch-template.sketch'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  'Components and layouts for MongoDB Stitch'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  this.state.stitchLastUpdated
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'https://github.com/leafygreen/sketchUILibrary/blob/master/_university-template-1.2.sketch?raw=true' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      null,
                      '_university-template-1.2.sketch'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  'Components and layouts for MongoDB University'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  this.state.universityLastUpdated
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'heading' },
            'Brand Guide'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Looking for the brand guide? Visit the ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'https://mongodb.frontify.com', target: '_blank' },
              'MongoDB Brand Portal'
            ),
            ' for logos, icons, color palettes, illustration guidelines, and more.'
          )
        )
      )
    );
  };

  return Resources;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Resources);

/***/ }),

/***/ "V3ZX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


// React

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var Component = React.Component;

var PropTypes = __webpack_require__("KSGD");
var ReactTooltip = __webpack_require__("Hh2+");

// 3rd
var _ = __webpack_require__("rdLu");

// constants
var PLACEMENT_OPTIONS = ['top', 'right', 'bottom', 'left'];
var TRIGGER_OPTIONS = ['hover', 'click'];

var Tooltip = (_temp2 = _class = function (_Component) {
    _inherits(Tooltip, _Component);

    function Tooltip() {
        var _temp, _this, _ret;

        _classCallCheck(this, Tooltip);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.visible = false, _this.ref = function (el) {
            _this.tooltip = el;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Tooltip.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _this2 = this;

        // hide and reshow the tooltip if the content has changed while it was visible
        // hide and show need to be called during separate frames, so we resolve a promise

        var propsHaveChanged = prevProps.content !== this.props.content;

        if (this.visible && propsHaveChanged) {
            ReactTooltip.hide(this.tooltip);
            Promise.resolve().then(function () {
                ReactTooltip.show(_this2.tooltip);
            });
        }
    };

    Tooltip.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props,
            hide = _props.hide,
            placement = _props.placement,
            className = _props.className,
            content = _props.content,
            children = _props.children,
            display = _props.display,
            triggerEvent = _props.triggerEvent;


        var id = _.uniqueId('tooltip_');

        var targetProps = {
            style: { display: display },
            'data-for': id,
            'data-place': placement,
            'data-class': className,
            ref: this.ref
        };

        var tooltipProps = {
            effect: 'solid',
            afterShow: function afterShow() {
                _this3.visible = true;
            },
            afterHide: function afterHide() {
                _this3.visible = false;
            },
            id: id
        };

        // we only set the event if it needs to override the default behavior of
        // react-tooltip (mouseenter and mouseleave)
        if (triggerEvent !== 'hover') {
            targetProps['data-event'] = triggerEvent;
        }

        // if we have a custom class, set the type to custom so that no
        // additional styling is provided by default (avoiding specificity battles)
        if (className) {
            targetProps['data-type'] = 'custom';
        }

        var tooltipChildren = void 0;
        if (typeof content === 'function') {
            // if the content is a function, set it as getContent so that it is
            // evoked the first time the tooltip is shown
            targetProps['data-tip'] = true;
            tooltipProps.getContent = content;
        } else if (React.isValidElement(content)) {
            // if the content is a react element, provide it as a child of the
            // tooltip itself, so it is rendered when shown
            targetProps['data-tip'] = true;
            tooltipChildren = content;
        } else {
            // if the content is a string, set it as a data attribute
            targetProps['data-tip'] = content;
        }

        return React.createElement(
            'span',
            null,
            React.createElement(
                'span',
                targetProps,
                children
            ),
            !hide && React.createElement(
                ReactTooltip,
                tooltipProps,
                tooltipChildren
            )
        );
    };

    return Tooltip;
}(Component), _class.propTypes = {
    display: PropTypes.string,
    children: PropTypes.node.isRequired,
    hide: PropTypes.bool,
    placement: PropTypes.oneOf(PLACEMENT_OPTIONS),
    content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
    className: PropTypes.string,
    triggerEvent: PropTypes.oneOf(TRIGGER_OPTIONS)
}, _class.defaultProps = {
    hide: false,
    display: 'inline-block',
    className: '',
    placement: 'top',
    triggerEvent: 'hover'
}, _temp2);


/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "Vok7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Alert_js__ = __webpack_require__("n44K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_Button_js__ = __webpack_require__("kjwo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__react_components_Checkbox_js__ = __webpack_require__("ynmW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__react_components_SectionHeader_js__ = __webpack_require__("KdkW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__react_components_SectionHeader_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__react_components_SectionHeader_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__react_components_SectionSubtab_js__ = __webpack_require__("y0rz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__react_components_SectionSubtab_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__react_components_SectionSubtab_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js__ = __webpack_require__("hOUS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__react_components_RadioGroup_js__ = __webpack_require__("e0BD");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Prism = __webpack_require__("OEdS");

var UITabsReact = function (_React$Component) {
  _inherits(UITabsReact, _React$Component);

  function UITabsReact() {
    var _temp, _this, _ret;

    _classCallCheck(this, UITabsReact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      controlDisabled: false,
      controlTypeClassName: "",
      controlLabel: "Default Tabs"
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UITabsReact.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Tabs'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-2' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'section-header-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/tabs', className: 'section-header-tab-link' },
                'CSS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab section-header-tab-is-active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/tabs/react-tabs', className: 'section-header-tab-link' },
                'React'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-2 type-default' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Default Tabs'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'We have tabs for any and all kinds of options and situations.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a, { children: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Processes', type: 'active' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Servers' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Agents' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Security' })] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-html',
            text: '<SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Processes" type="active"/>, <SectionHeaderTabs.Tab linkText="Servers" />,\n  <SectionHeaderTabs.Tab linkText="Agents" />, <SectionHeaderTabs.Tab linkText="Security"/>]}>\n</SectionHeaderTabs>' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-2' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Common Navigation'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Section Header, Tabs, Subtabs, Controls and Banner'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__react_components_SectionHeader_js___default.a,
              { headlineText: 'Section Without Tabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default.a, { label: 'Primary Action', className: 'button-is-primary u-mr-2' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default.a, { className: 'button-has-ellipsis-only' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-html',
            text: '<SectionHeader headlineText=\'Section Without Tabs\'>\n  <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>\n  <Button className="button-has-ellipsis-only"></Button>\n</SectionHeader>' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-2 u-mt-8' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header section-header-has-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'section-warnings-alert' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Alert_js__["a" /* default */], { level: 'warning', children: 'This is a warning' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__react_components_SectionHeader_js___default.a,
              { headlineText: 'Section With Banner' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default.a, { label: 'Primary Action', className: 'button-is-primary u-mr-2' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default.a, { className: 'button-has-ellipsis-only' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a, { children: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Tab' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Active Tab', type: 'active' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Tab' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'More', type: 'moreToggle' })] })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
        language: 'language-html',
        text: '<Alert level="warning" children="This is a warning"></Alert>\n<SectionHeader headlineText="Section With Banner">\n  <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>\n  <Button className="button-has-ellipsis-only"></Button>\n</SectionHeader>\n<SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,\n  <SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="More" type="moreToggle"/>]}>\n</SectionHeaderTabs>' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-2 u-mt-8' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__react_components_SectionHeader_js___default.a,
              { headlineText: 'Section With Tabs' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default.a, { label: 'Primary Action', className: 'button-is-primary u-mr-2' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_Button_js___default.a, { className: 'button-has-ellipsis-only' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a, { children: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Tab' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Active Tab', type: 'active' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'Beta Tab', type: 'beta' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__react_components_SectionHeaderTab_js___default.a.Tab, { linkText: 'More', type: 'moreToggle' })] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__react_components_SectionSubtab_js___default.a, { children: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__react_components_SectionSubtab_js___default.a.Tab, { linkText: 'Subtab' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__react_components_SectionSubtab_js___default.a.Tab, { linkText: 'Active Subtab', type: 'active' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__react_components_SectionSubtab_js___default.a.Tab, { linkText: 'Last Subtab' })] })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-html',
            text: '<SectionHeader headlineText="Section With Tabs">\n  <Button label="Primary Action" className="button-is-primary u-mr-2"></Button>\n  <Button className="button-has-ellipsis-only"></Button>\n</SectionHeader>\n<SectionHeaderTabs children={[<SectionHeaderTabs.Tab linkText="Tab" />, <SectionHeaderTabs.Tab linkText="Active Tab" type="active" />,\n  <SectionHeaderTabs.Tab linkText="Beta Tab" type=\'beta\'/>, <SectionHeaderTabs.Tab linkText="More" type=\'moreToggle\'/>]}>\n</SectionHeaderTabs>\n<SectionSubtabs children={[<SectionSubtabs.Tab linkText="Subtab"/>, <SectionSubtabs.Tab linkText="Active Subtab" type="active" />,\n  <SectionSubtabs.Tab linkText="Last Subtab"/>]}>\n</SectionSubtabs>\n          ' })
        )
      )
    );
  };

  return UITabsReact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UITabsReact);

/***/ }),

/***/ "WTHL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var Component = React.Component;

var PropTypes = __webpack_require__("KSGD");
var Column = __webpack_require__("rrJI");
var CellHeader = __webpack_require__("LQIX");
var Cell = __webpack_require__("YbQN");
var Empty = __webpack_require__("f59z");

function normalizeAccessor(accessor) {
    var accessorFn = accessor;

    if (typeof accessor === 'string') {
        if (accessor.includes('.')) {
            var accessorArr = accessor.split('.');
            accessorFn = function accessorFn(data) {
                return accessorArr.reduce(function (obj, access) {
                    return obj[access];
                }, data);
            };
        } else {
            accessorFn = function accessorFn(data) {
                return data[accessor];
            };
        }
    }

    return accessorFn;
}

var Table = (_temp2 = _class = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
        var _temp, _this, _ret;

        _classCallCheck(this, Table);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            sortColumnId: null,
            sortValueAccessor: null,
            sortOrder: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Table.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            data = _props.data,
            sortOverride = _props.sortOverride,
            tableClassName = _props.tableClassName,
            headerRowClassName = _props.headerRowClassName,
            rowClassName = _props.rowClassName,
            empty = _props.empty;
        var _state = this.state,
            sortColumnId = _state.sortColumnId,
            sortValueAccessor = _state.sortValueAccessor,
            sortOrder = _state.sortOrder;


        var columns = React.Children.toArray(children).reduce(function (acc, child) {
            if (!React.isValidElement(child)) {
                return acc;
            }

            acc.push(_extends({}, child.props, {
                // Normalize the accessor (as it can be either a string or a function)
                // so that when we iterate over the array of data we have a consistent
                // method to access the data, and don't have to switch logic depending
                // on if it's a string or a function.
                accessor: normalizeAccessor(child.props.accessor),

                // We're caching the originalAccessor as well so we can use it as an
                // unique way to identify a column. For example when a user sorts
                // a column we need to track which column is being sorted.
                // Rather than add an additional prop of `id` we're using the original
                // accessor value as our way to uniquely identify a column.
                originalAccessor: child.props.accessor
            }));
            return acc;
        }, []);

        var sortedData = data;
        if (sortColumnId) {
            sortedData = data.sort(function (a, b) {
                var sort = sortValueAccessor(a) < sortValueAccessor(b) ? -1 : 1;
                if (sortOrder === 'ascending') {
                    sort = -sort;
                }
                return sort;
            });
        }

        var emptyProps = {};
        if (typeof empty === 'string') {
            emptyProps.text = empty;
        } else if (empty != null) {
            emptyProps.children = empty;
        }

        return React.createElement(
            'div',
            null,
            React.createElement(
                'table',
                { className: tableClassName },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        { className: headerRowClassName },
                        columns.map(function (column, columnIndex) {
                            if (_typeof(column.header) === 'object') {
                                return column.header;
                            }

                            var columnProps = {
                                className: column.className,
                                sortable: column.sortable,
                                sortOrder: sortColumnId === column.originalAccessor ? sortOrder : null,
                                onClick: function onClick() {
                                    if (sortOverride) {
                                        sortOverride(column);
                                    } else {
                                        _this2.setState({
                                            sortColumnId: column.originalAccessor,
                                            sortValueAccessor: column.accessor,
                                            sortOrder: sortOrder === 'descending' ? 'ascending' : 'descending'
                                        });
                                    }
                                }
                            };

                            if (typeof column.header === 'function') {
                                return column.header(columnProps);
                            }

                            return React.createElement(
                                CellHeader,
                                _extends({}, columnProps, {
                                    key: column.header || columnIndex
                                }),
                                column.header
                            );
                        })
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    sortedData.map(function (datum, rowIndex) {
                        /* eslint-disable react/no-array-index-key */
                        return React.createElement(
                            'tr',
                            { key: rowIndex, className: rowClassName(datum) },
                            columns.map(function (column, index) {
                                var value = column.accessor(datum);

                                if (typeof column.cell === 'function') {
                                    return column.cell({
                                        column: column,
                                        data: datum,
                                        value: value
                                    });
                                }

                                return React.createElement(
                                    Cell,
                                    { key: index },
                                    value
                                );
                            })
                        );
                        /* eslint-enable react/no-array-index-key */
                    })
                )
            ),
            data.length === 0 && empty && React.createElement(Table.Empty, emptyProps)
        );
    };

    return Table;
}(Component), _class.Column = Column, _class.CellHeader = CellHeader, _class.Cell = Cell, _class.Empty = Empty, _class.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortOverride: PropTypes.func,
    tableClassName: PropTypes.string,
    headerRowClassName: PropTypes.string,
    rowClassName: PropTypes.func,
    empty: PropTypes.node
}, _class.defaultProps = {
    sortOverride: null,
    tableClassName: 'table table-new table-has-no-margin',
    headerRowClassName: '',
    rowClassName: function rowClassName() {
        return '';
    },
    empty: null
}, _temp2);


/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "Wp9I":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "X+lf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("PIAa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==================================================
// Layout
// ==================================================




__webpack_require__("JLpR");

var parent_class = "navigation-is-horizontal-parent";

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { open: false };
    return _this;
  }

  Layout.prototype.getClassName = function getClassName(parent_class) {
    if (this.state.open) {
      return parent_class + ' ' + parent_class + '-is-open';
    }
    return parent_class;
  };

  Layout.prototype.toggleHamburgerMenu = function toggleHamburgerMenu() {
    this.setState({ open: !this.state.open });
  };

  Layout.prototype.render = function render() {
    var children = this.props.children;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
        title: 'MongoDB Design System',
        meta: [{ name: 'description', content: 'Design resources from MongoDB, Inc.' }]
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'header row' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'columns small-12' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'brand columns small-4' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Link"], { to: '/', className: 'brand-logo' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'navigation columns small-8' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', { className: 'navigation-hamburger-button fa fa-bars', onClick: this.toggleHamburgerMenu.bind(this) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: this.getClassName(parent_class), onClick: this.toggleHamburgerMenu.bind(this) },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'navigation-is-horizontal-child' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
                      { to: '/ui-design-system/welcome', className: 'navigation-link' },
                      'Design System'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'navigation-is-horizontal-child' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { href: 'https://www.mongodb.com/careers/departments/engineering', target: '_blank', className: 'navigation-link' },
                      'Careers'
                    )
                  )
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container' },
        children
      )
    );
  };

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.element
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "XBP8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
//  DesignSystem - DSTables
// ==================================================





var UILists = function UILists() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Lists'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'List Styles'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Checklist'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'checklist' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'checklist-item' },
            'This is the first feature you get'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'checklist-item' },
            'You probably like this feature even more'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'checklist-item' },
            'Wow! And there\'s one more. You gotta buy this'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<ul class="checklist">\n  <li class="checklist-item">This is the first feature you get</li>\n  <li class="checklist-item">You probably like this feature even more</li>\n  <li class="checklist-item">Wow! And there\'s one more. You gotta buy this</li>\n</ul>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Nested List'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'nested-list' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nested-list-parent-link', href: '' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mms-icon-database nested-list-icon' }),
              'books'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'nested-list-child-link', href: '' },
                  'authors'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'nested-list-child-link', href: '' },
                  'agents'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'nested-list-child-link', href: '' },
                  'publishers'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { className: 'nested-list-child-link', href: '' },
                  'bookstores'
                )
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<ul class="nested-list">\n  <li><a class="nested-list-parent-link" href=""><i class="mms-icon-database nested-list-icon"></i>books</a>\n    <ul>\n      <li><a class="nested-list-child-link" href="">authors</a></li>\n      <li><a class="nested-list-child-link" href="">agents</a></li>\n      <li><a class="nested-list-child-link" href="">publishers</a></li>\n      <li><a class="nested-list-child-link" href="">bookstores</a></li>\n    </ul>\n  </li>\n</ul>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Progress Indicators'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Number Circles'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'For showing wizard progress.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'number-circle u-mr-2' },
          '1'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'number-circle number-circle-is-current u-mr-2' },
          '2'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'number-circle number-circle-is-complete u-mr-2' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'number-circle number-circle-is-pending u-mr-2' },
          '4'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<span class="number-circle u-mr-2">1</span>\n<span class="number-circle number-circle-is-current u-mr-2">2</span>\n<span class="number-circle number-circle-is-complete u-mr-2"></span>\n<span class="number-circle number-circle-is-pending u-mr-2">4</span>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Step Indicator'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ol',
          { className: 'step-indicator' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'step-indicator-step step-indicator-step-is-complete' },
            'Rey, these are your first steps'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'step-indicator-step' },
            'This is your second step'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'step-indicator-step step-indicator-step-is-inactive' },
            'This is your third step. Keep them short.'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<ol class="step-indicator">\n  <li class="step-indicator-step step-indicator-step-is-complete">Rey, these are your first steps</li>\n  <li class="step-indicator-step">This is your second step</li>\n  <li class="step-indicator-step step-indicator-step-is-inactive">This is your third step. Keep them short.</li>\n</ol>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UILists);

/***/ }),

/***/ "XOgp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__ = __webpack_require__("WTHL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_TablePaginated_js__ = __webpack_require__("dxu9");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==================================================
//  DesignSystem - DSReactTables
// ==================================================







var UITablesReact = function (_React$Component) {
  _inherits(UITablesReact, _React$Component);

  function UITablesReact() {
    _classCallCheck(this, UITablesReact);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  UITablesReact.prototype.renderButtons = function renderButtons() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'button table-button button-is-xs u-mr-1' },
        'data'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'button table-button button-is-xs u-mr-1' },
        'metrics'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'button table-button button-is-xs' },
        'modify'
      )
    );
  };

  UITablesReact.prototype.returnData = function returnData() {
    return [{
      name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'link' },
        'free-shard-0'
      ),
      status: '1 min ago',
      version: '3.4.4',
      actions: this.renderButtons()
    }, {
      name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'link' },
        'free-shard-1'
      ),
      status: '3 min ago',
      version: '3.4.4',
      actions: this.renderButtons()
    }, {
      name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'link' },
        'free-shard-2'
      ),
      status: '5 min ago',
      version: '5.4.4',
      actions: this.renderButtons()
    }];
  };

  UITablesReact.prototype.returnTablePropData = function returnTablePropData() {
    return [{
      propName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'code' },
        'data'
      ),
      type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Object Array, Required'
        )
      ),
      description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'The data gets displayed by the table'
      )
    }, {
      propName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'code' },
        'sortOverride'
      ),
      type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Function'
        )
      ),
      description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Default = ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'null'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Click event handler for the column header.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'If the column component is sortable, sortOverride will replace the default ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          ' function, which is to toggle the rows by ascending and descending order.'
        )
      )
    }, {
      propName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'code' },
        'tableClassName'
      ),
      type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'String'
        )
      ),
      description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Default = ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            '\'table table-new table-has-no-margin\''
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Overrides the default CSS class(s) of the table parent'
        )
      )
    }, {
      propName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'code' },
        'headerRowClassName'
      ),
      type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'String'
        )
      ),
      description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'CSS class(es) passed to the header row'
      )
    }, {
      propName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'code' },
        'rowClassName'
      ),
      type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Function'
        )
      ),
      description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Function that passes CSS class(es) to body rows'
      )
    }];
  };

  UITablesReact.prototype.returnTablePaginatedPropData = function returnTablePaginatedPropData() {
    return [{
      propName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'code' },
        'Table Props'
      ),
      type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'All'
        )
      ),
      description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'The pagination component takes in all props from the table component'
      )
    }, {
      propName: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'code' },
        'pageSize'
      ),
      type: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'number'
        )
      ),
      description: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Defines how many rows can appear on a page'
      )
    }];
  };

  UITablesReact.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Tables'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'section-header-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/tables', className: 'section-header-tab-link' },
                'CSS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab section-header-tab-is-active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/tables/react-tables', className: 'section-header-tab-link' },
                'React'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Standard Table'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Light Theme'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Use on a light background.'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"],
        {
          data: this.returnData(),
          tableClassName: "table",
          headerRowClassName: "table-header",
          headerCellClassName: "table-row",
          rowClassName: function rowClassName() {
            return "table-row";
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
          header: 'Name',
          accessor: 'name',
          className: 'table-column table-cell',
          cell: function cell(props) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
              { className: 'table-column table-cell', key: 'name' },
              props.value
            );
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
          header: 'Status',
          accessor: 'status',
          className: 'table-column table-cell',
          cell: function cell(props) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
              { className: 'table-column table-cell', key: 'status' },
              props.value
            );
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
          header: 'Version',
          accessor: 'version',
          className: 'table-column table-cell',
          cell: function cell(props) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
              { className: 'table-column table-cell', key: 'version' },
              props.value
            );
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
          header: 'Actions',
          accessor: 'actions',
          className: 'table-column table-cell table-cell-has-actions',
          cell: function cell(props) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
              { className: 'table-column table-cell table-cell-has-actions', key: 'actions' },
              props.value
            );
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-jsx',
            text: '<Table \n  data={ Object Array } \n  tableClassName={"table"}\n  headerRowClassName={"table-header"}\n  headerCellClassName={"table-row"}\n  rowClassName={() => "table-row"}\n>\n  <Table.Column\n    header="Name"\n    accessor="name"\n    className="table-column table-cell"\n    cell = {(props) => (\n      <Table.Cell className="table-column table-cell" key="name">\n        {props.value}\n      </Table.Cell>\n    )}\n  />\n  <Table.Column\n    header="Status"\n    accessor="status"\n    className="table-column table-cell"\n    cell = {(props) => (\n      <Table.Cell className="table-column table-cell" key="status">\n        {props.value}\n      </Table.Cell>\n    )}\n  />\n  <Table.Column\n    header="Version"\n    accessor="version"\n    className="table-column table-cell"\n    cell = {(props) => (\n      <Table.Cell className="table-column table-cell" key="version">\n        {props.value}\n      </Table.Cell>\n    )}\n  />\n  <Table.Column\n    header="Actions"\n    accessor="actions"\n    className="table-column table-cell table-cell-has-actions"\n    cell = {(props) => (\n      <Table.Cell className="table-column table-cell table-cell-has-actions" key="actions">\n        {props.value}\n      </Table.Cell>\n    )}\n  />\n</Table>'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Available Props'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { className: 'u-mb-2' },
            'Table Props'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"],
            {
              data: this.returnTablePropData(),
              tableClassName: "table",
              headerRowClassName: "table-header",
              headerCellClassName: "table-header",
              rowClassName: function rowClassName() {
                return "table-row";
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
              header: 'Prop Name',
              accessor: 'propName',
              className: 'table-header',
              cell: function cell(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
                  { className: 'table-column table-cell', key: 'propName' },
                  props.value
                );
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
              header: 'Type',
              accessor: 'type',
              className: 'table-header',
              cell: function cell(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
                  { className: 'table-column table-cell', key: 'type' },
                  props.value
                );
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
              header: 'Description',
              accessor: 'description',
              className: 'table-header',
              cell: function cell(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
                  { className: 'table-column table-cell', key: 'description' },
                  props.value
                );
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Pagination States'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__react_components_TablePaginated_js__["a" /* default */],
        {
          data: this.returnData(),
          pageSize: 2
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
          header: 'Name'
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row u-mb-3' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-jsx',
            text: '<TablePaginated\n  data={ Object Array }\n  pageSize={2}\n>\n  <Table.Column\n    header="Username"\n    accessor="username"\n  />\n</TablePaginated>'
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Available Props'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"],
            {
              data: this.returnTablePaginatedPropData(),
              tableClassName: "table",
              headerRowClassName: "table-header",
              headerCellClassName: "table-header",
              rowClassName: function rowClassName() {
                return "table-row";
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
              header: 'Prop Name',
              accessor: 'propName',
              className: 'table-header',
              cell: function cell(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
                  { className: 'table-column table-cell', key: 'propName' },
                  props.value
                );
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
              header: 'Type',
              accessor: 'type',
              className: 'table-header',
              cell: function cell(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
                  { className: 'table-column table-cell', key: 'type' },
                  props.value
                );
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Column, {
              header: 'Description',
              accessor: 'description',
              className: 'table-header',
              cell: function cell(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3__react_components_Table_js__["default"].Cell,
                  { className: 'table-column table-cell', key: 'description' },
                  props.value
                );
              }
            })
          )
        )
      )
    );
  };

  return UITablesReact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UITablesReact);

/***/ }),

/***/ "XjR5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modify5.1d626727.mp4";

/***/ }),

/***/ "YbQN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var PureComponent = React.PureComponent;

var PropTypes = __webpack_require__("KSGD");

var Cell = (_temp = _class = function (_PureComponent) {
    _inherits(Cell, _PureComponent);

    function Cell() {
        _classCallCheck(this, Cell);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    Cell.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            className = _props.className;

        return React.createElement(
            'td',
            { className: className },
            children
        );
    };

    return Cell;
}(PureComponent), _class.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}, _class.defaultProps = {
    children: null,
    className: ''
}, _temp);


module.exports = Cell;

/***/ }),

/***/ "bu9Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");

//Components
var SplashViewGraphic = __webpack_require__("SZMO").default;

function SplashView(props) {
    var graphic = props.graphic,
        isLoading = props.isLoading,
        isError = props.isError,
        hasNoBorder = props.hasNoBorder,
        headlineText = props.headlineText,
        children = props.children;


    return React.createElement(
        'div',
        { className: classNames('empty-view', {
                'empty-view-has-no-border': hasNoBorder
            })
        },
        React.createElement(SplashViewGraphic, {
            fallback: graphic,
            isError: isError,
            isLoading: isLoading
        }),
        React.createElement(
            'div',
            { className: classNames('empty-view-text', {
                    'empty-view-text-is-error': isError
                })
            },
            headlineText
        ),
        children
    );
}

SplashView.propTypes = {
    graphic: PropTypes.node,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    hasNoBorder: PropTypes.bool,
    headlineText: PropTypes.string.isRequired,
    children: PropTypes.node
};

SplashView.defaultProps = {
    graphic: '',
    hasNoBorder: false,
    isLoading: false,
    isError: false,
    children: ''
};

/* harmony default export */ __webpack_exports__["a"] = (SplashView);

/***/ }),

/***/ "c8Ap":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Alert_js__ = __webpack_require__("n44K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_Checkbox_js__ = __webpack_require__("ynmW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__ = __webpack_require__("e0BD");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==================================================
//  DesignSystem - DSBannersReact
// ==================================================








var alertPairing = [['success', 'Well done! You successfully read this important alert message.'], ['warning', 'Warning! Better check yourself before you wreck yourself, you’re not looking good.'], ['danger', 'Danger! Better check yourself, you’re not looking good.'], ['info', 'Heads up! This alert needs your attention, but it’s not super important.']];

var alertMap = new Map(alertPairing);

var UIBannersReact = function (_React$Component) {
  _inherits(UIBannersReact, _React$Component);

  function UIBannersReact() {
    var _temp, _this, _ret;

    _classCallCheck(this, UIBannersReact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      controlLevel: "success",
      controlMessage: "Well done! You successfully read this important alert message.",
      controlDismissible: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UIBannersReact.prototype.codeSnippetHandler = function codeSnippetHandler() {
    var level = this.state.controlLevel ? ',\n  level="success"' : '';
    var message = this.state.controlMessage ? '' + this.state.controlMessage : '';
    var dismissible = this.state.controlDismissible ? '' + this.state.controlDismissible : 'false';
    return '<Alert\n  level="' + this.state.controlLevel + '",\n  children="' + message + '",\n  dismissible="' + dismissible + '"\n/>';
  };

  UIBannersReact.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap button-ui' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Banners'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'section-header-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/banners', className: 'section-header-tab-link' },
                'CSS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab section-header-tab-is-active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/banners/react-banners', className: 'section-header-tab-link' },
                'React'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Alerts'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Alerts are available in four levels \u2013 success, warning, danger, and info.'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Alert_js__["a" /* default */], {
            level: this.state.controlLevel,
            children: this.state.controlMessage,
            dismissible: this.state.controlDismissible
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Options'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'Type'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["b" /* RadioGroup */],
            {
              name: 'alert-state',
              selectedValue: this.state.controlLevel,
              onChange: function onChange(controlLevel) {
                _this2.setState({ controlLevel: controlLevel });
                _this2.setState({ controlMessage: alertMap.get(controlLevel) });
                setTimeout(function () {
                  Prism.highlightAll();
                }, 5);
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'success', id: 'success', checked: true }),
              ' Success'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'warning', id: 'warning' }),
              ' Warning'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'danger', id: 'danger' }),
              ' Danger'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'info', id: 'info' }),
              ' Info'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'Type'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__react_components_Checkbox_js__["a" /* default */], {
            label: 'Dismissible',
            checked: this.state.controlDismissible,
            onChange: function onChange(controlDismissible) {
              _this2.setState({ controlDismissible: controlDismissible });
              setTimeout(function () {
                Prism.highlightAll();
              }, 10);
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-jsx',
            text: this.codeSnippetHandler() })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Available Props'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'table' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Prop Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Type'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Description'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'level'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String, Required'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Default = ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'info'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the color state of the banner'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Must be one of the following:'
                    ),
                    ' success, warning, danger, info'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'dismissible'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'boolean'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Default = ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'false'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines whether the user can close the banner'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'onDismiss'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Function'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Click event handler for the \xD7 close button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'children'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Node'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'A collection of child elements of the banner'
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  return UIBannersReact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UIBannersReact);

/***/ }),

/***/ "cNyB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modify2.635bfee0.mp4";

/***/ }),

/***/ "clJE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
// ==================================================
//  DesignSystem - DSBubbles
// ==================================================





var UITabs = function UITabs() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap button-ui' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Tabs'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
              { to: '/ui-design-system/components/tabs', className: 'section-header-tab-link' },
              'CSS'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
              { to: '/ui-design-system/components/tabs/react-tabs', className: 'section-header-tab-link' },
              'React'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-2' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Default Tabs'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'We have tabs for any and all kinds of options and situations.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link' },
              'Processes'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link' },
              'Servers'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link' },
              'Agents'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link' },
              'Security'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<ul class="tabs">\n  <li class="tabs-tab tabs-tab-is-active">\n    <a class="tabs-tab-link">Processes</a> \n  </li>\n  <li class="tabs-tab">\n    <a class="tabs-tab-link">Servers</a> \n  </li>\n  <li class="tabs-tab">\n    <a class="tabs-tab-link">Agents</a>\n  </li>\n  <li class="tabs-tab">\n    <a class="tabs-tab-link">Security</a>\n  </li>\n</ul>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Common Navigation'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Section Header, Tabs, Subtabs, Controls and Banner'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-header-title' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header-title-text' },
            'Section With Tabs'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header-title-actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button button-is-primary u-mr-2' },
              'Primary Action'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mms-icon-ellipsis' })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-left' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link', href: "http://mongodb.com" },
              'Tab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link', href: "http://mongodb.com" },
              'Active Tab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-beta' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link', href: "http://mongodb.com" },
              'Beta Tab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-more' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-more dropdown-toggle', 'data-toggle': 'dropdown', 'aria-expanded': 'true', href: "http://mongodb.com" },
              'More ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-caret-down section-header-more-icon' })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-subtabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-subtabs-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-subtabs-tab-link', href: "http://mongodb.com" },
              'Subtab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-subtabs-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-subtabs-tab-is-active section-subtabs-tab-link', href: "http://mongodb.com" },
              'Active Subtab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-subtabs-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-subtabs-tab-link', href: "http://mongodb.com" },
              'Last Subtab'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-controls' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'section-controls-filter' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'section-controls-label' },
              'Filter:'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'section-controls-checkbox-label', className: 'section-controls-box', type: 'checkbox' }),
          ' ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-controls-foobar' },
            'Foo'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'section-controls-checkbox-label', className: 'section-controls-box', type: 'checkbox' }),
          ' ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-controls-foobar' },
            'Bar'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'section-controls-label' },
            'Toggle:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'button-group' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button-group-button button button-is-xs button-is-selected' },
              'Option 1'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button-group-button button button-is-xs' },
              'Option 2'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-jsx',
          text: '<div class="section-header">\n  <div class="section-header-title">\n    <div class="section-header-title-text">Section With Tabs</div>\n    <div class="section-header-title-actions">\n      <button class="button button button-is-primary u-mr-2">Primary Action</button>\n      <button class="button"><i class="mms-icon-ellipsis"></i></button>\n    </div>\n  </div>\n  <ul class="section-header-tabs">\n    <li class="section-header-tab section-header-tab-is-left">\n      <a class="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>\n    </li>\n    <li class="section-header-tab section-header-tab-is-active">\n      <a class="section-header-tab-link" href={"http://mongodb.com"}>Active Tab</a>\n    </li>\n    <li class="section-header-tab section-header-tab-is-beta">\n      <a class="section-header-tab-link" href={"http://mongodb.com"}>Beta Tab</a>\n    </li>\n    <li class=\'section-header-more\'>\n      <a class="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true"  href={"http://mongodb.com"}>\n         More <i class="fa fa-caret-down section-header-more-icon"></i></a>\n    </li>\n  </ul>\n  <ul class="section-subtabs">\n    <li class="section-subtabs-tab">\n      <a class="section-subtabs-tab-link" href={"http://mongodb.com"}>Subtab</a>\n    </li>\n    <li class="section-subtabs-tab">\n      <a class="section-subtabs-tab-is-active section-subtabs-tab-link" href={"http://mongodb.com"}>Active Subtab</a>\n    </li>\n    <li class="section-subtabs-tab">\n      <a class="section-subtabs-tab-link" href={"http://mongodb.com"}>Last Subtab</a>\n    </li>\n  </ul>\n  <div class="section-controls">\n    <span class="section-controls-filter">\n      <label class="section-controls-label">Filter:</label>\n    </span>\n    <input name="section-controls-checkbox-label" class="section-controls-box" type="checkbox"/> <div class="section-controls-foobar">Foo</div>\n    <input name="section-controls-checkbox-label" class="section-controls-box" type="checkbox"/> <div class="section-controls-foobar">Bar</div>\n    <label class="section-controls-label">Toggle:</label>\n    <div class="button-group">\n      <button class="button-group-button button button-is-xs button-is-selected">Option 1</button>\n      <button class="button-group-button button button-is-xs">Option 2</button>\n    </div>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Section Without Tabs'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-header-title' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header-title-text' },
            'Section Without Tabs'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header-title-actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button button-is-primary u-mr-2' },
              'Primary Action'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mms-icon-ellipsis' })
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="section-header">\n  <div class="section-header-title">\n    <div class="section-header-title-text">Section Without Tabs</div>\n    <div class="section-header-title-actions">\n      <button class="button button button-is-primary u-mr-2">Primary Action</button>\n      <button class="button">\n        <i class="mms-icon-ellipsis"></i>\n      </button>\n    </div>\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Section With Banner'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'section-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-header-warnings' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'alert alert-warning', role: 'alert' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-exclamation-triangle section-warnings-icon' }),
            ' This is a warning'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-header-title' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header-title-text' },
            'Section With Banner'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'section-header-title-actions' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button button-is-primary u-mr-2' },
              'Primary Action'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button', 'data-toggle': 'dropdown' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mms-icon-ellipsis' })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-left' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link', href: "http://mongodb.com" },
              'Tab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link', href: "http://mongodb.com" },
              'Active Tab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-tab-link', href: "http://mongodb.com" },
              'Tab'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-more' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'section-header-more dropdown-toggle', 'data-toggle': 'dropdown', 'aria-expanded': 'true', href: "http://mongodb.com" },
              'More ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-caret-down section-header-more-icon' })
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], { language: 'language-html',
          text: '<div class="section-header">\n  <div class="section-header-warnings">\n    <div class="alert alert-warning section-warnings-alert" role="alert">\n      <i class="fa fa-exclamation-triangle section-warnings-icon"></i> This is a warning\n    </div>\n  </div>\n  <div class="section-header-title">\n    <div class="section-header-title-text">Section With Banner</div>\n      <div class="section-header-title-actions">\n        <button class="button button button-is-primary u-mr-2">Primary Action</button>\n        <button class="button" data-toggle="dropdown">\n          <i class="mms-icon-ellipsis"></i>\n        </button>\n      </div>\n  </div>\n    <ul class="section-header-tabs">\n      <li class="section-header-tab section-header-tab-is-left">\n        <a class="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>\n      </li>\n      <li class="section-header-tab section-header-tab-is-active">\n        <a class="section-header-tab-link" href={"http://mongodb.com"}>Active Tab</a>\n      </li>\n      <li class="section-header-tab section-header-tab-is-right">\n        <a class="section-header-tab-link" href={"http://mongodb.com"}>Tab</a>\n      </li>\n      <li class=\'section-header-more\'>\n        <a class="section-header-more dropdown-toggle" data-toggle="dropdown" aria-expanded="true"  href={"http://mongodb.com"}>\n            More <i class="fa fa-caret-down section-header-more-icon"></i></a>\n      </li>\n    </ul>\n  </div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UITabs);

/***/ }),

/***/ "dZmM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
// DesignSystem - DSForms
// ==================================================




var UIForms = function UIForms() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Forms'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Inputs'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Inputs are used throughout the UI for several different purposes. Most frequently, inputs are used within the context of a form. Other uses include searching and filtering.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Default Input'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Something', className: 'input' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-jsx',
          text: '<input type="text" placeholder={"Something"} class="input" />' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Small Input'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Something', className: 'input input-is-small' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-jsx',
          text: '<input type="text" placeholder={\'Something\'} class="input input-is-small" />' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Input with Button'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-10' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Something', className: 'input' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-2' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'button button-is-primary button-is-full' },
          'Submit Form'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-jsx',
          text: '<input type="text" placeholder={"Something"} class="input" />\n<button class="button button-is-primary button-is-full">Submit Form</button>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Input States'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'Input Success'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'input-with-message' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Something', className: 'input input-is-success input-form-control' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'success-label' },
            'Success'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-jsx',
          text: '<div class="input-with-message">\n  <input type="text" placeholder={\'Something\'} class="input input-is-success input-form-control"/>\n  <div class="success-label">Success</div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          null,
          'Input Error'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'input-with-message' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Something', className: 'input input-has-error' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'error-message' },
            'Contextual alert message goes here'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-jsx',
          text: '<div class="input-with-message">\n  <input type="text" placeholder={\'Something\'} class="input input-has-error"/>\n  <p class="error-message">Contextual alert message goes here</p>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Obscurable Input'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'input-with-message' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', readOnly: '', placeholder: 'This is an obscurable input for viewing things like passwords', className: 'input input-form-control' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'input-with-message-toggle' },
            'Show'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'input-with-message' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', readOnly: '', placeholder: 'This is an input for viewing things like keys', className: 'input input-form-control' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'input-with-message-toggle' },
            'Hide'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-jsx',
          text: '<div class="input-with-message">\n  <input type="password" readonly="" placeholder={\'This is an obscurable input for viewing things like passwords\'} class="input input-form-control" />\n  <div class="input-with-message-toggle">Show</div>\n</div>\n<div class="input-with-message">\n  <input type="text" readonly="" placeholder={\'This is an input for viewing things like keys\'} class="input input-form-control" />\n  <div class="input-with-message-toggle">Hide</div>\n</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIForms);

/***/ }),

/***/ "diOz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_root_jsx__ = __webpack_require__("9jNw");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__site_root_jsx__["a" /* default */], null);
  };

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "dxu9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var Component = React.Component;

var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");
var Table = __webpack_require__("WTHL").default;

var TablePaginated = (_temp2 = _class = function (_Component) {
    _inherits(TablePaginated, _Component);

    function TablePaginated() {
        var _temp, _this, _ret;

        _classCallCheck(this, TablePaginated);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            columnSortMap: {},
            currentData: null,
            currentPage: 0,
            currentRange: 0,
            sortedData: _this.props.data
        }, _this.getFirstPage = function () {
            _this.goToPage(0);
        }, _this.getNextPage = function () {
            _this.goToPage(_this.state.currentPage + 1);
        }, _this.getPreviousPage = function () {
            _this.goToPage(_this.state.currentPage - 1);
        }, _this.goToPage = function (pageNumber) {
            var pageSize = _this.props.pageSize;
            var sortedData = _this.state.sortedData;


            var newRange = pageNumber * pageSize;

            _this.setState({
                currentData: sortedData.slice(newRange, newRange + pageSize),
                currentPage: pageNumber,
                currentRange: newRange
            });
        }, _this.sortData = function (column) {
            var _extends2;

            var data = _this.props.data;
            var columnSortMap = _this.state.columnSortMap;


            var columnId = column.originalAccessor;
            var sortOrder = columnSortMap[columnId] === 'descending' ? 'ascending' : 'descending';

            var sortedData = data.sort(function (a, b) {
                var sort = column.accessor(a) < column.accessor(b) ? -1 : 1;
                if (sortOrder === 'ascending') {
                    sort = -sort;
                }
                return sort;
            });

            _this.setState({
                sortedData: sortedData,
                columnSortMap: _extends({}, columnSortMap, (_extends2 = {}, _extends2[columnId] = sortOrder, _extends2))
            }, function () {
                _this.goToPage(_this.state.currentPage);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    TablePaginated.prototype.componentWillMount = function componentWillMount() {
        this.goToPage(0);
    };

    TablePaginated.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            pageSize = _props.pageSize,
            tableClassName = _props.tableClassName,
            headerRowClassName = _props.headerRowClassName,
            rowClassName = _props.rowClassName;
        var _state = this.state,
            currentData = _state.currentData,
            currentRange = _state.currentRange,
            sortedData = _state.sortedData;


        var endOfCurrentRange = currentRange + pageSize < sortedData.length ? currentRange + pageSize - 1 : sortedData.length - 1;

        var hasNextPage = sortedData.length - 1 > endOfCurrentRange;
        var hasPreviousPage = this.state.currentRange > 0;

        return React.createElement(
            'div',
            null,
            React.createElement(
                Table,
                {
                    data: currentData,
                    tableClassName: tableClassName,
                    headerRowClassName: headerRowClassName,
                    rowClassName: rowClassName,
                    sortOverride: this.sortData
                },
                children
            ),
            React.createElement(
                'div',
                { className: 'paginator' },
                React.createElement(
                    'span',
                    {
                        className: classNames('paginator-control paginator-control-is-left', {
                            'paginator-control-is-disabled': !hasPreviousPage
                        })
                    },
                    React.createElement(
                        'button',
                        {
                            className: 'paginator-button paginator-button-is-previous',
                            disabled: !hasPreviousPage,
                            onClick: this.getPreviousPage
                        },
                        React.createElement('i', { className: 'fa fa-angle-left' })
                    ),
                    'Previous'
                ),
                React.createElement(
                    'span',
                    { className: 'paginator-text' },
                    React.createElement(
                        'strong',
                        null,
                        currentRange + 1
                    ),
                    ' to ',
                    React.createElement(
                        'strong',
                        null,
                        endOfCurrentRange + 1
                    ),
                    ' of ',
                    React.createElement(
                        'strong',
                        null,
                        sortedData.length
                    )
                ),
                React.createElement(
                    'span',
                    {
                        className: classNames('paginator-control paginator-control-is-right', {
                            'paginator-control-is-disabled': !hasNextPage
                        })
                    },
                    'Next',
                    React.createElement(
                        'button',
                        {
                            className: 'paginator-button paginator-button-is-next',
                            disabled: !hasNextPage,
                            onClick: this.getNextPage
                        },
                        React.createElement('i', { className: 'fa fa-angle-right' })
                    )
                )
            )
        );
    };

    return TablePaginated;
}(Component), _class.propTypes = _extends({}, Table.propTypes, {
    pageSize: PropTypes.number.isRequired
}), _class.defaultProps = _extends({}, Table.defaultProps), _temp2);


/* harmony default export */ __webpack_exports__["a"] = (TablePaginated);

/***/ }),

/***/ "e0BD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RadioGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// From: https://github.com/chenglou/react-radio-group/blob/master/index.jsx




var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Radio.prototype.render = function render() {
    var _context$radioGroup = this.context.radioGroup,
        name = _context$radioGroup.name,
        selectedValue = _context$radioGroup.selectedValue,
        onChange = _context$radioGroup.onChange;

    var optional = {};
    if (selectedValue !== undefined) {
      optional.checked = this.props.value === selectedValue;
    }
    if (typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, this.props.value);
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', _extends({}, this.props, {
      className: 'checkbox-control',
      type: 'radio',
      name: name
    }, optional));
  };

  return Radio;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);;

Radio.contextTypes = {
  radioGroup: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object
};

var RadioGroup = function (_React$Component2) {
  _inherits(RadioGroup, _React$Component2);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  RadioGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        name = _props.name,
        selectedValue = _props.selectedValue,
        onChange = _props.onChange;

    return {
      radioGroup: {
        name: name, selectedValue: selectedValue, onChange: onChange
      }
    };
  };

  RadioGroup.prototype.render = function render() {
    var _props2 = this.props,
        Component = _props2.Component,
        name = _props2.name,
        selectedValue = _props2.selectedValue,
        onChange = _props2.onChange,
        children = _props2.children,
        rest = _objectWithoutProperties(_props2, ['Component', 'name', 'selectedValue', 'onChange', 'children']);

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Component,
      rest,
      children
    );
  };

  return RadioGroup;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);;

RadioGroup.defaultProps = {
  Component: "div"
};

RadioGroup.propTypes = {
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  selectedValue: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool]),
  onChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node.isRequired,
  Component: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object])
};

RadioGroup.childContextTypes = {
  radioGroup: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object
};

/***/ }),

/***/ "f59z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var PureComponent = React.PureComponent;

var PropTypes = __webpack_require__("KSGD");

var Empty = (_temp = _class = function (_PureComponent) {
    _inherits(Empty, _PureComponent);

    function Empty() {
        _classCallCheck(this, Empty);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    Empty.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            text = _props.text;

        return React.createElement(
            'div',
            { className: 'table-empty-container well text-center' },
            children || React.createElement(
                'em',
                null,
                text
            )
        );
    };

    return Empty;
}(PureComponent), _class.propTypes = {
    text: PropTypes.string,
    children: PropTypes.node
}, _class.defaultProps = {
    text: undefined,
    children: undefined
}, _temp);


module.exports = Empty;

/***/ }),

/***/ "hOUS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");
var TAB_TYPES = ['active', 'beta', 'moreToggle', 'regular'];

function SectionHeaderTab(props) {
    var children = props.children,
        href = props.href,
        type = props.type,
        linkText = props.linkText;


    return React.createElement(
        'li',
        {
            className: classNames({
                'section-header-tab section-header-tab-is-active': type == 'active'
            }, {
                'section-header-tab': type == 'regular'
            }, {
                'section-header-more': type == 'moreToggle'
            }, { 'section-header-tab section-header-tab-is-beta': type == 'beta'
            })
        },
        children || React.createElement(
            'a',
            {
                href: href,
                className: type != 'moreToggle' ? 'section-header-tab-link' : 'section-header-more dropdown-toggle'
            },
            linkText,
            type == 'moreToggle' ? React.createElement('i', { className: 'fa fa-caret-down section-header-more-icon u-ml-1' }) : ''
        )
    );
}

SectionHeaderTab.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(TAB_TYPES).isRequired,
    href: PropTypes.string,
    linkText: PropTypes.string
};

SectionHeaderTab.defaultProps = {
    children: null,
    type: 'regular',
    href: '',
    linkText: ''
};

function SectionHeaderRRTab(props) {
    var href = props.href,
        exact = props.exact,
        linkText = props.linkText;


    return React.createElement(
        Route,
        {
            path: href,
            exact: exact
        },
        function (_ref) {
            var match = _ref.match;
            return React.createElement(
                SectionHeaderTab,
                props,
                React.createElement(
                    Link,
                    { to: href, className: 'section-header-tab-link' },
                    linkText
                )
            );
        }
    );
}

SectionHeaderRRTab.propTypes = {
    exact: PropTypes.bool,
    href: PropTypes.string,
    linkText: PropTypes.string.isRequired
};

SectionHeaderRRTab.defaultProps = {
    exact: false,
    href: ''
};

function SectionHeaderTabs(_ref2) {
    var children = _ref2.children;

    return React.createElement(
        'ul',
        { className: 'section-header-tabs' },
        children
    );
}

SectionHeaderTabs.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf([SectionHeaderTab, SectionHeaderRRTab])
    })).isRequired
};

SectionHeaderTabs.Tab = SectionHeaderTab;
SectionHeaderTabs.RRTab = SectionHeaderRRTab;

module.exports = SectionHeaderTabs;

/***/ }),

/***/ "i9i8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
// ==================================================
// DesignSystem - DSWelcome
// ==================================================




var UIPrinciples = function UIPrinciples() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'heading' },
          'Design Principles'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'In Our Products'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Clarity'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Through the use of familiar patterns, guided workflows, inline instructions and contextual information, our products are understood without the need for a manual, where possible, and provide easy access to concise and clear documentation where needed. Terminology is carefully considered and maps closely to the purpose or concept it describes. Cognitive load is offloaded onto the application wherever possible.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Integrity'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Information communicated to the user is accurate and thorough. Complete transparency instills confidence and trust in the resilience and safety of the product, which is crucial for managing mission critical infrastructure. Esoteric technical details are dialed back in primary views but are always accessible to users who seek them.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Inclusiveness'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Our products serve everyone from beginners learning how to use MongoDB for the first time to experts in the field. They empathize with the user, anticipate their goals and needs to deliver an experience that feels custom tailored. When a beginner feels stuck, the product provides guidance. When an expert desires a shortcut or advanced feature, the product supplies it exactly as the user would expect.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Consistency'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'We offer a full suite of products that fit into each stage of a user\u2019s lifecycle and workflow. Information and interaction patterns that appear in different places are consistent visually and conceptually. This allows users to move fluidly through our products, confident that what they learn in one will carry over to all others.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Automation'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Our products convey an understanding that sometimes the best design is invisible to the user. While our products break complicated tasks into simple and intuitive flows, the biggest impact is achieved when the work is done for the user. Not just a matter of convenience, when we automate a task we reduce chance of user error, leading to a safer overall experience. Our products automate where possible while leaving control with the user where needed.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'How We Work'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Collaboration'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'We recognize that the best work comes from diligent collaboration. We work side-by-side with other designers, engineers, and product managers.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Validation'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'We aren\u2019t satisfied with our solutions until we\u2019ve tested them and proven their effectiveness. We validate ideas and concepts early in the design process, before any wireframing takes place. We aren\u2019t afraid to iterate quickly, leaving behind solutions we initially thought promising. Data is what guides us.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Spirit'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'We are intensely passionate about our work. We strive for a level of excellence that delights the user. Even seemingly imperceptible details receive special attention. We do this so that our products go beyond mere utility to be cherished by the user.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Impact'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'We value impact over deliverables. We recognize that our tools and process, while constantly evolving and improving, are only a means to achieving positive outcomes for the user.'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIPrinciples);

/***/ }),

/***/ "kLhi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
// ==================================================
// DesignSystem - DSWelcome
// ==================================================




var DesignSystem = function DesignSystem() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'hero' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'hero-container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            null,
            'MongoDB'
          ),
          ' Design'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Design for mission-critical applications.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'button-container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
            { to: '/ui-design-system/welcome', className: 'button button-is-info button-mktg' },
            'Design System'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'footer' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'footer-social' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: 'https://github.com/mongodb/design', target: '_blank', className: 'footer-social-github u-mh-3' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: 'https://dribbble.com/MongoDB', target: '_blank', className: 'footer-social-dribbble u-mh-3' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Made with \uD83D\uDC9A by MongoDB Design'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'MongoDB \xA9 2017'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (DesignSystem);

/***/ }),

/***/ "kjwo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");

var Button = function Button(_ref) {
    var onClick = _ref.onClick,
        className = _ref.className,
        label = _ref.label,
        children = _ref.children,
        name = _ref.name,
        value = _ref.value,
        disabled = _ref.disabled;
    return React.createElement(
        'button',
        {
            className: classNames('button', className),
            name: name,
            onClick: onClick,
            type: 'button',
            'aria-pressed': 'false',
            tabIndex: 0,
            value: value,
            disabled: disabled
        },
        label || children
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.node,
    children: PropTypes.node,
    value: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    className: '',
    name: null,
    value: undefined,
    disabled: false,
    label: null,
    children: null
};

module.exports = Button;

/***/ }),

/***/ "kxkY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_fastclick__ = __webpack_require__("e63a");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("O27J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_jsx__ = __webpack_require__("diOz");






Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__app_jsx__["a" /* default */], null), document.querySelector('#app'));

/***/ }),

/***/ "l6zV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modify4.e8b3b74e.mp4";

/***/ }),

/***/ "lhwQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
// DesignSystem - DSForms
// ==================================================




var UIRichForms = function UIRichForms() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Rich Inputs'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Occasionally a form calls for more than a simple radio button or checkbox. These rich form controls pack that extra punch.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Implicit Rich Radio'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'clearfix' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium rich-radio-is-checked' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-main-text' },
              'A Selected Radio Option'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-main-text' },
              'A Radio Option'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-main-text' },
              'A Radio Option'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="clearfix">\n  <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">\n    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked="" />\n    <div class="rich-radio-main-text">A Selected Radio Option</div>\n  </label>\n  <label class="rich-radio rich-radio-is-medium">\n    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />\n    <div class="rich-radio-main-text">A Radio Option</div>\n  </label>\n  <label class="rich-radio rich-radio-is-medium">\n    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />\n    <div class="rich-radio-main-text">A Radio Option</div>\n  </label>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'With Select Buttons'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'clearfix' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium rich-radio-is-checked' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-primary' },
              'Select'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-info' },
              'Select'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'button button-is-info' },
              'Select'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="clearfix">\n  <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">\n    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked />\n    <button class="button button-is-primary">Select</button>\n  </label>\n  <label class="rich-radio rich-radio-is-medium">\n    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />\n    <button class="button button-is-info">Select</button>\n  </label>\n  <label class="rich-radio rich-radio-is-medium">\n    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />\n    <button class="button button-is-info">Select</button>\n  </label>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Large Rich Radio'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'clearfix' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-large rich-radio-is-checked' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-main-text' },
              'A Selected Radio Option'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-large' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-main-text' },
              'A Radio Option'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-large' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-main-text' },
              'A Radio Option'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-large' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button', type: 'radio', name: 'region', value: '' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-main-text' },
              'A Radio Option'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="clearfix">\n  <label class="rich-radio rich-radio-is-large rich-radio-is-checked">\n    <input class="rich-radio-radio-button" type="radio" name="region" value="" checked />\n    <div class="rich-radio-main-text">A Selected Radio Option</div>\n  </label>\n  <label class="rich-radio rich-radio-is-large">\n    <input class="rich-radio-radio-button" type="radio" name="region" value="" />\n    <div class="rich-radio-main-text">A Radio Option</div>\n  </label>\n  <label class="rich-radio rich-radio-is-large">\n    <input class="rich-radio-radio-button" type="radio" name="region" value="" />\n    <div class="rich-radio-main-text">A Radio Option</div>\n  </label>\n  <label class="rich-radio rich-radio-is-large">\n    <input class="rich-radio-radio-button" type="radio" name="region" value="" />\n    <div class="rich-radio-main-text">A Radio Option</div>\n  </label>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'In Columns with Rich Content'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns medium-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'rich-radio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'rich-radio-title' },
            'Option Name'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Option description lorem ipsum dolor sit amet consectetur adipiscing elit'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'checklist' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'checklist-item' },
                'feature one'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'checklist-item' },
                'feature one'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'checklist-item' },
                'feature one'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'button button-is-primary button-is-full' },
            'Select'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns medium-6' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'rich-radio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'rich-radio-title' },
            'Option Name'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Option description lorem ipsum dolor sit amet consectetur adipiscing elit'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'checklist' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'checklist-item' },
                'feature one'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'checklist-item' },
                'feature one'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { className: 'checklist-item' },
                'feature one'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', className: 'button button-is-primary button-is-full' },
            'Select'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="rich-radio">\n  <div class="rich-radio-title">Option Name</div>\n  <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>\n  <section>\n    <ul class="checklist">\n      <li class="checklist-item">feature one</li>\n      <li class="checklist-item">feature one</li>\n      <li class="checklist-item">feature one</li>\n    </ul>\n  </section>\n  <button type="button" class="button button-is-primary button-is-full">\n    Select\n  </button>\n</div>\n<div class="rich-radio">\n  <div class="rich-radio-title">Option Name</div>\n  <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>\n  <section>\n    <ul class="checklist">\n      <li class="checklist-item">feature one</li>\n      <li class="checklist-item">feature one</li>\n      <li class="checklist-item">feature one</li>\n    </ul>\n  </section>\n  <button type="button" class="button button-is-primary button-is-full">\n    Select\n  </button>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'With Illustrations'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'clearfix' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium rich-radio-is-checked' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'replicationFactor', value: '3' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-illustration-container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'svg',
                  { className: 'rich-radio-illustration' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'g',
                    { transform: 'translate(6, 14)' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 10), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 5), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' })
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'rich-radio-illustration-title' },
                  'Option Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'rich-radio-illustration-description' },
                  'Option Description'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'replicationFactor', value: '5' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-illustration-container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'svg',
                  { className: 'rich-radio-illustration' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'g',
                    { transform: 'translate(6, 9)' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 20), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 15), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 10), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 5), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' })
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'rich-radio-illustration-title' },
                  'Option Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'rich-radio-illustration-description' },
                  'Option Description'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'rich-radio rich-radio-is-medium' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'rich-radio-radio-button rich-radio-radio-button-is-hidden', type: 'radio', name: 'replicationFactor', value: '7' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'rich-radio-illustration-container' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'svg',
                  { className: 'rich-radio-illustration' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'g',
                    { transform: 'translate(6, 3)' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 30), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 25), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 20), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 15), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 10), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'translate(0, 5), scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('rect', { width: '25', height: '25', transform: 'scale(1, .6), rotate(45, 12, 12)', className: 'rich-radio-illustration-item' })
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'rich-radio-illustration-title' },
                  'Option Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'rich-radio-illustration-description' },
                  'Option Description'
                )
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="clearfix">\n <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">\n   <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="3" checked>\n   <div class="rich-radio-illustration-container">\n     <div>\n       <svg class="rich-radio-illustration">\n         <g transform="translate(6, 14)">\n           <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n         </g>\n       </svg>\n     </div>\n     <div>\n       <div class="rich-radio-illustration-title">Option Name</div>\n       <div class="rich-radio-illustration-description">Option Description</div>\n     </div>\n   </div>\n </label>\n <label class="rich-radio rich-radio-is-medium">\n   <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="5">\n   <div class="rich-radio-illustration-container">\n     <div>\n       <svg class="rich-radio-illustration">\n         <g transform="translate(6, 9)">\n           <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n         </g>\n       </svg>\n     </div>\n     <div>\n       <div class="rich-radio-illustration-title">Option Name</div>\n       <div class="rich-radio-illustration-description">Option Description</div>\n     </div>\n   </div>\n </label>\n <label class="rich-radio rich-radio-is-medium">\n   <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="7">\n   <div class="rich-radio-illustration-container">\n     <div>\n       <svg class="rich-radio-illustration">\n         <g transform="translate(6, 3)">\n           <rect width="25" height="25" transform="translate(0, 30), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 25), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n           <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>\n         </g>\n       </svg>\n     </div>\n     <div>\n       <div class="rich-radio-illustration-title">Option Name</div>\n       <div class="rich-radio-illustration-description">Option Description</div>\n     </div>\n   </div>\n </label>\n<div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIRichForms);

/***/ }),

/***/ "n44K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var Component = React.Component;


var ALERT_LEVELS = ['success', 'warning', 'danger', 'info'];

var Alert = (_temp = _class = function (_Component) {
    _inherits(Alert, _Component);

    function Alert() {
        _classCallCheck(this, Alert);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Alert.prototype.render = function render() {
        var _props = this.props,
            level = _props.level,
            dismissible = _props.dismissible,
            onDismiss = _props.onDismiss,
            children = _props.children;

        return React.createElement(
            'div',
            { className: 'bem-alert bem-alert-is-' + level },
            dismissible && React.createElement(
                'button',
                { type: 'button', className: 'bem-alert-close-button', 'aria-label': 'Close', onClick: onDismiss },
                React.createElement(
                    'span',
                    { 'aria-hidden': 'true' },
                    '\xD7'
                )
            ),
            React.createElement(
                'div',
                null,
                level == "warning" ? React.createElement('i', { className: 'fa fa-exclamation-triangle section-warnings-icon u-mr-2' }) : '',
                children
            )
        );
    };

    return Alert;
}(Component), _class.propTypes = {
    level: PropTypes.oneOf(ALERT_LEVELS).isRequired,
    dismissible: PropTypes.bool,
    onDismiss: PropTypes.func,
    children: PropTypes.node
}, _class.defaultProps = {
    level: 'info',
    dismissible: false,
    onDismiss: function onDismiss() {
        return undefined;
    },
    children: undefined
}, _temp);


/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),

/***/ "na90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
// ==================================================
// DesignSystem - DSWelcome
// ==================================================




var BaseStylesIndex = function BaseStylesIndex() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'row' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'heading' },
        'Base Styles'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12 u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Global styles for typography and color, as well as a general-purpose grid system for quickly laying out screens.'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (BaseStylesIndex);

/***/ }),

/***/ "pq9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Button_js__ = __webpack_require__("kjwo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__react_components_Modal_js__ = __webpack_require__("N4Za");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__ = __webpack_require__("e0BD");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ==================================================
//  DesignSystem - DSModal
// ==================================================








var UIViewModalReact = function (_React$Component) {
  _inherits(UIViewModalReact, _React$Component);

  function UIViewModalReact() {
    var _temp, _this, _ret;

    _classCallCheck(this, UIViewModalReact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      isOpen: false,
      size: "small"
    }, _this.toggleModal = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UIViewModalReact.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Modals'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'section-header-tabs' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/view-modal', className: 'section-header-tab-link' },
                'CSS'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { className: 'section-header-tab section-header-tab-is-active' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                { to: '/ui-design-system/components/view-modal/react-view-modal', className: 'section-header-tab-link' },
                'React'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'View Modal'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'The View Modal is a React component that can be configured to one of five preset sizes.'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default.a, {
            label: this.state.isOpen ? "Close Modal" : "Open Modal",
            onClick: function onClick() {
              return _this2.toggleModal(_this2.state.isOpen);
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__react_components_Modal_js__["a" /* default */],
          {
            open: this.state.isOpen,
            title: 'Your Title Here',
            size: this.state.size,
            onClose: function onClose() {
              return _this2.toggleModal(_this2.state.isOpen);
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__react_components_Modal_js__["a" /* default */].ModalFooter,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default.a, {
              label: 'Cancel',
              className: 'u-mr-2',
              onClick: function onClick() {
                return _this2.toggleModal(_this2.state.isOpen);
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__react_components_Button_js___default.a, {
              label: 'Confirm',
              className: 'button-is-primary',
              onClick: function onClick() {
                return _this2.toggleModal(_this2.state.isOpen);
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Options'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-6' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'Size'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["b" /* RadioGroup */],
            {
              name: 'button-state',
              selectedValue: this.state.size,
              onChange: function onChange(size) {
                _this2.setState({ size: size });
                setTimeout(function () {
                  Prism.highlightAll();
                }, 5);
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'xs', checked: true }),
              ' Extra Small'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'small' }),
              ' Small'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'medium' }),
              ' Medium'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'large' }),
              ' Large'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__react_components_RadioGroup_js__["a" /* Radio */], { value: 'xlarge' }),
              ' Extra Large'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
            language: 'language-jsx',
            text: '<Modal \n  title="Your Title Here"\n  size="' + this.state.size + '"\n  >\n  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n  <Modal.ModalFooter>\n    <Button\n      label="Cancel"\n      className="u-mr-2"\n    />\n    <Button\n      label="Confirm"\n      className="button-is-primary"\n    />\n  </Modal.ModalFooter>\n</Modal>' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'columns small-12' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            'Available Props'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'table',
            { className: 'table' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'thead',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Prop Name'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Type'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'th',
                  { className: 'table-header' },
                  'Description'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'tbody',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'open'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Boolean'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Default = ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'true'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the open state of the modal'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'title'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Header text of the modal'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'children'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Node'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'A collection of child elements of the modal body'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'size'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'String'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the size of the modal'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Must be one of the following:'
                    ),
                    ' xs, small, medium, large, xlarge'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'hideClose'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Boolean'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Default = ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'false'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Defines the visibility of the \xD7 close button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'onClose'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Function'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Click event handler for the \xD7 close button'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'tr',
                { className: 'table-row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'code' },
                    'onBack'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Function'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'td',
                  { className: 'table-column table-cell' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Click event handler for the back button'
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  return UIViewModalReact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (UIViewModalReact);

/***/ }),

/***/ "rZiR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
// DesignSystem - DSLayouts
// ==================================================





var UILayouts = function UILayouts() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Layouts'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/layouts', className: 'section-header-tab-link' },
              'CSS'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/layouts/react-layouts', className: 'section-header-tab-link' },
              'React'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Zero States'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Empty State'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'empty-view' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'empty-view-text' },
            'Enter your empty view placeholder text here.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button button-is-primary button-is-large' },
            'Do something'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="empty-view">\n  <div class="empty-view-text">Enter your empty view placeholder text here.</div>\n  <button class="button button-is-primary button-is-large">Do something</button>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Loading State'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'empty-view' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'empty-view-graphic' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mms-icon-continuous empty-view-icon empty-view-icon-is-rotating' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'svg',
              { className: 'empty-view-shadow' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { cx: '50%', cy: '50%', rx: '50%', ry: '50%' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'empty-view-text' },
            'Retrieving list of databases and collections...'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="empty-view">\n  <div class="empty-view-graphic">\n    <i class="mms-icon-continuous empty-view-icon empty-view-icon-is-rotating"></i>\n    <svg class="empty-view-shadow">\n      <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>\n    </svg>\n  </div>\n  <div class="empty-view-text">\n    Retrieving list of databases and collections...\n  </div>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Error State'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'empty-view' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'empty-view-graphic' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-4x fa-exclamation-triangle empty-view-icon' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'svg',
              { className: 'empty-view-shadow empty-view-shadow-is-error' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { cx: '50%', cy: '50%', rx: '50%', ry: '50%' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'empty-view-text empty-view-text-is-error' },
            'Write something about what they did wrong here.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'button button-is-large' },
            'Do Something Else'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="empty-view">\n  <div class="empty-view-graphic">\n    <i class="fa fa-4x fa-exclamation-triangle empty-view-icon"></i>\n    <svg class="empty-view-shadow empty-view-shadow-is-error">\n      <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>\n    </svg>\n  </div>\n  <div class="empty-view-text empty-view-text-is-error">\n    Write something about what they did wrong here.\n  </div>\n  <button class="button button-is-large">\n    Do Something Else\n  </button>\n</div>' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UILayouts);

/***/ }),

/***/ "rrJI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PropTypes = __webpack_require__("KSGD");

function Column() {
    return null;
}

Column.propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
    accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    cell: PropTypes.func,
    sortable: PropTypes.bool,
    className: PropTypes.string
};

Column.defaultProps = {
    sortable: false,
    cell: null,
    className: '',
    accessor: function accessor() {
        return undefined;
    }
};

module.exports = Column;

/***/ }),

/***/ "sqOS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
// ==================================================
// DesignSystem - DSWelcome
// ==================================================




var UIWelcome = function UIWelcome() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'heading' },
          'Welcome'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'u-mb-8' },
          'This site aims to provide everything you need to get up to speed quickly when designing for MongoDB. In this site you will find documentation for HTML/CSS components, React components, Sketch assets, and usage guidelines. This site currently focuses on all things related to the design of our products. If you are looking for brand assets and guidelines, or press kits, those can be found in the ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://mongodb.frontify.com', target: '_blank' },
            'MongoDB Brand Portal'
          ),
          '.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Contents'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Base Styles'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'For guidelines around global color palettes, typography, iconography, and a general-purpose 12-column grid.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Components'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'The core components common to all of our products.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Application-Specific Components'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'u-mb-8' },
          'Listed in the navigation under their respective product names (',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
            { to: '/ui-design-system/compass-components' },
            'Compass'
          ),
          ', Cloud, Stitch, University)'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Contribute'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'The contents of this site will forever be a work in progress. If you would like to contribute you can do so via the ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://github.com/mongodb/design', target: '_blank' },
            'MongoDB Design repository'
          ),
          '.'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UIWelcome);

/***/ }),

/***/ "uCbW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_components_site_code__ = __webpack_require__("Pk+t");
// ==================================================
// DesignSystem - DSColors
// ==================================================





var UICode = function UICode() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Code'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'section-header-tabs' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab section-header-tab-is-active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/code', className: 'section-header-tab-link' },
              'CSS'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'section-header-tab' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/ui-design-system/components/code/react-copyablecommand', className: 'section-header-tab-link' },
              'React'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Code Styles'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Copyable Command'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'copy-command' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'copy-command-text' },
            'This is a command that you can copy. It will not break onto the next line since the overflow will keep scrolling horizontally.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'copy-command-button' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-files-o' }),
            ' Copy'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="copy-command">\n  <span class="copy-command-text">This is a command that you can copy. It will not break onto the next line since the overflow will keep scrolling horizontally.</span>\n  <button class="copy-command-button">\n    <i class="fa fa-files-o"></i> Copy\n  </button>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'copy-command' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'copy-command-text' },
            'By default command snippets are not full width.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'copy-command-button' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-files-o' }),
            ' Copy'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="copy-command">\n  <span class="copy-command-text">By default command snippets are not full width.</span>\n  <button class="copy-command-button">\n    <i class="fa fa-files-o"></i> Copy\n  </button>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'copy-command' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: 'copy-command-text copy-command-is-full-width' },
            'However, you can force the snippet to be full width by adding an additional class.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'copy-command-button' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-files-o' }),
            ' Copy'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="copy-command">\n  <span class="copy-command-text copy-command-is-full-width">However, you can force the snippet to be full width by adding an additional class.</span>\n  <button class="copy-command-button">\n    <i class="fa fa-files-o"></i> Copy\n  </button>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'Codeblock'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'codeblock' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'code',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              'const exampleCodeblock = {'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              '  description: \'this is a codeblock that preserves whitespace\','
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              '  overflow: \'this is also scrollable horizontally, so it won\'t break onto the next line even if it\'s really long, it just keeps scrolling and scrolling and scrolling...\''
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              '};'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="codeblock">\n  <code>\n    <div>{ \'const exampleCodeblock = {\' }</div>\n      <div>{ \'  description: \'this is a codeblock that preserves whitespace\',\' }</div>\n      <div>{ \'  overflow: \'this is also scrollable horizontally, so it won\'t break onto the next line even if it\'s really long, it just keeps scrolling and scrolling and scrolling...\'\' }</div>\n    <div>{ \'};\' }</div>\n  </code>\n</div>' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          null,
          'JSON View'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'json-view-object' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'json-view-key' },
              '_id:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'ObjectID(\'2340808293cc4750a928x223\')'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'json-view-key' },
              'address:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Object'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'json-view-object' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'json-view-key' },
                  'street:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  '"1839 Nostrand Ave"'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'json-view-key' },
                  'zip:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  '"11226"'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'json-view-key' },
              'borough:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              '"Brooklyn"'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'json-view-key' },
              'cuisine:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              '"Ice Cream, Gelato, Yogurt, Ices"'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'json-view-key' },
              'grades:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Array[4]'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'json-view-object' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'json-view-key' },
                  '0:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  '"92"'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'json-view-key' },
                  '1:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  '"79"'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'json-view-key' },
                  '2:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  '"88"'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'json-view-key' },
                  '3:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  'Object'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'json-view-object' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'json-view-key' },
                      'service:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      '"80"'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'json-view-key' },
                      'food:'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      null,
                      '"95"'
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'json-view-key' },
              'name:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              '"Taste The Tropics Ice Cream"'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'json-view-key' },
              'restaurant_id:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              '"40356731"'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'columns small-12' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__react_components_site_code__["a" /* default */], {
          language: 'language-html',
          text: '<div class="json-view-object">\n   <div>\n      <span class="json-view-key">_id:</span>\n      <span>ObjectID(\'2340808293cc4750a928x223\')</span>\n   </div>\n   <div>\n      <span class="json-view-key">address:</span>\n      <span>Object</span>\n      <div class="json-view-object">\n         <div>\n            <span class="json-view-key">street:</span>\n            <span>"1839 Nostrand Ave"</span>\n         </div>\n         <div>\n            <span class="json-view-key">zip:</span>\n            <span>"11226"</span>\n         </div>\n      </div>\n   </div>\n   <div>\n      <span class="json-view-key">borough:</span>\n      <span>"Brooklyn"</span>\n   </div>\n   <div>\n      <span class="json-view-key">cuisine:</span>\n      <span>"Ice Cream, Gelato, Yogurt, Ices"</span>\n   </div>\n   <div>\n      <span class="json-view-key">grades:</span>\n      <span>Array[4]</span>\n      <div class="json-view-object">\n         <div>\n            <span class="json-view-key">0:</span>\n            <span>"92"</span>\n         </div>\n         <div>\n            <span class="json-view-key">1:</span>\n            <span>"79"</span>\n         </div>\n         <div>\n            <span class="json-view-key">2:</span>\n            <span>"88"</span>\n         </div>\n         <div>\n            <span class="json-view-key">3:</span>\n            <span>Object</span>\n            <div class="json-view-object">\n               <div>\n                  <span class="json-view-key">service:</span>\n                  <span>"80"</span>\n               </div>\n               <div>\n                  <span class="json-view-key">food:</span>\n                  <span>"95"</span>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n   <div>\n      <span class="json-view-key">name:</span>\n      <span>"Taste The Tropics Ice Cream"</span>\n   </div>\n   <div>\n      <span class="json-view-key">restaurant_id:</span>\n      <span>"40356731"</span>\n   </div>\n</div> ' })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (UICode);

/***/ }),

/***/ "y0rz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var classNames = __webpack_require__("HW6M");
var TAB_TYPES = ['active', 'regular'];

function SectionSubtab(props) {
    var children = props.children,
        href = props.href,
        type = props.type,
        linkText = props.linkText;


    return React.createElement(
        'li',
        { className: 'section-subtabs-tab' },
        children || React.createElement(
            'a',
            {
                href: href,
                className: classNames('section-subtabs-tab-link', { 'section-subtabs-tab-is-active': type == 'active' })
            },
            linkText
        )
    );
}

SectionSubtab.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(TAB_TYPES).isRequired,
    href: PropTypes.string,
    linkText: PropTypes.string
};

SectionSubtab.defaultProps = {
    children: null,
    type: 'regular',
    href: '',
    linkText: ''
};

function SectionSubtabs(_ref) {
    var children = _ref.children;

    return React.createElement(
        'ul',
        { className: 'section-subtabs' },
        children
    );
}

SectionSubtabs.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf([SectionSubtab])
    })).isRequired
};

SectionSubtabs.Tab = SectionSubtab;

module.exports = SectionSubtabs;

/***/ }),

/***/ "ynmW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("U7vG");
var Component = React.Component;

var PropTypes = __webpack_require__("KSGD");

var Checkbox = (_temp2 = _class = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        var _temp, _this, _ret;

        _classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onChange = function (e) {
            _this.props.onChange(e.target.checked);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Checkbox.prototype.render = function render() {
        var _props = this.props,
            name = _props.name,
            disabled = _props.disabled,
            label = _props.label,
            checked = _props.checked;


        return React.createElement(
            'label',
            { className: 'checkbox' },
            React.createElement('input', {
                className: 'checkbox-control',
                type: 'checkbox',
                name: name,
                onChange: this.onChange,
                checked: checked,
                disabled: disabled }),
            ' ',
            label
        );
    };

    return Checkbox;
}(Component), _class.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}, _class.defaultProps = {
    name: null,
    checked: false,
    disabled: false,
    label: null
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ "z+MQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("U7vG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__("Zfgq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
// ==================================================
// DesignSystem - DSWelcome
// ==================================================




var GuidelinesIndex = function GuidelinesIndex() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'row' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'heading' },
        'Guidelines'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'columns small-12 u-mb-3' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Guidelines on interaction patterns used in our products.'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (GuidelinesIndex);

/***/ })

},[0]);
//# sourceMappingURL=app.js.map