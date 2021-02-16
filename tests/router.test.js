const request = require('supertest')
const app = require('../src/app')

describe('GET /books', function () {
    it('responds with json containing list of all books', done => {
        request(app)
            .get('/books')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done);
    });
});

describe('GET /books/:id', () => {
    it('responds with "book found" and status code 200', (done) => {
        request(app)
            .get('/books/001')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .expect('"book found"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('responds with "book not found" and status code(404)', (done) => {
        request(app)
            .get('/books/002')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(404)
            .expect('"book not found"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /books', function () {
    it('responds with json "book created" and status code 201', (done) => {
        const data = {
            title: '0 to 1',
            author: 'Peter Thiel'
        };
        request(app)
            .post('/books')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(201)
            .expect('"book created"')
            .end(err => {
                if (err) return done(err);
                done();
            });
    });

    it('responds with "book not created" and status code 404', (done) => {
        const data = {};
        request(app)
            .post('/books')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(404)
            .expect('"book not created"')
            .end((err) => {
                if (err) return done(err)
                return done();
            });
    });
});
