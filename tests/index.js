'use strict'

const { expect } = require('chai');
const index = require('../lib/index');

describe('Index', () => {

    it('exports a rules object', () => {
        expect(index.rules).to.be.an('object');
    });

    it('exports "no-only-experiments" rule', () => {
        expect(index.rules).to.have.property('no-only-experiments');
        expect(index.rules['no-only-experiments']).to.be.an('object');
    });
});
