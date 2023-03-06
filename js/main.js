// Test log to confirm connection with server.

console.log('Live server test.');

// Memory Match:

    /*----- Constants -----*/
    // Contains the reference value and class name key value pairs:
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
    // Contains the keys for the class names stored as values in the object above:
    const CARD_REF = ['a','b','c','d','e','f','g','h','i','j','k','l'];
    // Contains the max number of guess attempts available to the player:
    const MAX_GUESS = 10;
    
    /*----- State variables -----*/
    // Array of rows on the card grid used to determine if a card is face-up or not.
    let crdGridVis;
    // Array of rows on the card grid used to store card type.
    let crdGrid;
    // Number which stores max guesses.
    let remGuess;
    // String which stores win/loss.
    let rslt;
    // Boolean which stores if game has started yet.
    let didGmStrt;
  

    /*----- Cached elements  -----*/
    // Card grid elements:
    const crdEls = [...document.querySelectorAll('#card-grid > div')];
    // Restart button:
    // Timer element:
    // (Stretch goal) Animated element(s):

    /*----- Event listeners -----*/
    // Card grid elements event listener:
    document.getElementById('card-grid').addEventListener('click',hdlClick);
    // Restart button event listener:
    // Timer element event listener:

    /*----- Functions -----*/

    // Initialization functions:

        /* init() auxiliary functions. */
        function bttrRandom(n) {
            // Create a better random function so that there are less matches placed in a row.
        }

        /* init() helper functions. */

            // crdRandomizer() helper functions:
            function spliceToFourRows(arr) {
                /* --REPLACE THIS WITH: CARD_REF.length/4-- Integer determining number of values in a row: */
                let nPerRow = 6;
                /* Array of arrays resulting from function: */
                let arrRes;
                /* Array representing the first row: */
                const arrRowOne = arr.splice(-nPerRow);
                /* Array representing the second row: */
                const arrRowTwo = arr.splice(-nPerRow);
                /* Array representing the third row: */
                const arrRowThree = arr.splice(-nPerRow);
                /* Array representing the fourth row: */
                const arrRowFour = arr.splice(-nPerRow);
                /* Sets result array to an array of four rows then returns result array: */
                arrRes = [[...arrRowOne], [...arrRowTwo], [...arrRowThree], [...arrRowFour]];
                return arrRes;
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
                    // --REPLACE THIS WITH: bttrRandom()-- Calculates a random index for array of n length: 
                    idx = Math.floor(Math.random()*n);
                    // Sets a variable to the value corresponding with the random index:
                    let val = arrCrdRef[idx];
                    // Determines behavior of adding new values to result array:
                    if (arrCrdRes.includes(val)) {
                        /* Sends duplicate to beginning of array rather than end to decrease number of adjacent matches: */
                        arrCrdRes.unshift(val);
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

            // gameStart() function:
            function gameStart() {
                setTimeout(() => {
                    // Sets all of the cards on the grid to face-down:
                    crdGridVis = [
                        [0,0,0,0,0,0],  // <---[Row 0]
                        [0,0,0,0,0,0],  // <---[Row 1]
                        [0,0,0,0,0,0],  // <---[Row 2]
                        [0,0,0,0,0,0],  // <---[Row 3]
                    ];
                    // Set remaining guesses to max guesses:
                    remGuess = MAX_GUESS;
                    // Sets timer:
                    timer();
                    // Sets game start variable to true:
                    didGmStrt = true;
                    // Set message text to "GAME START!" :
                        /* --NOT IMPLEMENTED AT THIS TIME-- */
                    // Re-renders game state while cards are face down:
                    render();
                }, 3000);
            }

            // crdReset() function:
            function crdReset() {
                
            }

        /* init() function. */
        function init() {
            // Sets the card grid to a random placement of 24 cards containing 12 matches:
            crdGrid = crdRandomizer();
            // Starts all of the cards on the grid to face-up:
            crdGridVis = [
                [1,1,1,1,1,1],  // <---[Row 0]
                [1,1,1,1,1,1],  // <---[Row 1]
                [1,1,1,1,1,1],  // <---[Row 2]
                [1,1,1,1,1,1],  // <---[Row 3]
            ];
            // Sets results to null:
            rslt = null;
            // Sets remaining guesses to 'locked' while all cards are face-up:
            remGuess = 'locked';
            // Renders game state while cards are face-up:
            render();
            // Calls game start function to start the game:
            gameStart();
        }

    // Initialization: 

    init();

        /* --REMOVE ON FINAL VERSION-- After-initialization tests and logs: */
        console.log(crdGrid);

    // State Change functions:

        /* hdlClick() function. */
        function hdlClick(evt) {
            let idArr = [...evt.target.id];
            let rowIdx = idArr[3];
            let colIdx = idArr[1];
            
            console.log (`Row: ${rowIdx} Column: ${colIdx}`);
        }

    // State Check functions:

        /* winCheck() auxiliary function. */
        function checkMatch() {

        }

        /* winCheck() helper functions. */

        /* winCheck() function. */
        function winCheck() {

        }

        /* timer() function. */
        function timer() {

        }
 
        /* lossCheck() auxiliary function. */

        /* lossCheck() helper functions. */

        /* lossCheck() function. */
        
    // Render functions:

        /* render() helper functions. */
        function renderCrdGrid() {

        }

        function renderMsg() {

        }

        function renderCtrls() {

        }

        function renderTmr() {

        }

        /* render() function. */
        function render() {
            renderCrdGrid();
            renderMsg();
            renderCtrls();
            renderTmr();
        }

// Notes:
