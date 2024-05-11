

const byteSize = (str) => {
	let sizee= new Blob([str]).size;
	return sizee;
   
};  

// Do not change the code below
const str = prompt("Enter some string.");    
 
alert(byteSize(str)); 
