const db = require('../config/db');

const userModel = db.users;

const request =  require('supertest');

const server = require('../server');

const chai = require('chai');

let assert = chai.assert;

let expect = chai.expect;

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const bodyObj = { }




const userData = {
    "UserEmail":"rish13071995@gmail.com",
    "UserPassword":"1234567"
}

//Intregation Test //

describe("home",function(){
  // this.timeout(10000);
  it("Welcome Page",function(done){
    request(server).get('/')
      .expect(200)
      .expect(/Welcome home/,done)
    })
})

describe("Login",function(){
  it("Login Page Intregation Testing", function(done){
    request(server).get('/login')
      .expect(200,done)
  })
  // it('Login authentication', (done) => {
  //   request(server)
  //   .post('/login')
  //   .send({
  //       "UserEmail": 'rishi13071995@gmail.com',
  //       "UserPassword": '12345678'
  //    })
     
  //   .end((err, res) => {
  //       expect(res.status).to.eq(200)
  //     done()
  //   })
  // })
})

//Intregation Test //

//Unit Test//

describe('Login Unit Test',function(){
  it("it should be check type of login parameter must be object",function(){
    assert.typeOf(userData,'object')
  })

  it("it should be check email must be string",function(){
    assert.typeOf(userData.UserEmail,'string')
  })

  it("it should be check email must be email @ or not",function(){
    assert.match(userData.UserEmail,regexEmail)
  })

  it("it should be check password must be string", function(){
    assert.typeOf(userData.UserPassword,'string')
  })

  it("it should be check password minimum length 5 digits",function(){
    let pLength = userData.UserPassword.length;
    assert.isTrue(pLength > 5 ,"Digit greater then 5")
  })


})







//Unit Test//



function loginParams(bodyData){
    bodyObj = bodyData;
} 

module.exports = loginParams;