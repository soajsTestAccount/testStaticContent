'use strict';

module.exports = {
    name: 'Custom UI Test',
    type: 'static',
    multi: null,
    dashUI: true,
    src: {
        repo: 'testStaticContent',
        owner: 'soajsTestAccount',
        main: '/index.html'
    },
    prerequisites: {
        cpu: '',
        memory: ''
    }
};