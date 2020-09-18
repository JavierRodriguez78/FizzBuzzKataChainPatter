class FizzBuzz{

    static isFizz(number:number): boolean {
       if (number===3) return true;
       return false;
    }

    static isBuzz(number:number): boolean {
        if (number%5===0) return true;
        return false;
     }
}

export default FizzBuzz