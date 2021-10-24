function countDown(s, m){
    let timerFunc = setInterval(() => {
        if(s === 0 && m>=0){
            if(s===0 && m=== 0){
                clearInterval(timerFunc)
                return
            }
            s = 60
            s--
            m--
            console.log(`${m}:${s}`)
        } else if(s !==0 && m>=0){ 
            s-- 
            if(s<10){
                console.log(`${m}:0${s}`)
            } else{
                console.log(`${m}:${s}`)
            }
        }
    }, 1000) 
}

countDown(0,5)