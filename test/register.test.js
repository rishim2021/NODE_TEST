
const request =  require('supertest');

const server = require('../server');

const chai = require('chai');

let assert = chai.assert;

let expect = chai.expect;

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   



let registerData = {
    "UserName": 'Amit Mishra',
    "UserPhone": '8759093170',
    "UserEmail": 'rishim@capitalnumbers.com',
    "UserPassword": '12345'
}


//Intregation Test //

describe("Register",function(){
    it("Register Page Intregation Test",function(done){
      request(server).get('/register')
        .expect(200,done)
      })

    //   it('Create new user', (done) => {
    //     request(server)
    //     .post('/register')
    //     .send({
    //         "UserName": 'Amit4 Mishra',
    //         "UserPhone": '8759093178',
    //         "UserEmail": 'rishimss3@capitalnumbers.com',
    //         "UserPassword": '1234533'
    //      })
         
    //     .end((err, res) => {
    //         expect(res.status).to.eq(200)
    //       done()
    //     })
    //   })
  })


 //Intregation Test //


 //Unit Test //

 describe('Registration Unit Test',function(){
    it("it should be check type of registration parameter must be object",function(){
      assert.typeOf(registerData,'object')
    })

    it("it should be check name must be string",function(){
        assert.typeOf(registerData.UserName,'string')
    })
  
    it("it should be check email must be string",function(){
      assert.typeOf(registerData.UserEmail,'string')
    })

    it("it should be check email must be email @ or not",function(){
        assert.match(registerData.UserEmail,regexEmail)
    })

    it("it should be check phone must be string",function(){
        assert.typeOf(registerData.UserPhone,'string')
    })

    it("it should be check phone must be 10 digit",function(){
        let pLength = registerData.UserPhone.length
        assert.isTrue(pLength == 10,'Must be 10 digit')
    })


    it("it should be check password must be string",function(){
      assert.typeOf(registerData.UserPassword,'string')
    })
  
  
    it("it should be check password minimum length 5 digits",function(){
      let pLength = registerData.UserPassword.length;
      assert.isTrue(pLength >= 5 ,"Digit greater then 5")
    })
  
  
  })

 //Unit Test //






