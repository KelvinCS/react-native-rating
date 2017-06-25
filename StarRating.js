import React, { Component } from 'react';
import {
    Image,
    View
} from 'react-native';

class StarRating extends Component {
    constructor(props) {
        super(props)
        
        let baseConfig = {
            rating, 
            maxStars: 5,
            colorStarSelected: '#FFAB00',
            colorStarUnselected: '#9E9E9E',
            starSize: 16,
            star: require('./img/star.png')
        }

        this.baseConfig = Object.assign(baseConfig, props);
    }

    generateStars (config = this.baseConfig) {
        let stars = new Array(config.maxStars).fill(0);
        return stars.map((_, index) => {
            let currentStar = index + 1;
            let tint = currentStar <= config.rating ? config.colorStarSelected : config.colorStarUnselected;

            return <Image source={config.star} style={{tintColor: tint, height: config.starSize, width: config.starSize}}/>
        })
    }

    render() {
        return(
            <View style={{flexDirection: 'row'}}>
                {this.generateStars()}
            </View>
        )
    }
}

export default StarRating