const UICtroller = ( () => {

let expenses, income;
    
// Set Dom Selectors Variables
const DOMClasses = {
        inputIncome: '.income',
        inputAdditionalIncome: '.additionalIncome',
        totalInputIncome: '.total',
        inputRentals: '.rentals',
        inputGroceries: '.groceries',
        inputFees: '.fees',
        inputTransport: '.transport',
        inputRates: '.rates',
        inputPhone: '.phone',
        inputLevies: '.levies',
        inputBankCharges: '.bank_charges',
        inputLoan: '.loan',
        inputOther: '.other',
        calcButton: '.calcButton',
        totalImputIncomeLabel: '.totalLabel',
        output: '.output'
    };

    return {
       
        getIncome:  () => {
            income = Number(document.querySelector(DOMClasses.inputIncome).value)+Number(document.querySelector(DOMClasses.inputAdditionalIncome).value);
            
            return income;
        },

        getExpenses:  () => {
            expenses = Number(document.querySelector(DOMClasses.inputRentals).value)+Number(document.querySelector(DOMClasses.inputGroceries).value)+Number(document.querySelector(DOMClasses.inputFees).value)+Number(document.querySelector(DOMClasses.inputTransport).value)+Number(document.querySelector(DOMClasses.inputRates).value)+Number(document.querySelector(DOMClasses.inputPhone).value)+Number(document.querySelector(DOMClasses.inputLevies).value)+Number(document.querySelector(DOMClasses.inputBankCharges).value)+Number(document.querySelector(DOMClasses.inputLoan).value)+Number(document.querySelector(DOMClasses.inputOther).value);

            return expenses;
        },

        getDOMSelectors:  () => {
            return DOMClasses;
        }
    };
})();

//Calculation Controller
const CalcCtroller = ( () => {

    return {
        calculate: () => {
            //Local Variables
            let inc, exp, disposableInc, minimun;
            minimun = Number(500);
            inc = UICtroller.getIncome();
            exp = UICtroller.getExpenses();
            disposableInc = inc - exp;

            // Check amount left after expenses
            if (disposableInc === 0 || disposableInc <= minimun) {
                console.log('Ooops...Your total monthly income is R '+inc+' and your monthly expenses are R '+exp+ '. It looks like you are Overindebted')
            }else {
                console.log('Your total monthly income is R '+inc+' and your monthly expenses are R '+exp+ '. It looks like you are managing your finances well')
            }
            return disposableInc;
        },

        // Get total Income
        totalIncome: () => {
            let actualIncome = UICtroller.getIncome();
            return actualIncome;
        }
    };

})();

// Application Controller
const appCtroller = ( () => {

    //Global Variables
    let DOM = UICtroller.getDOMSelectors(), label  = 'TOTAL INCOME';;
    
    //Currency Formatter
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'ZAR',
        minimumFractionDigits: 2
      });
    
    // Event Listeners
    document.querySelector(DOM.calcButton).addEventListener('click',  () => {
        CalcCtroller.calculate();

    });

    document.querySelector(DOM.inputIncome).addEventListener('keyup', () => {
        document.querySelector(DOM.totalInputIncome).innerHTML =  `<span class="" style="border: 1px grey; padding: 3px 3px; border-radius: 3px; background-color: rgb(134, 224, 161); color: #033f0d; font-weight: bold; margin-bottom: 2px;">`+formatter.format(UICtroller.getIncome())+`</span>` ;
        document.querySelector(DOM.totalImputIncomeLabel).innerHTML = `<strong class="text-success">`+label+`</strong>`;
    });

   document.querySelector(DOM.inputAdditionalIncome).addEventListener('keyup', () => {
       document.querySelector(DOM.totalInputIncome).innerHTML = document.querySelector(DOM.totalInputIncome).innerHTML =  `<span class="" style="border: 1px grey; padding: 3px 3px; border-radius: 3px; background-color: rgb(134, 224, 161); color: #033f0d; font-weight: bold; margin-bottom: 2px;">`+formatter.format(CalcCtroller.totalIncome())+`</span>` ;
       document.querySelector(DOM.totalImputIncomeLabel).innerHTML = `<strong class="text-success">`+label+`</strong>`;
   });

})(UICtroller, CalcCtroller);

const isNumberKey = (evt) => {
    let charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        return false;
    }else{
        return true;
    };
};

const init = () => {
    document.readyState(() => {
        isNumberKey(evt);
    });
};


