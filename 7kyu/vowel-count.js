function getCount(str) {
    var totalCount = 0;
    
    for (var i = 0; i < str.length;i++){
      if (str[i] === "a") {
        totalCount += 1;
      } else if (str[i] === "e"){
        totalCount += 1;
      } else if (str[i] === "i"){
        totalCount += 1;
      } else if (str[i] === "o"){
        totalCount += 1;
      } else if (str[i] === "u"){
        totalCount+=1;
      }
    }
    
    return totalCount;
  }