/*
This is from the Basic JavaScript: Counting Cards lesson 
at https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
*/
    function cc(card) {
      // Only change code below this line
      switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
          count--;
          break;
      }
      if (count > 0){
        return count + " Bet";
      } else {
        return count + " Hold";
      }
      // Only change code above this line
    }
