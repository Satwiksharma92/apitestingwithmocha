var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://jsonplaceholder.typicode.com";
var util = require("util");

describe('returns true', function() {
    it('returns true', function(done) {
        request.get({ url: baseUrl + '/posts/1/' },
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