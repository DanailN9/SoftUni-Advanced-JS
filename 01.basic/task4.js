function solve(steps, foot, speed) {
    
    let distance = foot * steps;
    let breaks = Math.floor(distance / 500);
    let time = distance * 60 / speed;
    //time += breaks;
    time.toFixed(2);
    
    console.log(breaks, distance)
    return(time)

}

console.log(solve(4000, 0.60, 5));