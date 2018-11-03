class Father{
    show(){
        console.log("Father money");
    }
}
class Son extends Father
{
    show(){
        console.log("Son money");
    }

}
var s=new Son();
s.show();