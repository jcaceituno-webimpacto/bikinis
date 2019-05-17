import React, { Component } from 'react'
import {Col} from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';
import { Link } from 'vtex.render-runtime'


export default class Bikini extends Component{
    render(){
        const {img}=this.props;
        const {boton}=this.props;
        const {subtitulo}=this.props;
        const {link}=this.props;

        console.log(boton);

        return(
            <Col sm={{ size: 'auto'}}>
                <Link to={link} className={styles.link}>
                    <img src={img}></img>
                    <div className="w-100 flex justify-center"><button className={classnames(styles.boton,'ph8 pv5')}>{boton}</button></div>
                    {/* <h2 className= {classnames(styles.subt,'tc')}>{subtitulo}</h2> */}
                    <h2 className={styles.subt}>{subtitulo}</h2>
                </Link>
            </Col>
        );
    }
}