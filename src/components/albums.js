import React from 'react';
import SputifyService from '../services/sputify-service';
import Button from '@mui/material/Button';

export default class Albums extends React.Component {

    handleClick = event => {
        SputifyService.get(`/album`)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <Button
                onClick={this.handleClick}
                variant="contained"
            >
                Get albums
            </Button>
        )
    }
}