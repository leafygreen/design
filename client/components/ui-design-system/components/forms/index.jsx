// ==================================================
// DesignSystem - DSForms
// ==================================================

import React from 'react';
import '../../../../styling/root.less';

const UIForms = () => (
  <div className="wrap">
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h1>Forms</h1>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>Inputs</h2>
        <p>Inputs are used throughout the UI for several different purposes. Most frequently, inputs are used within the context of a form. Other uses include searching and filtering.</p>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Default Input</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<input type="text" placeholder={"Something"} class="input" />' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Small Input</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <input type="text" placeholder={'Something'} className="input input-is-small" />
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<input type="text" placeholder={"Something"} class="input input-is-small" />' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Input with Button</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-10">
        <input type="text" placeholder={'Something'} className="input" />
      </div>
      <div className="columns small-2">
        <button className="button button-is-primary button-is-full">Submit Form</button>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<input type="text" placeholder={"Something"} class="input" />' }</div>
            <div>{ '<button class="button button-is-primary button-is-full">Submit Form</button>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-2">
      <div className="columns small-12">
        <h3>Input States</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <h4>Input Success</h4>
        <div className="input-with-message">
          <input type="text" placeholder={'Something'} className="input input-is-success"/>
          <div className="success-label">Success</div>
        </div>
      </div>
    </div>
    <div className="row u-mb-2">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="input-with-message">' }</div>
            <div>{ '  <input type="text" placeholder={"Something"} class="input input-is-success" />' }</div>
            <div>{ '  <div class="success-label">Success</div>'}</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
       <h4>Input Error</h4>
        <div className="input-with-message">
          <input type="text" placeholder={'Something'} className="input input-has-error"/>
          <p className="error-message">Contextual alert message goes here</p>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="input-with-message">' }</div>
            <div>{ '  <input type="text" placeholder={"Something"} class="input input-has-error" />' }</div>
            <div>{ '  <p class="error-message">Contextual alert message goes here</p>'}</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row u-mb-3">
      <div className="columns small-12">
        <h2>Rich Form Controls</h2>
        <p>Occasionally a form calls for more than a simple radio button or checkbox. These rich form controls pack that extra punch.</p>
      </div>
    </div>
    <div className="row">
      <div className="columns small-12">
        <h3>Implicit Rich Radio</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked="" />
            <div className="rich-radio-main-text">A Selected Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="clearfix">' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked>' }</div>
            <div>{ '    <div class="rich-radio-main-text">A Selected Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="">' }</div>
            <div>{ '    <div class="rich-radio-main-text">A Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="">' }</div>
            <div>{ '    <div class="rich-radio-main-text">A Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>With Select Buttons</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked />
            <button className="button button-is-primary">Select</button>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <button className="button button-is-info">Select</button>
          </label>
          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" />
            <button className="button button-is-info">Select</button>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="clearfix">' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="" checked>' }</div>
            <div>{ '    <button class="button button-is-primary">Select</button>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="">' }</div>
            <div>{ '    <button class="button button-is-info">Select</button>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="region" value="">' }</div>
            <div>{ '    <button class="button button-is-info">Select</button>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>Large Rich Radio</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-large rich-radio-is-checked">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" checked />
            <div className="rich-radio-main-text">A Selected Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-large">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-large">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
          <label className="rich-radio rich-radio-is-large">
            <input className="rich-radio-radio-button" type="radio" name="region" value="" />
            <div className="rich-radio-main-text">A Radio Option</div>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="clearfix">' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-large rich-radio-is-checked">' }</div>
            <div>{ '    <input class="rich-radio-radio-button" type="radio" name="region" value="" checked>' }</div>
            <div>{ '    <div class="rich-radio-main-text">A Selected Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-large">' }</div>
            <div>{ '    <input class="rich-radio-radio-button" type="radio" name="region" value="">' }</div>
            <div>{ '    <div class="rich-radio-main-text">A Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-large">' }</div>
            <div>{ '    <input class="rich-radio-radio-button" type="radio" name="region" value="">' }</div>
            <div>{ '    <div class="rich-radio-main-text">A Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-large">' }</div>
            <div>{ '    <input class="rich-radio-radio-button" type="radio" name="region" value="">' }</div>
            <div>{ '    <div class="rich-radio-main-text">A Radio Option</div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>


    <div className="row">
      <div className="columns small-12">
        <h3>In Columns with Rich Content</h3>
      </div>
    </div>
    <div className="row">
      <div className="columns medium-6">
        <div className="rich-radio">
          <div className="rich-radio-title">Option Name</div>
          <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          <section>
            <ul className="checklist">
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
            </ul>
          </section>
          <button type="button" className="button button-is-primary button-is-full">
            Select
          </button>
        </div>
      </div>
      <div className="columns medium-6">
        <div className="rich-radio">
          <div className="rich-radio-title">Option Name</div>
          <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          <section>
            <ul className="checklist">
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
              <li className="checklist-item">feature one</li>
            </ul>
          </section>
          <button type="button" className="button button-is-primary button-is-full">
            Select
          </button>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="rich-radio">' }</div>
            <div>{ '  <div class="rich-radio-title">Option Name</div>' }</div>
            <div>{ '  <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>' }</div>
            <div>{ '  <section>' }</div>
            <div>{ '    <ul class="checklist">' }</div>
            <div>{ '      <li class="checklist-item">feature one</li>' }</div>
            <div>{ '      <li class="checklist-item">feature one</li>' }</div>
            <div>{ '      <li class="checklist-item">feature one</li>' }</div>
            <div>{ '    </ul>' }</div>
            <div>{ '  </section>' }</div>
            <div>{ '  <button type="button" class="button button-is-primary button-is-full">' }</div>
            <div>{ '    Select' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
            <div>{ '<div class="rich-radio">' }</div>
            <div>{ '  <div class="rich-radio-title">Option Name</div>' }</div>
            <div>{ '  <p>Option description lorem ipsum dolor sit amet consectetur adipiscing elit</p>' }</div>
            <div>{ '  <section>' }</div>
            <div>{ '    <ul class="checklist">' }</div>
            <div>{ '      <li class="checklist-item">feature one</li>' }</div>
            <div>{ '      <li class="checklist-item">feature one</li>' }</div>
            <div>{ '      <li class="checklist-item">feature one</li>' }</div>
            <div>{ '    </ul>' }</div>
            <div>{ '  </section>' }</div>
            <div>{ '  <button type="button" class="button button-is-primary button-is-full">' }</div>
            <div>{ '    Select' }</div>
            <div>{ '  </button>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

    <div className="row">
      <div className="columns small-12">
        <h3>With Illustrations</h3>
      </div>
    </div>
    <div className="row u-mb-0">
      <div className="columns small-12">
        <div className="clearfix">
          <label className="rich-radio rich-radio-is-medium rich-radio-is-checked">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="3" checked />
            <div className="rich-radio-illustration-container">
              <div>
                <svg className="rich-radio-illustration">
                  <g transform="translate(6, 14)">
                    <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                  </g>
                </svg>
              </div>
              <div>
                <div className="rich-radio-illustration-title">Option Name</div>
                <div className="rich-radio-illustration-description">Option Description</div>
              </div>
            </div>
          </label>

          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="5" />
            <div className="rich-radio-illustration-container">
              <div>
                <svg className="rich-radio-illustration">
                  <g transform="translate(6, 9)">
                    <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                  </g>
                </svg>
              </div>
              <div>
                <div className="rich-radio-illustration-title">Option Name</div>
                <div className="rich-radio-illustration-description">Option Description</div>
              </div>
            </div>
          </label>

          <label className="rich-radio rich-radio-is-medium">
            <input className="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="7" />
            <div className="rich-radio-illustration-container">
              <div>
                <svg className="rich-radio-illustration">
                  <g transform="translate(6, 3)">
                    <rect width="25" height="25" transform="translate(0, 30), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 25), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                    <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" className="rich-radio-illustration-item"></rect>
                  </g>
                </svg>
              </div>
              <div>
                <div className="rich-radio-illustration-title">Option Name</div>
                <div className="rich-radio-illustration-description">Option Description</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div className="row u-mb-3">
      <div className="columns small-12">
        <pre>
          <code className="language-html hljs xml" data-lang="html">
            <div>{ '<div class="clearfix">' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium rich-radio-is-checked">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="3" checked>' }</div>
            <div>{ '    <div class="rich-radio-illustration-container">' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <svg class="rich-radio-illustration">' }</div>
            <div>{ '          <g transform="translate(6, 14)">' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '          </g>' }</div>
            <div>{ '        </svg>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <div class="rich-radio-illustration-title">Option Name</div>' }</div>
            <div>{ '        <div class="rich-radio-illustration-description">Option Description</div>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="5">' }</div>
            <div>{ '    <div class="rich-radio-illustration-container">' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <svg class="rich-radio-illustration">' }</div>
            <div>{ '          <g transform="translate(6, 9)">' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '          </g>' }</div>
            <div>{ '        </svg>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <div class="rich-radio-illustration-title">Option Name</div>' }</div>
            <div>{ '        <div class="rich-radio-illustration-description">Option Description</div>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '  <label class="rich-radio rich-radio-is-medium">' }</div>
            <div>{ '    <input class="rich-radio-radio-button rich-radio-radio-button-is-hidden" type="radio" name="replicationFactor" value="7">' }</div>
            <div>{ '    <div class="rich-radio-illustration-container">' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <svg class="rich-radio-illustration">' }</div>
            <div>{ '          <g transform="translate(6, 3)">' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 30), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 25), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 20), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 15), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 10), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="translate(0, 5), scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '            <rect width="25" height="25" transform="scale(1, .6), rotate(45, 12, 12)" class="rich-radio-illustration-item"></rect>' }</div>
            <div>{ '          </g>' }</div>
            <div>{ '        </svg>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '      <div>' }</div>
            <div>{ '        <div class="rich-radio-illustration-title">Option Name</div>' }</div>
            <div>{ '        <div class="rich-radio-illustration-description">Option Description</div>' }</div>
            <div>{ '      </div>' }</div>
            <div>{ '    </div>' }</div>
            <div>{ '  </label>' }</div>
            <div>{ '</div>' }</div>
          </code>
        </pre>
      </div>
    </div>

  </div>
);

export default UIForms;
