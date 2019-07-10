import React from 'react';
import './Landing.css';
import './Carousel.css';

import { Carousel } from 'react-responsive-carousel';

class Landing extends React.Component {

    onChange = (...a)=> {
        console.log('onChange', a);
    }
    onClickItem = (...a)=> {
        console.log('onClickItem', a);
    }
    onClickThumb = (...a)=> {
        console.log('onClickThumb', a);
    }

    render() {
        return (
            <div className='Landing Page'>
                <Carousel showArrows={true}
                          onChange={this.onChange}
                          onClickItem={this.onClickItem}
                          onClickThumb={this.onClickThumb}>
                    <div>
                        <img src="https://pbs.twimg.com/media/DxFbsoNU8AAmQnr.jpg" />
                        <p className="legend">Gold Steak</p>
                    </div>
                    <div>
                        <img src="https://www.channelnewsasia.com/image/10753532/1x1/600/600/2a1f25a52d536d11be742455a870ad88/Gs/bistecca-best-steak-in-singapore-cna-lifestyle.jpg" />
                        <p className="legend">T-Bone</p>
                    </div>
                    <div>
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/ee/14/80/delicious-burgers.jpg" />
                        <p className="legend">Chessburger</p>
                    </div>
                    <div>
                        <img src="https://www.cookingclassy.com/wp-content/uploads/2017/04/steak-kebabs-17.jpg" />
                        <p className="legend">Beef Skewers</p>
                    </div>
                    <div>
                        <img src="https://gbc-cdn-public-media.azureedge.net/img68542.768x512.jpg" />
                        <p className="legend">Tournedo Rossini</p>
                    </div>
                </Carousel>
            </div>
           );
    }
}

export default Landing;

