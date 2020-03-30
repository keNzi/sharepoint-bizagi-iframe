import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './BizagiBpmnWebPart.module.scss';
import * as strings from 'BizagiBpmnWebPartStrings';

export interface IBizagiBpmnWebPartProps {
  link: string;
  width: number;
  height: number;
}

export default class BizagiBpmnWebPart extends BaseClientSideWebPart <IBizagiBpmnWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
        <iframe src="${ this.properties.link }" width="${ this.properties.width }" height="${ this.properties.height }" allowfullscreen></iframe>
    `;
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('link', {
                label: 'Add URL to BPMN file'
              }),
              PropertyPaneTextField('width', {
                label: 'Width  of <iframe>'
              }),
              PropertyPaneTextField('height', {
                label: 'Height of <iframe>'
              })
            ]
          }
        ]
      }
    ]
  };
}
}
