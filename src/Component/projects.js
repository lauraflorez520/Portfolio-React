import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
toggleCategories() {
    if (this.state.activeTab === 0) {
        return(
            
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', background: 'url(https://res.cloudinary.com/practicaldev/image/fetch/s--J1UFkTVj--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/5x0209l612xovtypmufm.png) center / cover'}}>Random Quote Machine</CardTitle>
                <CardText>Encuentra diferentes frases que ayudarán a sentirte motivado día tras día</CardText>
                <CardActions border>
                    <Button colored>Netlify</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <a href="https://rqfcc.netlify.com/">
                    <IconButton name="Compartir"/>
                    </a>
                </CardMenu>
            </Card>
        )} else if(this.state.activeTab === 1) {
            return(
                <div>
                    <h1>Esta es mi Tienda</h1>
                </div>
            ) 
        } else if (this.state.activeTab === 2) {
            return(
                <div>
                    <h1>Este es mi formulario</h1>
                </div>
            ) 
        } 
        
    }

   
render() {
        return(
            <div className="category-tabs">
                
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Random Quote Machine</Tab>
                    <Tab>Landing Page</Tab>
                    <Tab>Form</Tab>
                    
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>

            </div>
        )
    }

}
export default Projects;