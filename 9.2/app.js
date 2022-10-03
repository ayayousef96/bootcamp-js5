function populationPercentages(pop){
    let percentages=[];
    let i=0;
    while(i<pop.length){
        percentages[i]=percentageOfWorld1(pop[i]);
        i++;
    }
    console.log(percentages);
}

(populationPercentages(pop));

///i like for loop more!