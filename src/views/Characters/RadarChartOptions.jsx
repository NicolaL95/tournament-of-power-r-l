export default function RadarChartValues(characterSpecs2k21, characterSpecs2k23) {

    return(
        {
            title: {
                text: 'Specs'
            },
            legend: {
                data: ['TOP2K21','TOP2K23']
            },
            radar: {
                indicator: [
                { name: 'Retarded', max: 6500 },
                { name: 'Highness', max: 16000 },
                { name: 'Hunger', max: 30000 },
                { name: 'Harassment', max: 38000 },
                { name: 'Skilled', max: 52000 },
                { name: 'Cringe', max: 25000 }
                ]
            },
            series: [
                {
                name: 'TOP2K21 VS TOP2K23',
                type: 'radar',
                data: [
                    {
                    value: characterSpecs2k21,
                    name: 'TOP2K21'
                    },
                    {
                    value: characterSpecs2k23,
                    name: 'TOP2K23'
                    }
                ]
                }
            ]
        }
    );
}