/* eslint piggyback/no-restricted-global-extend:0 */
import Answer from './Answer';

const answer = new Answer();
document.getElementById(`answer`).innerHTML = answer.answer;
