import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Landingpage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://scontent.feoh3-1.fna.fbcdn.net/v/t31.0-0/p640x640/21753212_10211415896165880_281375334019424435_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_oc=AQkC1OYrUkunmLHyirFp5u8ciX_ESUxXhtdxhM24QaAkX5FrrXFSQvHrmxQtLa8g5X4&_nc_ht=scontent.feoh3-1.fna&_nc_tp=6&oh=8d7f417fc259c42875e45674fa828fcb&oe=5EB84E76"
                       // src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/57882274_10215392947029666_3659521726301077504_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_oc=AQkpwS_uF9kiB1GEUwlsPDuEkZ_C7yDtZCTh3VnmVVImoLGOvUXZEIeszkxEwocnvOg&_nc_ht=scontent.feoh3-1.fna&oh=f07b97a6da45c8173581f3ba073c3ede&oe=5EB8251F"
                        alt="mi-foto"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>
                            Hi there! This is Laura
                                Flórez and I'm improving my skills to be a Web Developer FrontEnd.  
                            </h1>

                            <hr/>

                            <p>HTML | CSS | Bootstrap | JavaScript | React</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/laura-florez-9507a2185/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/lauraflorez520" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                                <a href="https://www.instagram.com/lauraflorez520/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landingpage;