import CMS from 'netlify-cms-app'

import { Control as SliderControl } from './slider'
import IndexPageTemplate from './templates/index'
import NotFoundPageTemplate from './templates/not-found'

CMS.registerWidget('slider', SliderControl)
CMS.registerPreviewTemplate('index', IndexPageTemplate)
CMS.registerPreviewTemplate('not-found', NotFoundPageTemplate)
