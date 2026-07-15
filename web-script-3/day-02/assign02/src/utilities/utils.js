export const getYear = function (){
    const d = new Date();
    return d.getFullYear();
}

export const getRandomIndex = function (max){
  return Math.floor(Math.random() * max);
}

