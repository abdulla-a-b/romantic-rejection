const questions = [

"Romantic rejection made me emotionally stronger",
"Rejection motivated me to focus on my career",
"I became more independent after rejection",
"Rejection pushed me to prove myself",
"My self-confidence increased after rejection",
"I started working harder after rejection",

"Rejection caused long-term sadness",
"I lost motivation after rejection",
"Rejection made me feel worthless",
"I avoided relationships after rejection",
"Rejection made me emotionally mature",
"I became more careful in relationships",

"I focused on education after rejection",
"I worked harder for financial independence",
"Rejection made me think about moving abroad",
"I became more ambitious after rejection",
"Rejection increased my career goals",
"I improved my professional skills",

"I started making my own decisions",
"I depended less on others after rejection",
"Rejection made me more self-reliant",
"I became more risk-taking after rejection",
"I focused on personal development",
"I changed my life direction after rejection",

"Rejection destroyed my confidence",
"Rejection helped me grow as a person",
"Rejection improved my life",
"Rejection made me stronger than before",
"My life improved after rejection",
"Rejection helped me discover my potential"

];

const container = document.getElementById("survey");

questions.forEach((q, i) => {

let html = `
<div class="question">
<p>${i+1}. ${q}</p>
<select id="q${i}">
<option value="-4">-4</option>
<option value="-3">-3</option>
<option value="-2">-2</option>
<option value="-1">-1</option>
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>
</div>
`;

container.innerHTML += html;

});

function submitSurvey(){

let responses = {}

questions.forEach((q,i)=>{
responses["q"+i] = document.getElementById("q"+i).value
})

console.log(responses)

document.getElementById("status").innerHTML =
"Survey submitted (save JSON file manually or connect Python API)"

}
