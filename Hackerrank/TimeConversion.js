function timeConversion(s){

    let timeString = ""

//12AM condition
if(s.charAt(8)=== "A" && s.charAt(0)=== "1" && s.charAt(1)=== "2")
{
    
    timeString+="00:"

    for(let i = 3; i<=7; i++) timeString+= s.charAt(i)

    console.log(timeString)
    return timeString
    
}
//12PM condition

if(s.charAt(8)=== "P"  && s.charAt(0)=== "1" && s.charAt(1)==="2"){

    for(let i = 0; i<=7; i++) timeString+= s.charAt(i)
    console.log(timeString)
     return timeString
     

}

//AM Conditions(not 12AM)

if(s.charAt(8)=== "A")
{
    for(let i = 0; i<=7; i++) timeString+= s.charAt(i)
   console.log(timeString)
    return timeString
    
}
//PM conditions(not 12pm)


if(s.charAt(8)=== "P"){
let hours

    if(s.charAt(0)===0) 
    {hours = parseInt(s.charAt(1)) +12
    }

    if(s.charAt(0=== 0)){
    hours = s.charAt(0)+ s.charAt(1)
    hours = parseInt(hours) +12
    }
    
    timeString += hours
    for(let i = 2; i<=7; i++) timeString+= s.charAt(i)
    console.log(timeString)
    return timeString

}

}

timeConversion("11:59:59PM")