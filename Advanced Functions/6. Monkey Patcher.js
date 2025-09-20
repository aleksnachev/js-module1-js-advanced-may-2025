function solution(action){
    let result = []

    switch(action){
        case "upvote": this.upvotes++;break;
        case "downvote": this.downvotes++;break;
        case "score": result = getScore.call(this)

    }
    function getScore(){
        let positive = this.upvotes
        let negative = this.downvotes
        let total = positive+negative
        let score = positive-negative

        if (total>50){
            let extraValue = Math.ceil(Math.max(positive,negative)*0.25)
            positive+=extraValue
            negative+=extraValue
        }
        let rating = "new"

        if(total<10){
            rating='new'
        }else if (this.upvotes >total*0.66){
            rating = "hot"
        }else if (score>=0 && total>100){
            rating = 'controversial'
        }else if (score<0){
            rating = 'unpopular'
        }

        return [positive,negative,score,rating]
    }
    return result
}