// ==================================================
// Resources
// ==================================================

import React from 'react';
import '../../../css/root.less';

const client = new stitch.StitchClient('mdb-design-site-apis-wpxcw');

class Resources extends React.Component {
  state = {
    coreLastUpdated: '',
    compassLastUpdated: '',
    cloudLastUpdated: '',
    stitchLastUpdated: '',
    universityLastUpdated: ''
  }

  // Fetch last commit dates for each sketch file
  componentWillMount() {
    var files = [ "_mongodb-core.sketch", "_charts-template-0.1.sketch", "_cloud-template.sketch", "_compass-template-1.7.sketch", "_stitch-template.sketch", "_university-template-1.5.sketch" ];
    var statePairing = [
      ["_mongodb-core.sketch", "coreLastUpdated"],
      ["_charts-template-0.1.sketch", "chartsLastUpdated"],
      ["_cloud-template.sketch", "cloudLastUpdated"],
      ["_compass-template-1.7.sketch", "compassLastUpdated"],
      ["_stitch-template.sketch", "stitchLastUpdated"],
      ["_university-template-1.5.sketch", "universityLastUpdated"],
    ];
    var stateMap = new Map(statePairing);

    client.login().then(() => {
      client.executeFunction("fetchLastUpdated").then((result) => {        
        result.http_result.forEach((item) => {
          var item_json = JSON.parse(item.response.body.toString());
          var updatedDate = item_json.data.repository.ref.target.history.edges[0].node.committedDate.split('T')[0];
          var file = item.file;
          var fileState = stateMap.get(file);
          
          this.setState( {
            [fileState]: updatedDate
          });
        });
      })
    });
  }

  render() {
    return (
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1 className="heading">Resources</h1>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h2 className="heading">Sketch Templates</h2>
            <table className="table">
              <thead>
                <tr className="table-row">
                  <th className="table-header">Filename</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_mongodb-core.sketch?raw=true"><strong>_mongodb-core.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Core components common to all MongoDB products</td>
                  <td className="table-column table-cell">{this.state.coreLastUpdated}</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_charts-template-0.1.sketch?raw=true"><strong>_charts-template-0.1.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB Charts</td>
                  <td className="table-column table-cell">{this.state.chartsLastUpdated}</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_cloud-template.sketch?raw=true"><strong>_cloud-template.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB Cloud Manager, Ops Manager, and Atlas</td>
                  <td className="table-column table-cell">{this.state.cloudLastUpdated}</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_compass-template-1.7.sketch?raw=true"><strong>_compass-template-1.7.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB Compass</td>
                  <td className="table-column table-cell">{this.state.compassLastUpdated}</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_stitch-template.sketch?raw=true"><strong>_stitch-template.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB Stitch</td>
                  <td className="table-column table-cell">{this.state.stitchLastUpdated}</td>
                </tr>
                <tr className="table-row">
                  <td className="table-column table-cell">
                    <a href="https://github.com/leafygreen/sketchUILibrary/blob/master/_university-template-1.5.sketch?raw=true"><strong>_university-template-1.5.sketch</strong></a>
                  </td>
                  <td className="table-column table-cell">Components and layouts for MongoDB University</td>
                  <td className="table-column table-cell">{this.state.universityLastUpdated}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="columns small-12">
            <h2 className="heading">Brand Guide</h2>
            <p>Looking for the brand guide? Visit the <a href="https://mongodb.frontify.com" target="_blank">MongoDB Brand Portal</a> for logos, icons, color palettes, illustration guidelines, and more.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
