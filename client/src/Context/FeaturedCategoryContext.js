import { createContext } from "react";

import inara from '../asset/img/project-logo/inara-logo.png'
import pooranya from '../asset/img/project-logo/pooranya-logo.png'
import malar from '../asset/img/project-logo/malar-logo.png'
import naari from '../asset/img/project-logo/naari-logo.png'
import minavar from '../asset/img/project-logo/minavar-logo.png'

export const FeatureCategoryContext = createContext([
    {
        name: "Project Inara",
        image: inara,
        url: '/category/men',
        id: 1
    },
    {
        name: "Project Pooranya",
        image: pooranya,
        url: '/category/women',
        id: 2
    },
    {
        name: "Project Naari",
        image: naari,
        url: '/category/kids',
        id: 3
    },
    {
        name: "Project Malar",
        image: malar,
        url: '/category/kids',
        id: 4
    },
    {
        name: "Project Minavar",
        image: minavar,
        url: '/category/kids',
        id: 5
    }
])