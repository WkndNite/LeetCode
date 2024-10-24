const generateMatrix = n => {
    let result = Array.from({length:n}).fill(0).map(()=>Array.from({length:n}));
    for (let i=1;i<=n;i++){
        result[0][i-1]=i;
    }
    console.log(result);
}
const n = 3;
generateMatrix(n);