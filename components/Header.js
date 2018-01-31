import React from 'react';
import {Modal, Button, Header, Icon, Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return (
        <Menu style={{marginTop: '10px'}}>
            <Link route="/">
                <a className="item">CrowdCoin</a>
            </Link>
            
            <Menu.Menu position="right">
                <a  className="item"
                    href="https://github.com/nacioncripto/solidity_kickstarter/blob/master/README.md"
                    target="_blank">Help
                </a>
                <Link route="/">
                    <a className="item">Campaigns</a>
                </Link>
                <Link route="/campaigns/new">
                <a className="item">+</a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
};