var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://jsonplaceholder.typicode.com";
var slugUrl = "/posts/";
var util = require("util");
var postnumber = 1;
describe('returns true', function() {
    it('returns true', function(done) {
        request.get({ url: baseUrl + slugUrl},
            function(error, response, body) {
            		var bodyObj = JSON.parse(body);
            		//expect(bodyObj.userId).to.equal(1);
            		//expect(bodyObj.title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
 });


describe('returns true', function() {
    it('returns true', function(done) {
        request.get({ url: baseUrl + slugUrl + postnumber},
            function(error, response, body) {
                    var bodyObj = JSON.parse(body);
                    expect(bodyObj.userId).to.equal(1);
                    expect(bodyObj.title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
 });


describe('returns true for comments', function() {
    it('returns true for comments', function(done) {
         request.get({ url: baseUrl + '/comments/4/' },
            function(error, response, body) {
            		var bodyObj = JSON.parse(body);
            		expect(bodyObj.postId).to.equal(1);
            		expect(bodyObj.name).to.equal("alias odio sit");
            		expect(bodyObj.email).to.equal("Lew@alysha.tv");
            		expect(bodyObj.body).to.equal("non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});