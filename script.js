const eventTemperatures = [18, 22, 9, 27, 8, 31, 24];

function findHottestDay(temperatures) {
    let hottestTemperature = temperatures[0];

    for (let index = 1; index < temperatures.length; index += 1) {
        if (temperatures[index] > hottestTemperature) {
            hottestTemperature = temperatures[index];
        }
    }

    return hottestTemperature;
}

function filterWarmDays(temperatures) {
    return temperatures.filter(temperature => temperature > 20);
}

function calculateAverageTemp(temperatures) {
    let temperatureSum = 0;

    for (const temperature of temperatures) {
        temperatureSum += temperature;
    }

    return temperatureSum / temperatures.length;
}

const visitorName = prompt("Как вас зовут?");
const greetingName = visitorName && visitorName.trim() ? visitorName.trim() : "Гость";
const warmDays = filterWarmDays(eventTemperatures);
const averageTemperature = calculateAverageTemp(eventTemperatures);
let coldDaysCount = 0;
let coldDaysTemperatureSum = 0;

for (const temperature of eventTemperatures) {
    if (temperature <= 10) {
        coldDaysCount += 1;
        coldDaysTemperatureSum += temperature;
    }
}

const averageColdTemperature = coldDaysCount > 0
    ? coldDaysTemperatureSum / coldDaysCount
    : 0;
const hottestTemperature = findHottestDay(eventTemperatures);

alert(
    `Здравствуйте, ${greetingName}!\n` +
    `Средняя температура за период – ${averageTemperature.toFixed(1)} °C, ` +
    `было ${warmDays.length} тёплых дней`
);

console.log(`Средняя температура в холодные дни: ${averageColdTemperature.toFixed(1)} °C`);
console.log(`Количество холодных дней: ${coldDaysCount}`);

if (hottestTemperature >= 30) {
    console.log("Рекомендуется предусмотреть навесы и воду для гостей");
}
