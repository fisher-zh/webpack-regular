import Regular from 'regularjs';
import '../src/assets/reset.scss';

const app = new Regular({
    template: '<div>webpack666665555555555556</div>',
    data: {
        name: 'zfx'
    }
})
document.getElementById('app').innerHTML = ''
app.$inject('#app');
