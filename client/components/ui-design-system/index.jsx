// ==================================================
// DesignSystem
// ==================================================

import React from 'react';
import { Link } from 'react-router';

const UIDesignSystem = ({ children }) => (
<div className="wrap">
  <nav className="navigation-sidebar">
    <ul className="navigation navigation-is-vertical navigation-is-vertical-parent">
      <li><h4>Product Design</h4>
        <ul className="navigation-is-vertical-parent">
          <li className="navigation-is-vertical-child"><Link to='/ui-design-system/welcome' className="navigation-link">Welcome</Link></li>
          <li className="navigation-is-vertical-child"><Link to='/ui-design-system/principles' className="navigation-link">Design Principles</Link></li>
        </ul>
      </li>
      <li><h4>Base Styles</h4>
        <ul className="navigation-is-vertical-parent">
          <li className="navigation-is-vertical-child"><Link to='/ui-design-system/base-styles/colors' className="navigation-link">Colors</Link></li>
          <li className="navigation-is-vertical-child"><Link to='/ui-design-system/base-styles/icons' className="navigation-link">Icons</Link></li>
          <li className="navigation-is-vertical-child"><Link to='/ui-design-system/base-styles/typography' className="navigation-link">Typography</Link></li>
       </ul>
      </li>
      <li><h4>Core</h4>
       <ul className="navigation-is-vertical-parent">
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/banners' className="navigation-link">Banners</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/bubbles' className="navigation-link">Bubbles</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/buttons' className="navigation-link">Buttons</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/code' className="navigation-link">Code</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/forms' className="navigation-link">Forms</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/layouts' className="navigation-link">Layouts</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/lists' className="navigation-link">Lists</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/view-modal' className="navigation-link">Modals</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/tabs' className="navigation-link">Tabs</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/tables' className="navigation-link">Tables</Link></li>
        <li className="navigation-is-vertical-child"><Link to='/ui-design-system/components/utilities' className="navigation-link">Utilities</Link></li>
       </ul>
      </li>
      <li><h4>Compass</h4>
       <ul className="navigation-is-vertical-parent">
        <li><Link to='/ui-design-system/compass-components/query-history' className="navigation-link">Query History</Link></li>
       </ul>
      </li>
      <li><h4>Guidelines</h4>
        <ul className="navigation-is-vertical-parent">
          <li className="navigation-is-vertical-child"><Link to='/ui-design-system/guidelines/grid' className="navigation-link">Grid</Link></li>
          <li className="navigation-is-vertical-child"><Link to='/ui-design-system/guidelines/modify' className="navigation-link">Modify</Link></li>
        </ul>
      </li>
   </ul>
  </nav>
  <div className="content">{children}</div>
</div>
);

export default UIDesignSystem;
