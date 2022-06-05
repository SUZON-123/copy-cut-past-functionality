/*
Requeirment---
1.Click the copy button and copy the Text form input filed
2. Click the Cut Button and Cut the Text form input Filed
3. Click The Past Buttun and Past the Text form Input filed
*/


/*
=== STEPS ===
step 1 : collect the necessary Component
step 2 : create te Necessary Function or handle EVNT;

*/


// COPY SECTION
// Step 1 : collect the necessary Component
const copyText = document.getElementById("copyText");
const copyBtn = document.getElementById("copy_btn");

// Step 2 : create te Necessary Function or handle EVNT;
copyBtn.addEventListener("click",function(){
    navigator.clipboard.writeText(copyText.value);
    this.innerHTML = "copied";
    this.addEventListener("mouseout",function(){
        this.innerHTML = "Copy";
    })
})




// CUT SECTION
// step 1 : collect the necessary Component
const cutText = document.getElementById("cutyText");
const cutBtn = document.getElementById("cut_btn");

// step 2 : create te Necessary Function or handle EVNT;
cutBtn.addEventListener("click",function(){
    navigator.clipboard.writeText(cutText.value);
    cutText.value = null;
    alert("Cut Success");
})




// PEST SECTION
// STEP 1 : collect the necessary Component;
const pastfiled = document.getElementById("pastyText");
const pastBtn = document.getElementById("past_btn");

// step 2 : create te Necessary Function or handle EVNT;
pastBtn.addEventListener("click",function(){
    pastfiled.value = null
    navigator.clipboard.readText().then(function(text){
        pastfiled.value = text;
    })
})

