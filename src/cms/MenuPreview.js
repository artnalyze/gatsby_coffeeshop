import React from 'react'
import '../global.css';
import Menu from '../components/Menu';
//import MenuPage from '../pages/menu'

export default function MenuPreview({ entry }) {
    const menu = entry.getIn(['data']).toJS();

    const data = {
        markdownRemark: {
            frontmatter: {
                ...menu
            }
        }
    }

    return <Menu data={data}/>
}