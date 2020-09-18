import FizzBuzz from "../src/fizz-buzz"

describe('Fizz Buzz', () => {

  it('It Should Return Fizz if Divisible By Three ', () => {
    expect(FizzBuzz.isFizz(3)).toEqual(true)
  })
  it('It Should Return Buzz if Divisible By Five ', () => {
    expect(FizzBuzz.isBuzz(5)).toEqual(true)
  })
  it('It Should Return FizzBuzz if Divisible By Three and Five ', () => {
    expect(FizzBuzz.isFizzBuzz(15)).toEqual(true)
  })
  

})
