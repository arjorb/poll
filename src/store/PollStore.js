import { writable } from 'svelte/store';

const PollStore = writable([
  {
    question: 'Pyton or JavaScript',
    answerA: 'JavaScript',
    answerB: 'Pyton',
    voteA: 10,
    voteB: 15,
    id: 1,
  },
]);

export default PollStore;
