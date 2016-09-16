import Answer from 'Answer';

describe(`Answer`, () => {
    let answer;

    beforeEach(() => {
        answer = new Answer();
    });

    it(`Should give the correct answer`, () => {
        expect(answer.answer).to.equal(42);
    });
});
