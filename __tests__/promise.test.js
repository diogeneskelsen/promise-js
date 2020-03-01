const NPromise = require('../promise');

describe('Promise', () => {
    it('should create a new Promise with pending state', () => {
        const promise = new NPromise(() => {});
        expect(promise.state).toBe('pending');
        expect(promise.value).toBe(undefined);
    });

    describe('When fullfilled', () => {
        it('should then a Promise', done => {
            return new NPromise(resolve => resolve({data: 'fake'}))
            .then(response => {
                expect(response.data).toBe('fake');
                done();
            });
        });
    });
});