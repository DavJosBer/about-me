import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export const Chart = (props) => {
    const data = [];
    for(let p in props.keys){
        let data2 = props.keys[p]
        data.push({language: p, experience: data2[props.properties[p]]},)
    }
    let chartValues = []
    let format = []
    data.map((item,i)=>{
        if(i < 5){
            chartValues.push(item)
            format.push(props.properties[i])
        }
        return chartValues
    })
    let values = [];
    for (let p in chartValues){
        values.push(p)
    }
    return(
        <>
            <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={values}
                    tickFormat={format}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x / 1}%`)}
        />
                <VictoryBar data={chartValues} x="language" y="experience"/>
            </VictoryChart>
        </>
    )
}