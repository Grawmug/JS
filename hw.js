// let years = [1996, 1974, 1900, 1985, 2000];
// let len = years.length;

// for (let i = 0; i < len; i++) {
//     let year = years[i];
//     if (
//         ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 == 0)
//     ) {
//         console.log(year)

//     }
// }



// let n = 7;
// let summary = 1
// while( n > 0 ){
//     summary *= n--;
// }
// console.log(summary);



// let items = [1,6,23,8,4,98,3,7,3,98,4,98];
// let summary = 0;
// let len = items.length;
// for (let i = 0; i < len; i++) {
//     let item = items[i];
//     if (item %2 !=0){
//        summary=item+summary
//     }
// }
// console.log(summary);



// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let len = tab.length;
// let max = tab[0];
// let min = tab[0];
// for(i=1;i<len;i++)
// {
//     if(max<tab[i])
//     {
//         max=tab[i];
//     }
//     if(min>tab[i])
//     {
//         min=tab[i];
//     }
// }
// console.log(max);
// console.log(min);



// let tab = ["Adam", "Rogowski", "Karol", "Politechnika", "Super", "Weekend"];
// let len = tab.length;
// let longest = tab[0];
// for (i=1; i<len; i++)
// {
//     if(longest.length<tab[i].length)
//     {
//         longest = tab[i]
//     }
// }
// console.log(longest)
// console.log(longest.length)



// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let len = tab.length;
// let max = 0;
// let index_tab=[]
// for(i=0; i< len; i++) 
// {
    
//     if(max >= tab[i])
//     {
//         if(max==tab[i]) 
//         {
//             index_tab.push(i);
//         }
        
//     }   
//     else 
//     {
//         max = tab[i]
//         index_tab=[];
//         index_tab.push(i);
        
//     }  

// }
// console.log(max);
// console.log(index_tab);


// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let len = tab.length;
// let sum = 0;
// let number = 0;


// for( i = 0; i<len; i++)
// {
//     if(tab[i] % 2 == 0 )
//     {
//         sum +=tab[i];
//         number +=1;
//     }

// }
// console.log(sum/number);


// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let len = tab.length;
// let sum = 0;
// let number = 0;


// for( i = 2; i<len; i+=2)
// {
//         sum +=tab[i];
//         number +=1;
    

// }
// console.log(sum/number);


// let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum = 0;
// let len = tab.length;

// for(i=0; i<len; i++)
// {
//     if(tab[i] %2 == 0)
//     {
//         sum+=tab[i];
//     }
//     else
//     {
//         sum-=tab[i];
//     }

// }
// console.log(sum);