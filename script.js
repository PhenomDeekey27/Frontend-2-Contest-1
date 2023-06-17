/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let crtdev=arr.map(function(element)
    {
        if(element.profession=="developer")
        {
            return element
        }
    })
    console.log(crtdev);
 
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(words)
    {
        if(words.profession==="developer")
        {
            console.log(words);
        }

    })

  
    


  }
  
  function addData() {
    //Write your code here, just console.log
    let obj={id:4,name:"susan",age:20,profession:"intern"};
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let ind;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].profession==="admin")
        {
           ind=i;
        }
    }
    arr.splice(ind,1);
    console.log(arr);
  
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let pr=[
        { id: 11, name: "phenom", age: "22", profession: "Frontend developer" },
        { id: 12, name: "Deekey", age: "25", profession: "Data-Analyst" },
        { id: 13, name: "Kasthurirangan", age: "23", profession: "System-Admin" },
    ]
    let result=arr.concat(pr);
    console.log(result);
  


  }