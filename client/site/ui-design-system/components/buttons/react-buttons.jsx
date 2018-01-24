// ==================================================
//  DesignSystem - DSButtons
// ==================================================

import React from 'react';
import { Link } from 'react-router';
import Code from '../../../../react-components/site/code';
import Button from '../../../../react-components/Button.js';
import ButtonGroup from '../../../../react-components/ButtonGroup.js';
import Checkbox from '../../../../react-components/Checkbox.js';
import { RadioGroup, Radio } from '../../../../react-components/RadioGroup.js';
const Prism = require('prismjs');

var buttonPairing = [
  ['', 'Default Button'],
  ['button-is-primary', 'Primary Button'],
  ['button-is-info', 'Outline Button'],
  ['button-is-danger', 'Danger Button'],
  ['button-is-default-inverse', 'Dark Button']
];
var buttonMap = new Map(buttonPairing);

class UIButtonsReact extends React.Component {  
  state = {
    controlDisabled: false,
    controlTypeClassName: "",
    controlLabel: "Default Button",
    selected: 'Topology',
  }

  codeSnippetHandler() {
    const disabled = this.state.controlDisabled ? `,\n  disabled={true}` : '';
    const className = this.state.controlTypeClassName ? ` ${this.state.controlTypeClassName}` : '';
    return `<Button
  label="${this.state.controlLabel}",
  className="button${className}"${disabled}
/>`
  } 

  render() {
    return (
      <div className="wrap button-ui">
        <div className="row">
          <div className="columns small-12">
            <h1>Buttons</h1>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <ul className="section-header-tabs">
              <li className="section-header-tab">
                <Link to='/ui-design-system/components/buttons' className="section-header-tab-link">CSS</Link>
              </li>
              <li className="section-header-tab section-header-tab-is-active">
                <Link to='/ui-design-system/components/buttons/react-buttons' className="section-header-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h2>Button Component</h2>
            <p>Our button component can be configured in a variety of flavors including default, primary, destructive and disabled.</p>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <Button
              label={this.state.controlLabel}
              className={this.state.controlTypeClassName}
              disabled={this.state.controlDisabled}
              onClick={() => {return null}}
            />
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Options</h3>
          </div>
        </div>
        <div className="row">
          <div className="columns small-6">
            <p><b>Type</b></p>
            <RadioGroup
              name="button-state"
              selectedValue={this.state.controlTypeClassName}
              onChange={(controlTypeClassName, controlLabel) => {
                this.setState({ controlTypeClassName });
                this.setState({ controlLabel: buttonMap.get(controlTypeClassName) });
                setTimeout(function(){ Prism.highlightAll(); }, 5);
              }}
            >
              <label className="checkbox">
                <Radio value="" id="type-default" checked /> Default
              </label>
              <label className="checkbox">
                <Radio value="button-is-primary" id="type-primary" /> Primary
              </label>
              <label className="checkbox">
                <Radio value="button-is-info" id="type-outline" /> Outline
              </label>
              <label className="checkbox">
                <Radio value="button-is-danger" id="type-danger" /> Danger
              </label>
              <label className="checkbox">
                <Radio value="button-is-default-inverse" id="type-dark" /> Dark
              </label>
            </RadioGroup>
          </div>
          <div className="columns small-6">
            <p><b>state</b></p>
            <Checkbox 
                label="Disabled"
                checked={this.state.controlDisabled}
                onChange={controlDisabled => {
                  this.setState({ controlDisabled });
                  setTimeout(function(){ Prism.highlightAll(); }, 5);
                }}
            />
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <Code
              language='language-jsx'
              text={this.codeSnippetHandler()}>
            </Code>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Available Props</h3>
            <table className="table">
              <thead>
                <tr className="table-row">
                  <th className="table-header">Prop Name</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">onClick</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Function, Required</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Click event handler</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">className</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>CSS class(es) passed to the button</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">name</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td> 
                  <td className="table-column table-cell">
                    <p>Defines the name reference of the button</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">label</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Node</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Text rendered in the body of the button</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">children</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Node</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>A collection of child elements of the button. Can be used in place of the label prop</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">value</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Defines the default value of the button</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">disabled</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Boolean</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Default = <b>false</b></p>
                    <p>Defines the disabled state of the button</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h2>Button Group Component</h2>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <ButtonGroup
              buttonClassName="button-is-xs"
              options={[
                {
                  label: 'Topology',
                  iconClassName: 'fa fa-bars',
                  value: 'Topology'
                },
                {
                  label: 'List',
                  iconClassName: 'fa fa-list',
                  value: 'List'
                }
              ]}
              value={this.state.selected}
              onChange={(newValue) => {
                this.setState({ selected: newValue });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <Code
              language='language-jsx'
              text={`<ButtonGroup
  buttonClassName="button-is-xs"
  options={[
    {
      label: 'Topology',
      iconClassName: 'fa fa-bars',
      value: 'Topology'
    },
    {
      label: 'List',
      iconClassName: 'fa fa-list',
      value: 'List'
    }
  ]}
  value={this.state.selected}
  onChange={(newValue) => {
    this.setState({ selected: newValue });
  }}
/>`}>
            </Code>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h3>Available Props</h3>
            <table className="table">
              <thead>
                <tr className="table-row">
                  <th className="table-header">Prop Name</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">onChange</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>Function, Required</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Click event handler</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">label</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Text rendered in the body of the button</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">value</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String, Required</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>Defines the default value of the button</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">iconClassName</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>String</b></p>
                  </td> 
                  <td className="table-column table-cell">
                    <p>Icon(s) using Font-Awesome class</p>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <p className="code">buttonClassName</p>
                  </td>
                  <td className="table-column table-cell">
                    <p><b>string</b></p>
                  </td>
                  <td className="table-column table-cell">
                    <p>CSS class(es) passed to the button</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>



      </div>
    );
  }
}

export default UIButtonsReact;
