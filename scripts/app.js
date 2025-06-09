const myFullName = "Samip Patel";
const myStudentNumber = 1243416;

console.log(`${myFullName} - ${myStudentNumber}`);

const primaryHeadingContent = document.querySelector("h1");
primaryHeadingContent.innerHTML = `${myFullName} - ${myStudentNumber}`;
console.log(primaryHeadingContent.innerHTML);

primaryHeadingContent.classList.add("primaryHeading");