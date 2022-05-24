const apple = 15.678;
const qiwi = 123.965;
const watermelon = 90.2345;


const sum = apple + qiwi + watermelon;
const sumLow = Math.floor(apple) + Math.floor(qiwi) + Math.floor(watermelon);
const sumRound = (Math.round(sum / 100)) * 100;
const discount = (Math.random() * (99)).toFixed(2) + '%';
const amountCash = 500;
const sumBolean = sumLow % 2 === 0;
const changeResult = (amountCash - sum);
const averageValue = (sum / 3).toFixed(2);
const randomDiscount = (Math.random() * (99)).toFixed(0);
const discountPrice = (sum - (sum * (randomDiscount * 0.01))).toFixed(2);
const netProfitNumbers = (sum / 2).toFixed(0);
const netProfitPercent = ((randomDiscount / 100) * sum).toFixed(0);
const netProfit = netProfitNumbers - netProfitPercent;
const minNumb = Math.min(apple, qiwi, watermelon);
const maxNumb = Math.max(apple, qiwi, watermelon);


document.writeln(`<p><b>Максимальне число:</b> ${ maxNumb}</p>`);
document.writeln(`<p><b>Мінімальне число:</b> ${ minNumb}</p>`);
document.writeln(`<p><b>Cума вартості всіх товарів:</b> ${sum}</p>`);
document.writeln(`<p><b>Округлення використуване в МЕНЬШУ сторону:</b> ${sumLow}</p>`);
document.writeln(`<p><b>Cума товарів округлена до сотень:</b> ${sumRound}</p>`);
document.writeln(`<p><b>Булеве значення:</b> ${sumBolean}</p>`);
document.writeln(`<p><b>Cума решти,при оплаті всіх товарів клієнтом:</b> ${changeResult}        </p>`);
document.writeln(`<p><b>Cереднє значення цін (округлене до другого знаку після коми):</b> ${averageValue}</p>`);
document.writeln(`<p><b>Випадкова знижка:</b> ${randomDiscount}%</p>`);
document.writeln(`<p><b>Сума до оплати з випадковою знижкою (округлена до 2 знаків після коми):</b> ${discountPrice}</p>`);
document.writeln(`<p><b>Чистий прибуток (зі знижкою та собівартістю товарів):</b> ${netProfit}</p>`);