// Test log to confirm connection with server.

console.log('Live server test.');

// Memory Match:

    /*----- Constants -----*/
    const CARD_TYPE = {
        'a': 'crd-type-1',
        'b': 'crd-type-2',
        'c': 'crd-type-3',
        'd': 'crd-type-4',
        'e': 'crd-type-5',
        'f': 'crd-type-6',
        'g': 'crd-type-7',
        'h': 'crd-type-8',
        'i': 'crd-type-9',
        'j': 'crd-type-10',
        'k': 'crd-type-11',
        'l': 'crd-type-12',     
    };

    const CARD_REF = ['a','b','c','d','e','f','g','h','i','j','k','l'];
    
    /*----- State variables -----*/
    // Array of rows on the card grid used to determine if a card is visible or not.
    let crdGridVis;
    // Array of rows on the card grid used to store card type.
    let crdGrid;
    // String which stores win/loss.
    let rslt;
  

    /*----- Cached elements  -----*/


    /*----- Event listeners -----*/


    /*----- Functions -----*/

    

    // Initialization functions:

        /* init() auxiliary functions. */


        /* init() helper functions. */

            // crdRandomizer() helper functions:
            function spliceToFourRows(arr) {
                /* Integer determining number of values in a row: */
                let n = 6;
                /* Array of arrays resulting from function: */
                let arrRes;
                /* Array representing the first row: */
                const arrRowOne = arr.splice(-n);
                /* Array representing the second row: */
                const arrRowTwo = arr.splice(-n);
                /* Array representing the third row: */
                const arrRowThree = arr.splice(-n);
                /* Array representing the fourth row: */
                const arrRowFour = arr.splice(-n);
                arrRes = [[...arrRowOne], [...arrRowTwo], [...arrRowThree], [...arrRowFour]];
                return arrRes;
            }

            function randomVal(n, arr) {
                /* Sets a variable to the value corresponding with the random index: */
                let val = arr[idx];
                /* Sets global reference value to that of 'val': */
                glblVal = val;
                /* Returns 'val': */
                return val;
            }

            // crdRandomizer() function:
            function crdRandomizer() {
                /* Integer determing possible outputs for randomizer: */
                let n = CARD_REF.length-1;
                /* Array resulting from randomizer: */
                let arrCrdRes = [];
                /* Array created from reference array and altered by randomizer: */
                let arrCrdRef;
                arrCrdRef = [...CARD_REF];
                /* Looping randomizer set for as long there are less than 2 duplicates of each of the 12 cards: */
                while (arrCrdRes.length < CARD_REF.length*2) {
                    // Calculates a random index for array of n length:
                    idx = Math.floor(Math.random()*n);
                    // Sets a variable to the value corresponding with the random index:
                    let val = arrCrdRef[idx];
                    // Determines behavior of adding new values to result array:
                    if (arrCrdRes.includes(val)) {
                        arrCrdRes.pop(val);
                        /* Removes the present 'val' from reference array so that it can not be selected again: */
                        arrCrdRef.splice(idx,1);
                        /* Subtracts 1 from n for new array lenght: */
                        n -= 1;
                    } else {
                        /* If there is not yet a matching value, adds to the end of array: */
                        arrCrdRes.push(val)
                    };
                }
                return spliceToFourRows(arrCrdRes)
            }
            
        /* init() function. */
        function init() {
            // Sets all of the cards on the grid to hidden:
            crdGridVis = [
                [0,0,0,0,0,0],  // <---[Row 1]
                [0,0,0,0,0,0],  // <---[Row 2]
                [0,0,0,0,0,0],  // <---[Row 3]
                [0,0,0,0,0,0],  // <---[Row 4]
            ];
            // Sets the card grid to a random placement of 2 duplicates of each of the 12 cards:
            crdGrid = crdRandomizer();
        }

    // Initialization: 

    init();

    console.log(crdGrid);
    // State Change functions:

    // State Check functions:

        /* winCheck() auxiliary function. */

        /* winCheck() helper functions. */

        /* winCheck() function. */
        function winCheck() {

        }

        /* timer() function. */
 
        /* lossCheck() auxiliary function. */

        /* lossCheck() helper functions. */

        /* lossCheck() function. */
        
    // Render functions:

        /* render() helper functions. */

        /* render() function. */
        function render() {

        }


// Notes:







