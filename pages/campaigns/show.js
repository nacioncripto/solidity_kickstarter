import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/campaign';
import Layout from '../../components/Layout';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        console.log(summary);

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
           {
               header: manager,
               meta: 'Address of Manager',
               description: 'The manager created this campaign and can create request to withdraw money',
               style : { overflowWrap: 'break-word' } 
           },
           {
               header: minimumContribution,
               meta: 'Minimum Contribution (wei)',
               description: 'You must contribute at list this much wei to become an approver'
           },
           {
                header: requestsCount,
                meta: 'Number Requests',
                description: 'A request to withdraw money from the contract. Requests must be approved by approvers'
           },
           {
               header: approversCount,
               meta: 'Numbers of approvers',
               description: 'Number of people who have donated to this campaign'
           },
           {
               header: web3.utils.fromWei(balance, 'ether'),
               meta: 'Campaign Balance (ether)',
               description: 'Balance this campaign has available to spend'
           }
        ];

        return <Card.Group items={items} />

    }

    render () {
        return (
            <Layout>
                <h3>Campaign Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid> 
            </Layout>
        );
    };
}

export default CampaignShow;