import FizzBuzz from "../src/fizz-buzz"

describe('Fill Buzz', () => {

  it('It Should Return Fizz if Divisible By Three ', () => {
    expect(FizzBuzz.isFizz(3)).toEqual(true)
  })

})
