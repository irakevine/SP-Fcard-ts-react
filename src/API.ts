



export enum Difficulty{
    EASY= "easy",
    MEDIUM= "medium",
    HARD="hard"
}
export const fetchQuizQuestions = async(amount:number,difficulty:Difficulty)=>{
const endppoint= `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
const data=  await (await fetch(endppoint)).json()
console.log(data);

}