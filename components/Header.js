import React from 'react';
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {Link} from './../routes';

export default ()=>{
    const styles= {
        marginTop: '10px'
    };
    return (
        <Menu style={styles}>
            <Link route="/" >
                <a className="item">CrowdFund</a>
            </Link>
            <Menu.Menu position="right">
                <Link route="/" >
                    <a className="item">Campaigns</a>
                </Link>
                <Link route="/campaigns/new" >
                    <a className="item">+</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
}