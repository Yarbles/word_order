var wordOrder = function(input) {
    var words = input.toLowerCase().split(" ").sort();

    var i, j, n;

    n = words.length;

    var tally = [];

    var count = [];

    var repeating_words = {};

    for (i=0; i<n; i++) {
        for (j=i+1; j<n; j++) {

            if (words[i] == words[j]) {
                //Return key and # of repeats for any repeat words
                if ($.inArray(words[i], repeating_words) == -1) {
                    repeating_words.push(words[i]);

                }

                tally++;
                count.push(tally);
                tally = 0;
            }

            //WE WANT TO DO THIS: repeating_words.words[i] = count;

            //repeating_words = {words[i] : count[i] };
        }
    }


}



// var myCurrentArray = new Array("apple","banana","apple","orange","banana","apple");
//
// var counts = {};
//
// for(var i=0;i< myCurrentArray.length;i++)
// {
//   var key = myCurrentArray[i];
//   counts[key] = (counts[key])? counts[key] + 1 : 1 ;
//
// }
//
// alert(counts['apple']);
// alert(counts['banana']);
