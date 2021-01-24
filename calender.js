

var months=Number(prompt("월을 입력하시요"));
months-=1;
var firstdate = new Date(2020,months,1);
var day = firstdate.getDay();


function blank(){
    var sum="<tr>";
    for(var i=0; i<day; i++){
        sum+="<td></td>";
    }
    return sum;
}



function days(month){
    switch(month){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        

        case 4: case 6: case 9: case 11: 
            return 30;


        case 2:
            return 29;
    }
}

months=days(months+1);


var result=blank();
for(var i=1;i<=months;i++){


    if(i==months){
        result+="<td>"+i+"</td>"+"</tr>";
    }else if((i+day)%7==0){
        result+="<td>"+i+"</td>"+"</tr>";
    }else{
        result+="<td>"+i+"</td>";
    }


}

document.getElementById("date").innerHTML = result;




