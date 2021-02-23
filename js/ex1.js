//Creating class Square
class Square{
    constuctor(side){
        this.side=side;
        this.perimeter=perimeterm(side);
        this.area=aream(side);
        this.diagonal=diagonalm(side);
}
  //calculate perimeter, area, diagonal
    perimeterm(side){
        perimeter = side*4;
        return perimeter;
    }
    aream(side){
        area = side**2;
        return area;
    }
    diagonalm(side){
        diagonal = Math.sqrt(side)*Math.pow(side,2);
        return diagonal;
    }
    describe(){
        return `Square with side ${this.side} has a perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}.`;
    }

}
const square1 = new Square(5);
console.log(square1.describe())
