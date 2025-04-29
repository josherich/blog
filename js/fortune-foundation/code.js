document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    let selectedCard = null;

    const cardValueMap = { A: 1, J: 11, Q: 12, K: 13 };
    const cardValueReverseMap = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K'};

    // --- Helper Functions ---

    function getCardValue(card) {
        const rawValue = card.dataset.value;
        return cardValueMap[rawValue] || parseInt(rawValue);
    }

    function getNextMinorValue(value) {
        if (value === 'K') return null; // King is the highest
        const numValue = cardValueMap[value] || parseInt(value);
        const nextNum = numValue + 1;
        return cardValueReverseMap[nextNum] || nextNum.toString();
    }

    function getNextMajorValue(value) {
        return value + 1;
    }

    function getPrevMajorValue(value) {
        return value - 1;
    }

    function isTailCard(card) {
        return card.parentElement.lastElementChild === card;
    }

    function updateTailCards() {
        // Remove tail-card class from all cards first
        document.querySelectorAll('.card.tail-card').forEach(c => c.classList.remove('tail-card'));
         // Add tail-card class to the actual tail cards in queues
         document.querySelectorAll('.queue').forEach(queue => {
             if (queue.lastElementChild && queue.lastElementChild.classList.contains('card')) {
                 queue.lastElementChild.classList.add('tail-card');
             }
         });
         // Tail cards in foundations are NOT interactive
         document.querySelectorAll('.foundation-slot .card').forEach(c => c.classList.remove('tail-card'));
    }

     function clearHighlights() {
         document.querySelectorAll('.clickable').forEach(el => el.classList.remove('clickable'));
     }

    // --- Validation Logic ---

    function isValidTableauMove(cardToMove, targetCard) {
        const moveValue = getCardValue(cardToMove);
        const targetValue = getCardValue(targetCard);
        const moveSuit = cardToMove.dataset.suit;
        const targetSuit = targetCard.dataset.suit;

        // Can only move minor cards onto minor cards in tableau

        if ((!moveSuit && targetSuit) || (moveSuit && !targetSuit)) {
            return false; // Major cards cannot stack in tableau based on rules
        }

        // Must be same suit and adjacent value (increasing or decreasing)
        return moveSuit === targetSuit && (moveValue === targetValue + 1 || moveValue === targetValue - 1);
    }

    function isValidMinorFoundationMove(cardToMove, foundationSlot) {
        const cardValue = cardToMove.dataset.value; // Use string value 'A', '2'...'K'
        const cardSuit = cardToMove.dataset.suit;
        const foundationSuit = foundationSlot.dataset.suit;
        const expectedValue = foundationSlot.dataset.next;

        return cardSuit === foundationSuit && cardValue === expectedValue;
    }

    function isValidMajorFoundationMove(cardToMove, foundationSlot) {
        const cardVal = getCardValue(cardToMove);
        const foundationId = foundationSlot.id;
        const expectedValue = parseInt(foundationSlot.dataset.next);

        if (foundationId === 'major-0') {
            // Building up from 0
            return cardVal === expectedValue;
        } else if (foundationId === 'major-21') {
            // Building down from 21
            return cardVal === expectedValue;
        }
        return false;
    }

    // Gets the *string* representation for the next card (A, 2.. K)
    function getNextMinorValueStr(valueStr) {
        if (!valueStr) return 'A'; // If foundation is empty, expect Ace
        if (valueStr === 'K') return null; // King is the highest
        const numValue = cardValueMap[valueStr] || Number(valueStr);
        const nextNum = numValue + 1;
        return cardValueReverseMap[nextNum] || nextNum.toString();
    }

    // --- Auto Collection ---
    function autoCollectFoundations() {
        let moveMade;
        do {
            moveMade = false;
            // Get current tail cards from tableau queues
            const availableCards = Array.from(document.querySelectorAll('#tableau .queue .card.tail-card'));

            if (availableCards.length === 0) break; // No cards left to check

            // Check Minor Foundations
            const fblock = document.querySelector('.foundation-block.empty');
            const minorFoundations = fblock ? document.querySelectorAll('.foundation-slot.minor') : [];
            for (const foundation of minorFoundations) {
                const expectedSuit = foundation.dataset.suit;
                const expectedValueStr = foundation.dataset.next; // String value 'A', '2'...'K'

                // Find the first available card that matches
                const cardToMoveIndex = availableCards.findIndex(card =>
                    card.dataset.suit === expectedSuit &&
                    card.dataset.value === expectedValueStr
                );

                if (cardToMoveIndex > -1) {
                    const cardToMove = availableCards[cardToMoveIndex];
                    const sourceQueue = cardToMove.parentElement;

                    console.log(`Auto-moving ${cardToMove.textContent} to Minor ${expectedSuit}`);

                    // Perform the move
                    foundation.appendChild(cardToMove);
                    const nextValStr = getNextMinorValueStr(cardToMove.dataset.value);
                    foundation.dataset.next = nextValStr || 'K'; // Store 'K' if king reached

                    // Update source queue
                    if (sourceQueue && sourceQueue.children.length === 0) {
                        sourceQueue.classList.add('empty');
                    }

                    // Remove placeholder if it exists
                     const placeholder = foundation.querySelector('.placeholder');
                     if(placeholder) placeholder.style.display = 'none';

                    // Remove from available list for this pass and signal move made
                    availableCards.splice(cardToMoveIndex, 1);
                    moveMade = true;
                    // No break here, check other foundations too in the same pass
                }
            }

             // Check Major Foundations
             const majorFoundation0 = document.getElementById('major-0');
             const majorFoundation21 = document.getElementById('major-21');

             // Major 0 (Low pile)
             const expectedLowValue = parseInt(majorFoundation0.dataset.next);
              const lowCardIndex = availableCards.findIndex(card =>
                  card.classList.contains('major') && getCardValue(card) === expectedLowValue
              );

              if (lowCardIndex > -1) {
                   const cardToMove = availableCards[lowCardIndex];
                   const sourceQueue = cardToMove.parentElement;
                   console.log(`Auto-moving ${cardToMove.textContent} to Major Low`);

                   majorFoundation0.appendChild(cardToMove);
                   majorFoundation0.dataset.next = getNextMajorValue(expectedLowValue);

                   if (sourceQueue && sourceQueue.children.length === 0) {
                        sourceQueue.classList.add('empty');
                   }
                    const placeholder = majorFoundation0.querySelector('.placeholder');
                    if(placeholder) placeholder.style.display = 'none';

                   availableCards.splice(lowCardIndex, 1);
                   moveMade = true;
              }

             // Major 21 (High pile)
             const expectedHighValue = parseInt(majorFoundation21.dataset.next);
              const highCardIndex = availableCards.findIndex(card =>
                  card.classList.contains('major') && getCardValue(card) === expectedHighValue
              );

              if (highCardIndex > -1) {
                   const cardToMove = availableCards[highCardIndex];
                   const sourceQueue = cardToMove.parentElement;
                   console.log(`Auto-moving ${cardToMove.textContent} to Major High`);

                   majorFoundation21.appendChild(cardToMove);
                   majorFoundation21.dataset.next = getPrevMajorValue(expectedHighValue);

                    if (sourceQueue && sourceQueue.children.length === 0) {
                        sourceQueue.classList.add('empty');
                   }
                    const placeholder = majorFoundation21.querySelector('.placeholder');
                    if(placeholder) placeholder.style.display = 'none';

                   availableCards.splice(highCardIndex, 1);
                   moveMade = true;
              }

            // After checking all foundations, update tail cards IF a move was made in this pass
            if (moveMade) {
                updateTailCards();
            }

        } while (moveMade); // Repeat if any card was moved in the last pass
    }

    function moveCard(from, to) {
        const fromCard = document.querySelector(`#queue-${from} .card.tail-card`);
        const toQueue = document.querySelector(`#queue-${to}`);
        if (fromCard && toQueue) {
            fromCard.classList.add('clickable');
            toQueue.classList.add('clickable');
            toQueue.appendChild(fromCard);
            updateTailCards();
        }
    }
    const sp = 1000;
    function moveCards(insts) {
        insts.forEach(([from, to], i) => {
            setTimeout(() => {
                moveCard(from+1, to+1);
                autoCollectFoundations();
                clearHighlights();
            }, sp * (i+1))
        });
    }
    function setStepText(inst) {
        const [from, to] = inst;
        const stepTextElement = document.querySelector('.step-control .step-text');
        if (stepTextElement) {
            stepTextElement.textContent = `Move from Queue ${from+1} to ${to+1}`
        }
    }
    function stepMoveCards(insts) {
        const stepButton = document.querySelector('.step-button');
        if (!stepButton) return;
        let idx = 0;
        setStepText(insts[idx]);
        stepButton.addEventListener('click', () => {
            if (idx < insts.length) {
                moveCard(insts[idx][0]+1, insts[idx][1]+1);
                autoCollectFoundations();
                clearHighlights();
                idx++;
                setStepText(insts[idx])
            }
        });
    }
    window.moveCards = moveCards;

    // --- Event Handling ---
    gameBoard.addEventListener('click', (event) => {
        const clickedElement = event.target;

        // --- Card Selection ---
        if (clickedElement.classList.contains('card') && isTailCard(clickedElement) && !selectedCard) {
            // Check if it's a movable tail card (not in foundation)
            if (!clickedElement.closest('.foundation-slot')) {
                 if (selectedCard === clickedElement) {
                     // Deselect if clicking the same card again
                     selectedCard.classList.remove('selected');
                     selectedCard = null;
                     clearHighlights();
                 } else {
                     // Deselect previous card if any
                     if (selectedCard) {
                         selectedCard.classList.remove('selected');
                     }
                     // Select the new card
                     selectedCard = clickedElement;
                     selectedCard.classList.add('selected');
                     // Highlight valid targets
                     highlightValidTargets(selectedCard);
                 }
                 return; // Don't process move on the same click as selection
             }
        }

        // --- Card Movement ---
        if (selectedCard) {
            let moveSuccessful = false;
            const targetElement = clickedElement;

            // Try moving to another Tableau card
            if (targetElement.classList.contains('card') && isTailCard(targetElement) && !targetElement.closest('.foundation-slot')) {
                if (isValidTableauMove(selectedCard, targetElement)) {
                    targetElement.parentElement.appendChild(selectedCard);
                    moveSuccessful = true;
                }
            }
            // Try moving to an empty Tableau queue
            else if (targetElement.classList.contains('queue') && targetElement.classList.contains('empty')) {
                 targetElement.appendChild(selectedCard);
                 targetElement.classList.remove('empty'); // No longer empty
                 moveSuccessful = true;
            }
            // Try moving to a Minor Foundation slot
            else if (targetElement.classList.contains('foundation-slot') && targetElement.classList.contains('minor')) {
                if (isValidMinorFoundationMove(selectedCard, targetElement)) {
                // Move card visually
                targetElement.appendChild(selectedCard);
                // Update foundation's expected next card
                const nextVal = getNextMinorValue(selectedCard.dataset.value);
                targetElement.dataset.next = nextVal || 'K'; // Mark K if king reached
                // Remove placeholder if it exists
                    const placeholder = targetElement.querySelector('.placeholder');
                    if(placeholder) placeholder.style.display = 'none';
                    moveSuccessful = true;
                }
            }
            // Try moving to a Major Foundation slot
            else if (targetElement.classList.contains('foundation-slot') && targetElement.classList.contains('major')) {
                if (isValidMajorFoundationMove(selectedCard, targetElement)) {
                    // Move card visually
                    targetElement.appendChild(selectedCard);
                // Update foundation's expected next card
                    if(targetElement.id === 'major-0') {
                    targetElement.dataset.next = getNextMajorValue(getCardValue(selectedCard));
                    } else { // major-21
                    targetElement.dataset.next = getPrevMajorValue(getCardValue(selectedCard));
                    }
                    // Remove placeholder if it exists
                    const placeholder = targetElement.querySelector('.placeholder');
                    if(placeholder) placeholder.style.display = 'none';
                    moveSuccessful = true;
                }
            }
            else if (targetElement.classList.contains('foundation-block') && targetElement.classList.contains('empty')) {
                targetElement.appendChild(selectedCard);
                targetElement.classList.remove('empty');
                moveSuccessful = true;
            }

            // --- Post-Move Cleanup ---
            if (moveSuccessful) {
                 // Check if the source queue became empty
                 const sourceQueue = selectedCard.closest('.queue:not(.foundation-slot)'); // Find original queue if it wasn't foundation
                 if (sourceQueue && sourceQueue.children.length === 0) {
                      sourceQueue.classList.add('empty');
                 }
                 selectedCard.classList.remove('selected');
                 selectedCard = null;
                 updateTailCards(); // Recalculate which cards are now tails
                 clearHighlights();
                 // TODO: Check for win condition
            } else {
                 // If click was not a valid move target, deselect
                 if(!targetElement.classList.contains('clickable')) {
                     selectedCard.classList.remove('selected');
                     selectedCard = null;
                     clearHighlights();
                 }
            }
            autoCollectFoundations();
        }
    });

    // --- Highlight potential targets ---
    function highlightValidTargets(card) {
        clearHighlights(); // Clear previous highlights

        // Check Tableau moves
        document.querySelectorAll('.queue .card.tail-card').forEach(targetCard => {
            if (isValidTableauMove(card, targetCard)) {
            console.log(targetCard)
            targetCard.classList.add('clickable'); // Highlight target card itself for tableau stack
            }
        });

        // Check Empty Tableau queues
        document.querySelectorAll('.queue.empty').forEach(emptyQueue => {
            emptyQueue.classList.add('clickable'); // Any card can move to empty queue
        });

        // Check Minor Foundations
        const fblock = document.querySelector('.foundation-block.empty');
        if (fblock) {
            document.querySelectorAll('.foundation-slot.minor').forEach(slot => {
                if (isValidMinorFoundationMove(card, slot)) {
                    slot.classList.add('clickable');
                }
            });
        }

        // Check Major Foundations
        document.querySelectorAll('.foundation-slot.major').forEach(slot => {
            if (isValidMajorFoundationMove(card, slot)) {
                slot.classList.add('clickable');
            }
        });

        if (fblock) {
            fblock.classList.add('clickable');
        }
     }

    // --- Initial Setup ---
    updateTailCards(); // Set initial tail cards

    stepMoveCards([
    [ 0, 5 ],
    [ 10, 6 ],
    [ 0, 7 ],
    [ 10, 2 ],
    [ 10, 0 ],
    [ 10, 5 ],
    [ 10, 6 ],
    [ 5, 10 ],
    [ 5, 6 ],
    [ 4, 5 ],
    [ 10, 6 ],
    [ 0, 10 ],
    [ 0, 4 ],
    [ 10, 4 ],
    [ 2, 3 ],
    [ 2, 10 ],
    [ 3, 10 ],
    [ 6, 10 ],
    [ 6, 10 ],
    [ 6, 10 ],
    [ 6, 10 ],
    [ 2, 0 ],
    [ 2, 10 ],
    [ 1, 10 ],
    [ 2, 10 ],
    [ 2, 4 ],
    [ 9, 4 ],
    [ 1, 7 ],
    [ 3, 1 ],
    [ 2, 4 ],
    [ 3, 2 ],
    [ 6, 2 ],
    [ 3, 6 ],
    [ 3, 0 ],
    [ 5, 3 ],
    [ 6, 5 ],
    [ 6, 5 ],
    [ 6, 5 ],
    [ 6, 8 ],
    [ 5, 6 ],
    [ 5, 6 ],
    [ 9, 6 ],
    [ 9, 5 ],
    [ 9, 2 ],
    [ 9, 10 ],
    [ 8, 0 ],
    [ 8, 0 ],
    [ 8, 5 ],
    [ 7, 0 ],
    [ 7, 0 ],
    [ 10, 7 ],
    [ 10, 7 ],
    [ 10, 7 ],
    [ 2, 3 ],
    [ 2, 3 ],
    [ 1, 3 ],
    [ 1, 2 ],
    [ 7, 0 ],
    [ 6, 0 ],
    [ 1, 0 ],

    ]);

});
