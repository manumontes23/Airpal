import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Acb from '@material-ui/icons/AccountBox'

const styles = {
    container: {
        padding: 10,
        backgroundImage: 'linear-gradient(to right bottom, #00002d,  #070022, #0d001e,  #0a0004, #000000)',
    },
    cardlist: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '2em',       
    },
    card: {
        margin: '2em 2em',
        height: '90%',
        width: '250px',
        backgroundColor: '#212121',
    },
    atr: {
        color: '#00ffff',
        textShadow: '0px 0px 10px rgba(0,255,255,0.74)'
    },
    icon: {
        backgroundColor: 'white',
        borderRadius: 5
    },
    i: {
        color: 'white'
    }
}

const Admin = ({classes}) => {
    return(
    <Card raised={true} className={classes.card}>
        <CardContent>
            <Acb fontSize='large' className={classes.icon}/>
            <Typography className={classes.atr}>
            ID: <i className={classes.i}>1</i></Typography>
            <Typography className={classes.atr}>
            NAME: <i className={classes.i}>Test</i></Typography>
            <Typography className={classes.atr}>
            INSTALATIONS: <i className={classes.i}>4</i></Typography>
        </CardContent>
    </Card>
    )
}

function test(classes) {
    const admins = []
    for (let i = 0; i < 35; i++) {
        admins.push(<Admin classes={classes} />)
    }
    return admins
}

class AdminList extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.cardlist}>
                    {
                        test(this.props.classes)
                    }
                </div>
            </div>
        )
    }
}


AdminList.protoTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AdminList)