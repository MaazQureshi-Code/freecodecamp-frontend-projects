
let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const user_input = document.getElementById("cash")
const button1 = document.getElementById("purchase-btn")
const change_Div = document.getElementById("change-due")



button1.addEventListener("click", () => {
   const input_Value = parseFloat(user_input.value); // Use parseFloat for decimal values
   
    if (isNaN(input_Value)) {
        alert("Please enter a valid number.");
        return;
    }

    cash(input_Value);
})


const cash = (user_input) => {
    if (user_input < price) {
        alert("Customer does not have enough money to purchase the item");
    } else if (user_input === price) {
        change_Div.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
    } else {
        let changeDue = user_input - price;
        const changeBreakdown = calculateChange(changeDue, cid);
        updateChangeDue(changeBreakdown, changeDue);
    }
};


    


const calculateChange = (changeDue, cid) => {
    const currencyUnits = [
        { name: 'ONE HUNDRED', value: 100 },
        { name: 'TWENTY', value: 20 },
        { name: 'TEN', value: 10 },
        { name: 'FIVE', value: 5 },
        { name: 'ONE', value: 1 },
        { name: 'QUARTER', value: 0.25 },
        { name: 'DIME', value: 0.1 },
        { name: 'NICKEL', value: 0.05 },
        { name: 'PENNY', value: 0.01 }
    ];

    let changeBreakdown = [];
    let totalCID = cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2);

    if (totalCID < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (totalCID == changeDue) {
        return { status: "CLOSED", change: cid };
    }

    for (let unit of currencyUnits) {
        const [unitName, unitAmount] = cid.find(([name]) => name === unit.name) || [unit.name, 0];
        let count = 0;

        while (changeDue >= unit.value && unitAmount >= (count + 1) * unit.value) {
            changeDue = (changeDue - unit.value).toFixed(2);
            count++;
        }

        if (count > 0) {
            changeBreakdown.push([unit.name, count * unit.value]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeBreakdown };
};

const updateChangeDue = (changeBreakdown, changeDue) => {
    if (changeBreakdown.status === "INSUFFICIENT_FUNDS") {
        change_Div.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
    } else if (changeBreakdown.status === "CLOSED") {
        change_Div.innerHTML = `
            <p>Status: CLOSED</p>
            ${changeBreakdown.change.map(([name, amount]) => `<p>${name}: $${amount}</p>`).join('')}
        `;
    } else {
        change_Div.innerHTML = `
            <p>Status: OPEN</p>
            ${changeBreakdown.change.map(([name, amount]) => `<p>${name}: $${amount}</p>`).join('')}
        `;
    }
};