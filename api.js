// Given API data flags


// async function api(){
    // let url = fetch('https://restcountries.com/v3.1/all');
    // let v = await url;
    // let a = v.json();
    // let res = await a;
//     for(let i of res){
//     console.log(i.flags);
//     }
// }
// api();


// -------------------------------------------------------------------------

// Countries Names, Regions, Sub-Regions, Population :


async function api(){
    let url = fetch('https://restcountries.com/v3.1/all');
    let v = await url;
    let a = v.json();
    let res = await a;
    for(let i of res){
        try{
        console.log('Countrie Name :', i.name.common);
        console.log('Region :', i.region);
        console.log('Subregion :', i.subregion);
        console.log('Population :', i.population);
        console.log('');
        }
        catch{
            //
        }
    }
}
api();