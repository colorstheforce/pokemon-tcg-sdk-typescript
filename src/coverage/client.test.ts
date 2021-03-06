import * as chai from 'chai';
import * as mocha from 'mocha';
import { Client } from '../client';
import { IQuery } from '../interfaces/query';

const expect = chai.expect;
describe('Client', () => {
  it('should get a single using the cards resource and query params' , () => {
    let params: IQuery[] = [{
      name: 'id',
      value: 'xy7-54'
    }];

    Client.get('cards', params)
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0].name).to.equal('Gardevoir');
      })
      .catch(error => console.error(error));
  });

  it('should get a default list of cards using the cards resource with no query params', () => {
    Client.get('cards')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response.length).to.equal(100);
      })
      .catch(error => console.error(error));
  });

  it('should get sets using the sets resource and query params', () => {
    let params: IQuery[] = [{
      name: 'name',
      value: 'Base'
    }];

    Client.get('sets', params)
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('object');
      })
      .catch(error => console.error(error));      
  });

  it('should get a single set using the sets resource and query params', () => {
    let params: IQuery[] = [{
      name: 'id',
      value: 'base1'
    }];

    Client.get('sets', params)
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0].name).to.equal('Base');
      })
      .catch(error => console.error(error));
  });

  it('should get a default list of sets using the sets resource with no query params', () => {
    Client.get('sets')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('object');
        expect(response[0].code).to.equal('base1');
      })
      .catch(error => console.error(error));
  });

  it('should get a list of types using the types resource', () => {
    Client.get('types')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('string');
      })
      .catch(error => console.error(error));
  });

  it('should get a list of supertypes using the supertypes resource', () => {
    Client.get('supertypes')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('string');
      })
      .catch(error => console.error(error));
  });

  it('should get a list of subtypes using the subtypes resource', () => {
    Client.get('subtypes')
      .then(response => {
        expect(response).to.be.a('array');
        expect(response[0]).to.be.a('string');
      })
      .catch(error => console.error(error));
  });
});