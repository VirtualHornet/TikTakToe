function App (){

    const [round, setRound]=React.useState(0);
    const [XorO, setXorO] = React.useState();
    const [map, setMap] = React.useState([["0","0","0"], ["0","0","0"],["0","0","0"]]);

    function newGame(){

        document.getElementById("res").innerHTML="<h1>Choose a sign</h1>"

        document.getElementById("t1").innerHTML="";
        document.getElementById("t2").innerHTML="";
        document.getElementById("t3").innerHTML="";
        document.getElementById("t4").innerHTML="";
        document.getElementById("t5").innerHTML="";
        document.getElementById("t6").innerHTML="";
        document.getElementById("t7").innerHTML="";
        document.getElementById("t8").innerHTML="";
        document.getElementById("t9").innerHTML="";
        document.getElementById("x").classList.remove("unclickable");
        document.getElementById("o").classList.remove("unclickable");
        setRound(0);
        setMap([["0","0","0"], ["0","0","0"],["0","0","0"]]);

        document.getElementById("t1").classList.add("unclickable");
        document.getElementById("t2").classList.add("unclickable");
        document.getElementById("t3").classList.add("unclickable");
        document.getElementById("t4").classList.add("unclickable");
        document.getElementById("t5").classList.add("unclickable");
        document.getElementById("t6").classList.add("unclickable");
        document.getElementById("t7").classList.add("unclickable");
        document.getElementById("t8").classList.add("unclickable");
        document.getElementById("t9").classList.add("unclickable");

    }

    function finding(){
        if(XorO === "X"){
            if((map[0][0]==="X" && map[0][1]==="X"&& map[0][2]==="0")){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t7");
                return true;
            }else if((map[0][0]==="X" && map[0][1]==="0"&& map[0][2]==="X")){
                document.getElementById("t4").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t4");
                return true;
            }else if((map[0][0]==="0" && map[0][1]==="X"&& map[0][2]==="X")){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t1");
                return true;


            }else if(map[1][0]==="0" && map[1][1]==="X"&& map[1][2]==="X"){
                document.getElementById("t2").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t2");
                return true;
            }else if((map[1][0]==="X" && map[1][1]==="0"&& map[1][2]==="X")){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t5");
                return true;
            }else if((map[1][0]==="X" && map[1][1]==="X"&& map[1][2]==="0")){
                document.getElementById("t8").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t8");
                return true;
            }

            else if(map[2][0]==="0" && map[2][1]==="X"&& map[2][2]==="X"){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t3");
                return true;
            }else if(map[2][0]==="X" && map[2][1]==="0"&& map[2][2]==="X"){
                document.getElementById("t6").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t6");
                return true;
            }else if(map[2][0]==="X" && map[2][1]==="X"&& map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t9");
                return true;
            }

            else if((map[0][0]==="0" && map[1][0]==="X"&& map[2][0]==="X")){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t1");
                return true;
            }else if((map[0][0]==="X" && map[1][0]==="0"&& map[2][0]==="X")){
                document.getElementById("t2").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t2");
                return true;
            }else if((map[0][0]==="X" && map[1][0]==="X"&& map[2][0]==="0")){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t3");
                return true;
            }

            else if((map[0][1]==="0" && map[1][1]==="X"&& map[2][1]==="X")){
                document.getElementById("t4").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t4");
                return true;
            }else if((map[0][1]==="X" && map[1][1]==="0"&& map[2][1]==="X")){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t5");
                return true;
            }else if((map[0][1]==="X" && map[1][1]==="X"&& map[2][1]==="0")){
                document.getElementById("t6").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t6");
                return true;
            }

            else if(map[0][2]==="0" && map[1][2]==="X"&& map[2][2]==="X"){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t7");
                return true;
            }else if(map[0][2]==="X" && map[1][2]==="0"&& map[2][2]==="X"){
                document.getElementById("t8").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t8");
                return true;
            }else if(map[0][2]==="X" && map[1][2]==="X"&& map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t9");
                return true;
            }

            else if(map[0][0]==="0" && map[1][1]==="X"&& map[2][2]==="X"){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t1");
                return true;
            }else if(map[0][0]==="X" && map[1][1]==="0"&& map[2][2]==="X"){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t5");
                return true;
            }else if(map[0][0]==="X" && map[1][1]==="X"&& map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t9");
                return true;
            }

            else if(map[0][2]==="0" && map[1][1]==="X"&& map[2][0]==="X"){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t7");
                return true;
            }else if(map[0][2]==="X" && map[1][1]==="0"&& map[2][0]==="X"){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t5");
                return true;
            }else if(map[0][2]==="X" && map[1][1]==="X"&& map[2][0]==="0"){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t3");
                return true;
            }
        }

        if(XorO === "O"){
            if((map[0][0]==="O" && map[0][1]==="O"&& map[0][2]==="0")){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t7");
                return true;
            }else if((map[0][0]==="O" && map[0][1]==="0"&& map[0][2]==="O")){
                document.getElementById("t4").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t4");
                return true;
            }else if((map[0][0]==="0" && map[0][1]==="O"&& map[0][2]==="O")){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t1");
                return true;


            }else if(map[1][0]==="0" && map[1][1]==="O"&& map[1][2]==="O"){
                document.getElementById("t2").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t2");
                return true;
            }else if((map[1][0]==="O" && map[1][1]==="0"&& map[1][2]==="O")){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t5");
                return true;
            }else if((map[1][0]==="O" && map[1][1]==="O"&& map[1][2]==="0")){
                document.getElementById("t8").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t8");
                return true;
            }

            else if(map[2][0]==="0" && map[2][1]==="O"&& map[2][2]==="O"){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t3");
                return true;
            }else if(map[2][0]==="O" && map[2][1]==="0"&& map[2][2]==="O"){
                document.getElementById("t6").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t6");
                return true;
            }else if(map[2][0]==="O" && map[2][1]==="O"&& map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t9");
                return true;
            }

            else if((map[0][0]==="0" && map[1][0]==="O"&& map[2][0]==="O")){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t1");
                return true;
            }else if((map[0][0]==="O" && map[1][0]==="0"&& map[2][0]==="O")){
                document.getElementById("t2").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t2");
                return true;
            }else if((map[0][0]==="O" && map[1][0]==="O"&& map[2][0]==="0")){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t3");
                return true;
            }

            else if((map[0][1]==="0" && map[1][1]==="O"&& map[2][1]==="O")){
                document.getElementById("t4").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t4");
                return true;
            }else if((map[0][1]==="O" && map[1][1]==="0"&& map[2][1]==="O")){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t5");
                return true;
            }else if((map[0][1]==="O" && map[1][1]==="O"&& map[2][1]==="0")){
                document.getElementById("t6").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t6");
                return true;
            }

            else if(map[0][2]==="0" && map[1][2]==="O"&& map[2][2]==="O"){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t7");
                return true;
            }else if(map[0][2]==="O" && map[1][2]==="0"&& map[2][2]==="O"){
                document.getElementById("t8").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t8");
                return true;
            }else if(map[0][2]==="O" && map[1][2]==="O"&& map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t9");
                return true;
            }

            else if(map[0][0]==="0" && map[1][1]==="O"&& map[2][2]==="O"){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t1");
                return true;
            }else if(map[0][0]==="O" && map[1][1]==="0"&& map[2][2]==="O"){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t5");
                return true;
            }else if(map[0][0]==="O" && map[1][1]==="O"&& map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t9");
                return true;
            }

            else if(map[0][2]==="0" && map[1][1]==="O"&& map[2][0]==="O"){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t7");
                return true;
            }else if(map[0][2]==="O" && map[1][1]==="0"&& map[2][0]==="O"){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t5");
                return true;
            }else if(map[0][2]==="O" && map[1][1]==="O"&& map[2][0]==="0"){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t3");
                return true;
            }
        }
    return false;
    }

    function auto (){
        document.getElementById("res").innerHTML="<h1>Player turn</h1>"
        if(XorO === "X"){
            if(finding()===false){
            if(map[0][0]==="0"){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t1");
            }else if(map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t9");
            }else if(map[2][0]==="0"){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t3");
            }else if(map[1][0]==="0"){
                document.getElementById("t2").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t2");
            }else if(map[2][1]==="0"){
                document.getElementById("t6").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t6");
            }
            else if(map[1][1]==="0"){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t5");
            }
            else if(map[1][2]==="0"){
                document.getElementById("t8").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t8");
            } else if(map[0][2]==="0"){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t7");
            }
            else if(map[0][1]==="0"){
                document.getElementById("t4").innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                mapping("O","t4");
            }
        }    
        }
        if(XorO === "O"){
            if(finding()===false){
            if(map[0][0]==="0"){
                document.getElementById("t1").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t1");
            }else if(map[2][2]==="0"){
                document.getElementById("t9").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t9");
            }else if(map[2][0]==="0"){
                document.getElementById("t3").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t3");
            }else if(map[1][0]==="0"){
                document.getElementById("t2").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t2");
            }else if(map[2][1]==="0"){
                document.getElementById("t6").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t6");
            }
            else if(map[1][1]==="0"){
                document.getElementById("t5").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t5");
            }
            else if(map[1][2]==="0"){
                document.getElementById("t8").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t8");
            } else if(map[0][2]==="0"){
                document.getElementById("t7").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t7");
            }
            else if(map[0][1]==="0"){
                document.getElementById("t4").innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                mapping("X","t4");
            }
            }
        }
        setRound(item => item+1)
        console.log(round)
        winTheGame();
    }

    React.useEffect(()=>{
        if(round %2 ===1 && XorO!=="0"){
            setTimeout(auto,1500);
        }
    })

    

    function win(){
        document.getElementById("res").innerHTML = "<h1 class='end'>VICTORY</h1>"
        setXorO("0");
        
    }
    function lose(){
        document.getElementById("res").innerHTML = "<h1 class='end'>DEFEAT</h1>"
        setXorO("0");
       
    }

    function draw(){
        if(round===8){
            document.getElementById("res").innerHTML = "<h1 class='end'>DRAW</h1>"
            setXorO("0");
           
        }
    }

    function winTheGame(){
        if(XorO === "X"){
            if(map[0][0]==="X" && map[0][1]==="X"&& map[0][2]==="X"){
            win();
            } 
            if(map[1][0]==="X" && map[1][1]==="X"&& map[1][2]==="X"){
                win();
            }//3
            if(map[2][0]==="X" && map[2][1]==="X"&& map[2][2]==="X"){
                win();
            }//4
            if(map[0][0]==="X" && map[1][0]==="X"&& map[2][0]==="X"){
                win();
            }//5
            if(map[0][1]==="X" && map[1][1]==="X"&& map[2][1]==="X"){
                win();
            }//6
            if(map[0][2]==="X" && map[1][2]==="X"&& map[2][2]==="X"){
                win();
            }//7
            if(map[0][0]==="X" && map[1][1]==="X"&& map[2][2]==="X"){
                win();
            }//8
            if(map[0][2]==="X" && map[1][1]==="X"&& map[2][0]==="X"){
                win();
            }
            if(map[0][2]==="O" && map[1][1]==="O"&& map[2][0]==="O"){
                lose();
            }
            if(map[0][0]==="O" && map[1][1]==="O"&& map[2][2]==="O"){
                lose();
            }
            if(map[0][2]==="O" && map[1][2]==="O"&& map[2][2]==="O"){
                lose();
            }
            if(map[0][1]==="O" && map[1][1]==="O"&& map[2][1]==="O"){
                lose();
            }
            if(map[0][0]==="O" && map[1][0]==="O"&& map[2][0]==="O"){
                lose();
            }
            if(map[2][0]==="O" && map[2][1]==="O"&& map[2][2]==="O"){
                lose();
            }
            if(map[1][0]==="O" && map[1][1]==="O"&& map[1][2]==="O"){
                lose();
            }
            if(map[0][0]==="O" && map[0][1]==="O"&& map[0][2]==="O"){
                lose();
            }
        }else{
            draw();
        }

        if(XorO === "O"){
            if(map[0][0]==="X" && map[0][1]==="X"&& map[0][2]==="X"){
            lose();
            } 
            if(map[1][0]==="X" && map[1][1]==="X"&& map[1][2]==="X"){
                lose();
            }//3
            if(map[2][0]==="X" && map[2][1]==="X"&& map[2][2]==="X"){
                lose();
            }//4
            if(map[0][0]==="X" && map[1][0]==="X"&& map[2][0]==="X"){
                lose();
            }//5
            if(map[0][1]==="X" && map[1][1]==="X"&& map[2][1]==="X"){
                lose();
            }//6
            if(map[0][2]==="X" && map[1][2]==="X"&& map[2][2]==="X"){
                lose();
            }//7
            if(map[0][0]==="X" && map[1][1]==="X"&& map[2][2]==="X"){
                lose();
            }//8
            if(map[0][2]==="X" && map[1][1]==="X"&& map[2][0]==="X"){
                lose();
            }
            if(map[0][2]==="O" && map[1][1]==="O"&& map[2][0]==="O"){
                win();
            }
            if(map[0][0]==="O" && map[1][1]==="O"&& map[2][2]==="O"){
                win();
            }
            if(map[0][2]==="O" && map[1][2]==="O"&& map[2][2]==="O"){
                win();
            }
            if(map[0][1]==="O" && map[1][1]==="O"&& map[2][1]==="O"){
                win();
            }
            if(map[0][0]==="O" && map[1][0]==="O"&& map[2][0]==="O"){
                win();
            }
            if(map[2][0]==="O" && map[2][1]==="O"&& map[2][2]==="O"){
                win();
            }
            if(map[1][0]==="O" && map[1][1]==="O"&& map[1][2]==="O"){
                win();
            }
            if(map[0][0]==="O" && map[0][1]==="O"&& map[0][2]==="O"){
                win();
            }
        }else{
              draw();
        }

      
           
            
        /* }else{
            document.getElementById("all").innerHTML += "<h1>DRAW</h1>"
        }*/
        
        console.log(map[0][0])//1
        
    }

    function mapping(mark, place){
        let arr = map;
            if(place ==="t1"){
                arr[0][0]=mark
            }
            if(place ==="t2"){
                arr[1][0]=mark
            }
            if(place ==="t3"){
                arr[2][0]=mark
            }
            if(place ==="t4"){
                arr[0][1]=mark
            }
            if(place ==="t5"){
                arr[1][1]=mark
            }
            if(place ==="t6"){
                arr[2][1]=mark
            }
            if(place ==="t7"){
                arr[0][2]=mark
            }
            if(place ==="t8"){
                arr[1][2]=mark
            }
            if(place ==="t9"){
                arr[2][2]=mark
            }
        setMap(arr);
        console.log(map)
    }

    function addMark(id){
        if(round % 2 ===0){
            document.getElementById("res").innerHTML="<h1>Computer turn</h1>"
            if(document.getElementById(id).innerHTML===""){
                if(XorO==="X"){
                    document.getElementById(id).innerHTML="<a><i class='fa-solid fa-x fa-10x'></i></a>"
                    mapping("X", id);
                }else if(XorO==="O"){
                    document.getElementById(id).innerHTML="<a><i class='fa-solid fa-o fa-10x'></i></a>"
                    mapping("O", id);
                }
            
                setRound(item => item+1);
                console.log(round)
                winTheGame();
            }
        }

        
    }

    function removeButton(){
        document.getElementById("t1").classList.remove("unclickable");
        document.getElementById("t2").classList.remove("unclickable");
        document.getElementById("t3").classList.remove("unclickable");
        document.getElementById("t4").classList.remove("unclickable");
        document.getElementById("t5").classList.remove("unclickable");
        document.getElementById("t6").classList.remove("unclickable");
        document.getElementById("t7").classList.remove("unclickable");
        document.getElementById("t8").classList.remove("unclickable");
        document.getElementById("t9").classList.remove("unclickable");

        document.getElementById("res").innerHTML="<h1>Player turn</h1>"
        document.getElementById("x").classList.add("unclickable");
        document.getElementById("o").classList.add("unclickable");

        
    }




    return (<div id="all"> 
        <div id="res"><h1>Choose a sign</h1></div>
        <button id="x" onClick={()=>{
            setXorO("X")
            removeButton();
            }}>X</button>
        <button id="o" onClick={()=>{
            setXorO("O")
            removeButton();
            }}>O</button>
        <button onClick={()=>newGame()}>New Game</button>    
        <div id="container">
            <div id="t1" className="box unclickable" onClick={()=>addMark("t1")}></div>
            <div id="t2" className="box unclickable" onClick={()=>addMark("t2")}></div>
            <div id="t3" className="box unclickable" onClick={()=>addMark("t3")}></div>
            <div id="t4" className="box unclickable" onClick={()=>addMark("t4")}></div>
            <div id="t5" className="box unclickable" onClick={()=>addMark("t5")}></div>
            <div id="t6" className="box unclickable" onClick={()=>addMark("t6")}></div>
            <div id="t7" className="box unclickable" onClick={()=>addMark("t7")}></div>
            <div id="t8" className="box unclickable" onClick={()=>addMark("t8")}></div>
            <div id="t9" className="box unclickable" onClick={()=>addMark("t9")}></div>
        </div>
       
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(<App/>)