let year2019 = document.getElementById("y2019")
let year2020 = document.getElementById("y2020")
let year2021 = document.getElementById("y2021")

let yearToCalculate;

function selectYear() {
    if (year2019.checked) {
        yearToCalculate = 2019;

    } else if (year2020.checked) {
        yearToCalculate = 2020;

    } else if (year2021.checked) {
        yearToCalculate = 2021;
    } else {
        yearToCalculate = "undef";
    }
}

let einzelnT = document.getElementById("solo")
let splitT = document.getElementById("couple")
let tarifToCalculate;

function selectZve(){
    if (einzelnT.checked) {
        tarifToCalculate = "grund";
        document.getElementById("secondPerson").style.display = "none";

    } else if (splitT.checked) {
        tarifToCalculate = "split";
        document.getElementById("secondPerson").style.display = "inline-block";
    }
}
let zvEnd;   //*   summe für Verlanlagung
let eSt;   //* Steuer
let showEST = document.getElementById("showSteuer");
let showMeMyMoney = document.getElementById("showNetto");

function showCalc(){

    document.getElementById("errorYear").innerHTML = "";
    document.getElementById("errorTarif").innerHTML = "";
    document.getElementById("errorInput1").style.display = "none";
    document.getElementById("errorInput1").innerHTML = "";
    document.getElementById("errorInput2").style.display = "none";
    document.getElementById("errorInput2").innerHTML = "";

    //*    variable for split full netto
    let halfBrutto;

    switch (tarifToCalculate){
        case "grund":
            zvEnd = Number(sumYear1.value);
            break;
        case "split":
            zvEnd = (Number(sumYear1.value) + Number(sumYear2.value))/2;
            halfBrutto = (Number(sumYear1.value) + Number(sumYear2.value))/2;
            break;
        default:
            console.log("something is gonna wrond but works");
            document.getElementById("errorTarif").innerHTML = "Veranlagungform nicht gewählt";
            break;
    }

    //*  check for empty input fields

    let checkField1 = document.getElementById("sumYear1");
    let checkField2 = document.getElementById("sumYear2");

    if (checkField1.value == 0 ||  checkField1.value ===0){
        document.getElementById("errorInput1").style.display = "block";
        document.getElementById("errorInput1").innerHTML = "EIngabe fehlt";
    }

    if (tarifToCalculate == "split" && (checkField2.value == 0 ||  checkField2.value ===0)){
        document.getElementById("errorInput2").style.display = "block";
        document.getElementById("errorInput2").innerHTML = "EIngabe fehlt";
    }

    if (yearToCalculate == 2021){

        if(zvEnd <= 9744){
            eSt = 0;
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt);

            console.log("Einkommensteuer = " + eSt);
        } else if(zvEnd > 9744 && zvEnd<= 14753){
            let y = (zvEnd - 9744)/10000;
            eSt = ((995.21*y+1400)*y).toFixed(2);

            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }

            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt);

        }else if(zvEnd > 14753 && zvEnd<= 57918){
            let y = (zvEnd - 14753)/10000;
            eSt = ((208.85*y+2397)*y + 950.96).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }

            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);
            //!   Why is toFixed not working by 28000 from line 108?  btw how to fix this -fixed by adding toFixed in line 110

        } else if(zvEnd > 57918 && zvEnd<= 274612){
            eSt = (0.42*zvEnd -9136.63).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);
        } else if(zvEnd > 274612){
            eSt = (0.45*zvEnd -17374.99).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);
        }
    } else if(yearToCalculate == 2019){
        if(zvEnd <= 9168){
            eSt = 0;
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt);

        } else if(zvEnd > 9168 && zvEnd<= 14254){
            let y = (zvEnd - 9168)/10000;
            eSt = ((980.14*y+1400)*y).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt);

        }else if(zvEnd > 14254 && zvEnd<= 55960){
            let y = (zvEnd - 14254)/10000;
            eSt = ((216.16*y+2397)*y + 965.58).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);

        } else if(zvEnd > 55960 && zvEnd<= 265326){
            eSt = (0.42*zvEnd -8780.90).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);
        } else if(zvEnd > 265326){
            eSt = (0.45*zvEnd -16740.68).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);
        }
    }else if(yearToCalculate == 2020){
        if(zvEnd <= 9408){
            eSt = 0;
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt);

        } else if(zvEnd > 9408 && zvEnd<= 14532){
            let y = (zvEnd - 9408)/10000;
            eSt = ((972.87*y+1400)*y).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt);

        }else if(zvEnd > 14532 && zvEnd<= 57051){
            let y = (zvEnd - 14532)/10000;
            eSt = ((212.02*y+2397)*y + 972.79).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);

        } else if(zvEnd > 57051 && zvEnd<= 270500){
            eSt = (0.42*zvEnd -8963.74).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);
        } else if(zvEnd > 270500){
            eSt = (0.45*zvEnd -17078.74).toFixed(2);
            if(tarifToCalculate == "split"){
                eSt*=2;
                zvEnd *=2;
            }
            showEST.innerHTML = "Steuerbetrag: " + eSt;
            showMeMyMoney.innerHTML = "Netto im Jahr: " + (zvEnd-eSt).toFixed(2);
        }
    } else (
        document.getElementById("errorYear").innerHTML = "Bitte wählen Sie Abrechnungsjahr."
    )
}


