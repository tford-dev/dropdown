const letterDropdown = document.getElementById("letter__dropdown");
const wordDropdown = document.getElementById("word__dropdown");
const select = document.getElementsByTagName("select");

const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

const stateArray = Object.keys(state).map((key) => [String(key), state[key]]);

const addOption = (arr) => {
    arr.forEach(arrElement => {
        letterDropdown.insertAdjacentHTML('beforeend',
        `
            <option value="${arrElement[0]}">${arrElement[0]}</option>
        `)

        wordDropdown.insertAdjacentHTML('beforeend', `
            <option value="${arrElement[1]}">${arrElement[1]}</option>
        `)
    })
};

const matchOptions = (arr) => {
    for(let i = 0; i < (arr.length); i++){
        for(let j = 0; j < (select.length); j++){
            if(select[j].selectedIndex === i){
                select[select.length - 1].selectedIndex = i; 
            } 
        }
        for(let k = select.length - 1; k >= 0; k--){
            if(select[k].selectedIndex === i){
                select[select.length - 1].selectedIndex = i; 
            } 
        }
    }
}

console.log(stateArray);

addOption(stateArray);

select[0].addEventListener("change", ()=>{matchOptions(stateArray)});



