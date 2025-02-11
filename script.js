let student = {
	name: 'John',
};
Object.prototype.getKeys=function 
	{
	return Object.keys(this);
}

console.log(getKeys(student));