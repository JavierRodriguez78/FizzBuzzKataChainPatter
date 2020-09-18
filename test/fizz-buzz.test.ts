import FizzBuzz from "../src/fizz-buzz"

describe('Fill Buzz', () => {

  it('It Should Return Fizz if Divisible By Three ', () => {
    expect(FizzBuzz.issFizz(3)).toEqual(true)
  })

})
