


function target_sum(target, sum, set = []) {

    // console.log(target, sum, set);
    if(sum === 70){
        console.log(set);
        return
    }

    
    if(sum > 70 || target.length === 0){
        return;
    }


    const firstNum = target[0];
    const remTarget = target.slice(1)


    target_sum(remTarget, sum + firstNum, set.concat(firstNum));
    target_sum(remTarget, sum, set);
}

target_sum([10,20,30,40,50], 0, [])