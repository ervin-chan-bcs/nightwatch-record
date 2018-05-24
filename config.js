'use strict';

module.exports = {
    win: {
        input: 'desktop',
        encode: 'gdigrab'
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
