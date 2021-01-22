

//solution -01


function kilometerToMeter(kilometer){
    var meter = kilometer * 1000 ;
    return meter;
}

var calculateMeter = kilometerToMeter(5);
console.log(calculateMeter);



// solution -02


function budgetCalculator(watch, mobile, laptop){

    var totalWatchPrice = watch * 50 ;
    var totalMobilePrice = mobile * 100 ;
    var totalLaptopPrice = laptop *500 ;

    var totalPurchasePrice = totalWatchPrice + totalMobilePrice + totalLaptopPrice ;

    return totalPurchasePrice ;

}

var totalBudget = budgetCalculator(5, 11, 3);

console.log(totalBudget);


//solution -03


function hotelCost(day){

    var totalHotelRent = 0;
        if ( day <= 10 ){
            totalHotelRent = day * 100 ;
        }
        else if(day <= 20 ){

            var first10DayRent =  10 * 100 ;
            var remainDay = day - 10 ;
            var second10DayRent = remainDay * 80;
            totalHotelRent = first10DayRent + second10DayRent ;
            console.log(totalHotelRent);
        }
        else{
            var first10DayRent =  10 * 100 ;
            var second10DayRent = 10 * 80;
            var remainDay = day - 20 ;
            var after20DayRent = remainDay * 50;
            totalHotelRent = first10DayRent + second10DayRent + after20DayRent;
        }

    return totalHotelRent;

}

var totalHotelPrice = hotelCost(26);
console.log(totalHotelPrice);



// solution -04

function megaFriend(largeFriendName){

    var nameLength = 0;
    var longestName;
      
        for (var i = 0; i < largeFriendName.length; i++) {
        
            if (largeFriendName[i].length > nameLength) {
            var nameLength = largeFriendName[i].length;
            longestName = largeFriendName[i];
            }
        }  

    return longestName;

}

console.log(megaFriend([ 'shofik', 'asad' , 'rafique', 'ashique' , 'hasibul']));

