import CMS from 'netlify-cms-app'

import { Control as SliderControl } from './slider'
import IndexPage from './templates/index'
import NotFoundPage from './templates/not-found'

CMS.registerWidget('slider', SliderControl)
CMS.registerPreviewTemplate('index', IndexPage)
CMS.registerPreviewTemplate('not-found', NotFoundPage)
