export interface IQuestion {
title:string;
variants:string[]  ,
correct:number,
incorrect:number[]
}


export const questions:IQuestion[]=[
    {
        title:'What is the capital of Armenia?',
        variants:["Yerevan", "New York", "Alabama","Burkinafaso"],
        correct:0,
        incorrect:[1,2,3]
    },
    {
        title:'What is the capital of UK?',
        variants:["Moscow", "New York", "Washingtom","London"],
        correct:3,
        incorrect:[0,1,2,]
    },
    {
        title:'What is the capital of China?',
        variants:["Tokio", "Pekin", "Shanhie","Alyaska"],
        correct:1,
        incorrect:[0,2,3]
    },
    {
        title:'What is the capital of Russion Federation?',
        variants:["Orinburg", "Peterburg", "Moscow","Kiev"],
        correct:2,
        incorrect:[0,1,3]
    },
]

