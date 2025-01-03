const radius = [3, 1, 2, 4, 5];


const area =(radius)=>{
    const areas = [];
    for (let i = 0; i < radius.length; i++) {
        areas.push(Math.PI * radius[i] * radius[i]);
    }
    return areas;
}