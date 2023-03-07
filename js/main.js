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
        const MAX_GUESS = 15;
        // Contains the max time available to the player in milliseconds:
        const MAX_TIME = 150000;
    
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
        // Cached HTML element that is the active card or active card status.
        let actvCrd;
        // NUmber which stores remaining time.
        let remTime;
  

    /*----- Cached elements  -----*/
        // Card grid elements:
        const crdEls = [...document.querySelectorAll('#card-grid > div')];
        // Restart button:
        const rstrtBtn = document.getElementById('restart');
        // Timer element:
        const tmr = document.getElementById('tmr-txt');
        // Message element:
        const msgEl = document.querySelector('h1');
        // Remaining guesses element:
        const remGuessEl = document.getElementById('guess-txt');
        // (Stretch goal) Animated element(s):

    /*----- Event listeners -----*/
        // Start button event listener:
        document.getElementById('start').addEventListener('click',strt);
        // Card grid elements event listener:
        document.getElementById('card-grid').addEventListener('click',hdlClick);
        // Restart button event listener:
        rstrtBtn.addEventListener('click',rstrt)
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
                /* Uses this helper function to split original array into four arrays for each row then returns result: */
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
                    // Set message element's text to "GAME START!" :
                    msgEl.innerText = 'GAME START!';
                    // Re-renders game state while cards are face down:
                    render();
                }, 3000);
            }

            // crdReset() function:
            function crdReset() {
                crdEls.forEach(crd => {
                    // Removes all classes on a given card:
                    crd.className='';
                });
            }

        /* init() function. */
        function init() {
            // Resets the cards:
            crdReset();
            // Sets the active card to 0 to show that there is no active card:
            actvCrd = 0;
            // Sets the variable which tracks if the game has started to false:
            didGmStrt = false;
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
            // Set message element's text to "You have 3 seconds to memorize." :
            msgEl.innerText = 'You have 3 seconds to memorize.';
            // Calls game start function to start the game:
            gameStart();
        }

    // Initialization: 
    
    function strt(evt) {
        /* Hides the start button: */
        evt.target.style.display = 'none';
        /* Initializes game after start is pressed: */
        init();

        /* --REMOVE ON FINAL VERSION-- After-initialization tests and logs: */
        console.log(crdGrid);
    }

    function rstrt(evt) {
        /* Re-initializes the game after re-start is pressed: */
        init();
    }

    // State Change functions:

        /* hdlClick() helper functions. */
        function checkMatch(crdTyp,rowIdx,colIdx) {
            // Creates an array of the active card's id string:
            actvIdArr = [...actvCrd.id];
            // Sets the active row index equal to that contained in the id:
            actvRowIdx = +actvIdArr[3];
            // Sets the active column index equal to that contained in the id:
            actvColIdx = +actvIdArr[1];
            // Finds the active card's type using the index values and stores it in this variable:
            actvCrdTyp = crdGrid[actvRowIdx][actvColIdx];
            // Sets the active card to 1 signifying that the active card is being compared.
            actvCrd = 1;
            // Sets the active card to face-up: 
            crdGridVis[rowIdx].splice(colIdx,1,1);
            // Re-renders the card grid:
            renderCrdGrid();
            // Determines if active and selected card match:
            if (actvCrdTyp === crdTyp) {
                /* Sets the active card to 0 signifying that there are no active cards: */
                actvCrd = 0;
                /* Sets message element's text to "MATCH!": */
                msgEl.innerText = 'MATCH!';

                /* --REMOVE ON FINAL VERSION-- Match console log: */
                console.log('Match!');
            } else {
                /* Subtracts 1 from remaining guesses: */
                remGuess -= 1;
                /* Sets message element's text to "Incorrect. Guess again.": */
                msgEl.innerText = 'Incorrect. Guess again.';
                /* Re-renders the remaining guesses: */
                renderAtmps();

                /* --REMOVE ON FINAL VERSION-- Match console log: */
                console.log('No Match!');

                setTimeout(() => {
                    // Sets the active card to 0 signifying that there are no active cards:
                    actvCrd = 0;
                    // Sets the active card face-down:
                    crdGridVis[actvRowIdx].splice(actvColIdx,1,0);
                    // Sets the selected card face-down:
                    crdGridVis[rowIdx].splice(colIdx,1,0);
                    // Re-renders the card grid:
                    renderCrdGrid();
                }, 1500);
            }

            /* --REMOVE ON FINAL VERSION-- Active card index, type and visibility: */
            console.log(`Row: ${actvRowIdx} | Column: ${actvColIdx} | Card Visibility: ${crdGridVis[actvRowIdx][actvColIdx]} | Card Type: ${actvCrdTyp}`);
        }

        /* hdlClick() function. */
        function hdlClick(evt) {
            if (evt.target.id !== 'card-grid' && didGmStrt === true) {
                // Creates an array of the event target's id string:
                let idArr = [...evt.target.id];
                // Sets the row index equal to that contained in the id:
                let rowIdx = +idArr[3];
                // Sets the column index equal to that contained in the id:
                let colIdx = +idArr[1];
                // Finds if the card is visible using the index values and stores it in this variable:
                let crdVis = crdGridVis[rowIdx][colIdx];
                // Finds the card type using the index values and stores it in this variable:
                let crdTyp = crdGrid[rowIdx][colIdx];
                // Determines the outcome of the event: 
                if (actvCrd === 1) {
                    /* Returns because there is already an active card being compared: */
                    return;
                } else if (actvCrd === evt.target) {
                    /* Returns because the active card cannot be compared with itself: */
                    return;
                } else if (actvCrd === 0) {
                    if (crdVis === 1) {
                        // Returns because the selected card is already face-up:
                        return;
                    } else {
                        // Sets the selected card to face-up:
                        crdGridVis[rowIdx].splice(colIdx,1,1);
                        // Sets the selected card to the active card:
                        actvCrd = evt.target;
                        // Re-renders the card grid:
                        renderCrdGrid();
                    }
                } else {
                    checkMatch(crdTyp,rowIdx,colIdx);
                }
                winCheck();

                /* --REMOVE ON FINAL VERSION-- Event target index, type, and visibility: */
                console.log(`Row: ${rowIdx} | Column: ${colIdx} | Card Visibility: ${crdVis} | Card Type: ${crdTyp}`);
            }
        }

    // State Check functions:

        /* State check auxiliary function. */
        function grdCheck() {
           let crdGridChk = crdGridVis.flat();
           return crdGridChk.every(val => val === 1);
        }
    
        /* winCheck() helper functions. */
        function onWin() {
            // Re-renders the entire game:
            render();
            // Sets message element's text to "YOU WIN!" : 
            msgEl.innerText = 'YOU WIN!';
        }

        /* winCheck() function. */
        function winCheck() {
            if (grdCheck()) {
                onWin();
            } else {
                lossCheck();
            }
        }

        /* timer() function. */
        function timer() {

        }

        /* lossCheck() helper functions. */
        function onLose() {
            // Re-renders the entire game:
            render();
            // Sets message element's text to "YOU LOSE!" :
            msgEl.innerText = 'YOU LOSE!';
        }

        /* lossCheck() function. */
        function lossCheck() {
            if (remGuess <= 0 || remTime <= 0) {
                onLose();
            }
        }
        
    // Render functions:

        /* render() helper functions. */
        function renderCrdGrid() {
            crdEls.forEach(crd => {
                // Creates an array of the cards's id string:
                let idArr = [...crd.id];
                // Sets the row index equal to that contained in the id:
                let rowIdx = +idArr[3];
                // Sets the column index equal to that contained in the id:
                let colIdx = +idArr[1];
                // Finds if the card is visible using the index values and stores it in this variable:
                let crdVis = crdGridVis[rowIdx][colIdx];
                // Finds the card type using the index values and stores it in this variable:
                let crdTyp = crdGrid[rowIdx][colIdx];
                // Determines how to render depending on if the game has started:
                if (!didGmStrt) {
                    /* Adds a class to the card that is equal to the card type: */
                    crd.classList.add(crdTyp);
                } else {
                    /* Determines the card's visibility: */
                    if (crdVis && crd.classList.contains('not-vis')) {
                        // Removes the not visible card class:
                        crd.classList.remove('not-vis');
                    } else if (!crdVis && !crd.classList.contains('not-vis')) {
                        // Adds the not visible card class:
                        crd.classList.add('not-vis');
                    }
                }
            })
        }

        function renderCtrls() {
            if (!grdCheck()) {
                /* Changes restart button from display:none to visibility:hidden: */
                rstrtBtn.style.visibility = 'hidden';
                rstrtBtn.style.display = 'block';
            } else if (grdCheck() || lossCheck()) {
                /* Changes restart button from hidden to visible: */
                rstrtBtn.style.visibility = 'visible';
            }
        }

        function renderAtmps() {
            // Displayes the remaining guesses available to the player:
            remGuessEl.innerText = ` ${remGuess} guesses.`
        }

        function renderTmr() {
            if (didGmStrt) {
                // Makes the timer elements visible:
                document.getElementById('timer-els').style.visibility = 'visible';
            } else if (!didGmStrt) {
                // Makes the timer elements hidden:
                document.getElementById('timer-els').style.visibility = 'hidden';
            }
        }

        /* render() function. */
        function render() {
            renderCrdGrid();
            renderCtrls();
            renderTmr();
            renderAtmps();
        }

// Notes:
