import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import factoy from '../ethereum/factory';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import {Link} from '../routes';

/**
TODO:
1. Configure web3 with a provider from metamask.
2. Tell web3 that a deployed copy of CampaignFactory exists. 
3. Use Factory instance to retreive a list of deployed campaigns.
4. User React to show something about each campaign.
*/

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns= await factoy.methods.getDeployedCampaigns().call();
        return {campaigns};
    }
    renderCampaigns(){
        const items= this.props.campaigns.map(address=>{
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`} >
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
        });
        return <Card.Group items={items} />
    }
    render(){
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                content= "Create Campaign"
                                icon= "add circle"
                                basic color= "blue"
                                floated= "right"
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}
export default CampaignIndex;