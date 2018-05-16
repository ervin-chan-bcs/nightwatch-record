'use strict';

module.exports = {
    win: {
        input: 'video=screen-capture-recorder',
        encode: 'dshow'
    },
    mac: {
        input: '1',
        encode: 'avfoundation'
    },
    lin: {
        input: '',
        encode: 'x11grab'
    }
};
