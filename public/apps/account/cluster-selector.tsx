/*
 *   Copyright OpenSearch Contributors
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { CoreStart } from 'opensearch-dashboards/public';
import { ClusterSelector } from '../../../../../src/plugins/data_source_management/public';
import { SecurityPluginStartDependencies } from '../../types';

export async function setupClusterSelector(
  coreStart: CoreStart,
  deps: SecurityPluginStartDependencies
) {
  if (deps.dataSource?.dataSourceEnabled) {
    return <deps.navigation.ui.TopNavMenu appName={'test'} showDataSourcePicker={true}/>
  }
}
