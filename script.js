function sleep_in( weekday, vacation){
    if( weekday == vacation) {
        return true;
    }else {
        var result = false;
    }
    if(weekday == false && vacation == true){
        var result = true;
    }
    return result;
}

function monkey_trouble(smile_a, smile_b) {
    if (smile_a == true && smile_b == true) {
        return true;
    }
    if(smile_a == false && smile_b == false){
        return true;
    }
    if(smile_a == true && smile_b == false){
        return false;
    }
    if(smile_a == false && smile_b == true){
        return false;
    }
    //return smile_a == smile_b;
}

function string_times(string, integer){
    var answer = "";
    for(var i = 0; i < integer; i++){
         answer = answer + string;
    }
    return answer;
}

function front_times(string, integer) {
    var answer = "";
    var first3 = string.substring(0,3);
    for(var i = 0; i < integer; i++){
        answer = answer + first3;
    }
    return answer;
}

function string_bits(string, integer) {
    var answer = "";
    for (var i = 0; i < integer; i++) {
        if (i % 2 == 1) {
    answer = answer + string.substring(0, 1);
}
    }
    return answer;
}

function caughtSpeeding(speed, birthday){
    var n = 0;
    if(birthday == true){
        speed = speed + 5;
    }
    if( speed <= 60){
        return 0;
    }
    if( speed >= 61 && speed <= 81){
        return 1;
    }
    if( speed >= 81){
        return 2;
    }
}

function fizz_buzz(x){
    //var newWord = "i"
    if(x % 3 == 0 && x % 5 == 0){
        return "FizzBuzz";
    }
    if(x % 3 == 0){
        return "Fizz";
    }
    if(x % 5 == 0){
       return "Buzz";
    }
    return x + "!";

}

function teaParty(tea, candy){
    if( tea < 5 || candy < 5){
        return 0;
    }else if(tea >= candy * 2 || candy >= tea * 2) {
        return 2;
    }else if(tea >= 5 || candy >= 5){
        return 1;
    }
}

function blackjack(x, y) {
    if (x > 21 && y > 21) {
        return 0;
    } else {
        if (x <= 21 && y > 21) {
            return x;
        }
        if (x > 21 && y <= 21) {
            return y;
        }
        if(x > y){
            return x;
        } else{
            return y;
        }
    }
}

function loneSum(a, b, c){
    var sum = a + b + c
    if( a == b || b == c || c == a){
        if( a == b && b == c){
            return 0;
        }else{
            if( a == b){
                return c;
            }
            if( b == c){
                return a;
            }
            if ( c == a){
                return b;
            }
        }

    } else{
        return sum;
    }
}