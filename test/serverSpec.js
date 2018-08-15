  // test get request
  //const expect=require('mocha').expect;

const chai=require('chai')
const expect=chai.expect;
const chai_http=require('chai-http');
chai.use(chai_http);
const app=require('../server/index');


describe('test get and post requests',function(done){
	it('pass with sucessful post request',function(){
	   chai.request(app)
	  .post('/cats')
	  .send({ catName:'meme',
	   ownerEmail:'sara@gmail.com',
	   imageUrl:'image',
	   adoptionMessage:'I like this cat'})
	  .end(function (err, res) {
	     expect(err).to.be.null;
	     expect(res).to.have.status(200);
	     done();
	  });
	})

	it('pass with sucessful get request',function(){
		chai.request(app)
		  .get('/cats')
		  .end(function (err, res) {
		     expect(err).to.be.null;
		     expect(res).to.have.status(200);
		     done();
		  });
	})
})



