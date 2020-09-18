class FizzBuzz{

     
    static FizzFactor: number=3;
    static BuzzFactor: number=5;


    static isFizz(number:number): boolean {
       if (number% this.FizzFactor===0) return true;
       return false;
    }

    static isBuzz(number:number): boolean {
        if (number%this.BuzzFactor===0) return true;
        return false;
     }

     static isFizzBuzz(number:number): boolean {
        if (this.isFizz(number) && this.isBuzz(number)) return true;
        return false;
     }


}

export default FizzBuzz