export{};
type data=readonly[string, number, boolean];

const user1:data=["Pratik",45,true];
// const user2:data=["Javed",true,true];        /* Gets error cause dataTypes order wise not happens*/
// user1.push(true);                            /* gives Error cause user1 is readonoy type.*/
// user1[0]="Jhon";                             /*read only


console.log(user1[0]);
console.log(user1);