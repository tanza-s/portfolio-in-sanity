import { blockContentType } from './blocks/blockContentType';
import { faqsType } from './blocks/faqsType';
import { faqType } from './blocks/faqType';
import { featuresType } from './blocks/featuresType';
import { heroType } from './blocks/heroType';
import { splitImageType } from './blocks/splitImageType';

import { pageBuilderType } from './pages/pageBuilderType';
import { pageType } from './pages/pageType';
import { postType } from './pages/postType';
import { projectType } from './pages/projectType';

export const schemaTypes = [
    postType,
    projectType,
    blockContentType,
    splitImageType,
    heroType,
    featuresType,
    faqsType,
    faqType,
    pageBuilderType,
    pageType,
];