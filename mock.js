





let grow = 1;
let maxGrow = 60;
const growingCircle = () => {
    let dir = true;
    if (dir == true) {
        for (let i = 0; i <= maxGrow; i++) {
            //cir.beginFill(0xaa33bb).drawCircle(200, 200, i);
            console.log(i);
            if (i == maxGrow) {
                dir = false;
            }
        }
    } 
    if (dir == false ){
        for (let i = maxGrow; i <= maxGrow; i = i-1) {
            //cir.beginFill(0xaa33bb).drawCircle(200, 200, i);
            console.log(i);
            if(i==0){
                dir = true
                return
            }
        }   
    }
};



const retrofor = ()=>{
    for (let i = 60; i <= 60; i = i-1) {
        console.log(i);
        if (i==0){
            return
        }
    }
}


//retrofor()

growingCircle()