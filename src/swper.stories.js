import Vue from 'vue';
import Ticker from '../component/swiper/ticker';

export default { title: 'Swiper' };

export const withTicker = () => ({
    components: { Ticker },
    template: '<Ticker></Ticker>'
})