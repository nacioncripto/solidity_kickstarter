import React from 'react';
import {Divider, Container, Label, Icon} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return (
        <Container textAlign='center' style={{marginTop:10}}>
            <Divider></Divider>
            <a href="mailto:contacto@nacioncripto.com" style={{padding: 5}}>
                <Label>
                    <Icon name="mail"/>
                    Contact Us
                </Label>
            </a>
            
            <a href="https://nacioncripto.com" target="_blank"  style={{padding: 5}}>
                <Label>
                    <Icon name="home"/>
                    NacionCripto.com
                </Label>
            </a>
        </Container>
    );
};