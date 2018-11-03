<!DOCTYPE HTML>
<html>
    <head>
        <title>
            class in js
        </title>
    </head>
        <body>
           <p> Hi am a web Developer</p> 
            <script>
                
                class Mobile{
                    constructor(){
                      //instance member
                        this.model=10;
                        this.show=function()
                        {
                            return "I am show method";
                        };
                    }
                    //prototype member
                    display(){
                        return "I am display method";
                    }
                }
                var nokia =new Mobile();
                document.write(nokia.model+"<br>");
                document.write(nokia.show()+"<br>");
                document.write(nokia.display());
            </script>
        </body>

</html>