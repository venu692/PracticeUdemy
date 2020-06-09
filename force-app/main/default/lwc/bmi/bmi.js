const getBMI = function(weightinkg, heightincm){
    try{
        return weightinkg / (heightincm * heightincm);
    }
    catch (error){
        return undefined;
    }
}

export{getBMI};