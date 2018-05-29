describe('sino', () => {
  it('spy', () => {
    let user = {
      name: 'Unkown',
      setName(name) {
        this.name = name
      }
    }

    const setNameSpy = sinon.spy(user, 'setName')
    user.setName('Xxf')
    expect(setNameSpy.callCount).to.eql(1)
    setNameSpy.restore()
  })

  it('sinon assertion', () => {
    const myFunc = (condition, callback) => {
      if(condition)
        callback();
    }
    const callback = sinon.spy()
    myFunc(true, callback)
    assert(callback.calledOnce);
    //expect(callback).to.have.been.calledOnce()
  })

  it('', function(){
    var badFn = function () { throw new TypeError('Illegal salmon!'); };

    expect(badFn).to.throw(TypeError);
  });
})
