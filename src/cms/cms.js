import CMS from 'netlify-cms-app'

import { Control as SliderControl } from './slider'
import IndexPageTemplate from './templates/index-template'
import NotFoundPageTemplate from './templates/not-found-template'

CMS.registerWidget('slider', SliderControl)
CMS.registerPreviewTemplate('index', IndexPageTemplate)
CMS.registerPreviewTemplate('notFound', NotFoundPageTemplate)
