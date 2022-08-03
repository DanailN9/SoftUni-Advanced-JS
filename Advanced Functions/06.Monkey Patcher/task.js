function solution (comand) {
    
    if (comand === 'upvote') {
        this.upvotes += 1;
    } else if (comand === 'downvote') {
        this.downvotes += 1;
    } else {
       return score(this); 
    }
    

    function score(obj) {
        let result = [];
        let upNum = Number(obj.upvotes);
        let downNum = Number(obj.downvotes);
        let sum = 0;

        if (obj.upvotes > 50 && obj.upvotes >= obj.downvotes) {
             upNum += Math.ceil(obj.upvotes * 0.25);
        } 
        
        if (obj.downvotes > 50 && obj.downvotes >= obj.upvotes) {
            downNum += Math.ceil(obj.downvotes * 0.25);
        }

        sum = upNum - downNum;
        votes = upNum + downNum;
        result.push(upNum, downNum)

        if (!sum && votes >= 100) {
            result.push(sum, 'controversial');

        } else if ( upNum > votes * 0.66) {
            result.push(sum, 'hot');

        } else if (sum < 0) {
            result.push(sum, 'unpopular');

        } else if (votes < 10) {
            result.push(sum,'new');

        } else {
            result.push(sum, 'new');

        }

        return result
        
    }

}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     