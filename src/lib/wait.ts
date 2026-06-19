export default function wait(min:number){
    return new Promise(rlv=>setTimeout(rlv, min * 1000))
}



