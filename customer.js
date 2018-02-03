
var mysql=require('mysql');
var inquirer=require('inquirer');


var connection=mysql.createConnection({
	host:"localhost",
	port: 3306,
	user:"root",
	password: "cynthe17",
	database:"Bamazon"})


connection.connect(function(err){
	if(err){
	console.error("error connecting: "+err.stack);}
	createTable();})


var createTable=function(){
	connection.query('SELECT * FROM products',function(err,res){
		if(err)throw err;
		var tab="\t";
		console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
		console.log("--------------------------------------------------------");
		for(var i=0;i<res.length;i++){
			console.log(res[i].ItemID+tab+res[i].ProductName+tab+res[i].DepartmentName+tab+res[i].Price+tab+res[i].StockQuantity);}
		console.log("--------------------------------------------------------");
		askCustomer(res);})}

var askCustomer=function(res){
	inquirer.prompt([
		{type:'input',
		name:'choice',
		message:'What would you like to buy? [Type Q to quit]'}]).then(function(val){
		var correct=false;
		for(var i=0;i<res.length;i++){
			if(res[i].ProductName==val.choice){
				var correct=true;
				var product=val.choice;
				var id=i;
				inquirer.prompt([
					{type:'input',
					name:'quant',
					message:"How many would you like to buy?"}]).then(function(val){
					if((res[id].StockQuantity-val.quant)>0){
					connection.query("UPDATE products SET StockQuantity='"+(res[id].StockQuantity-val.quant)+"' WHERE ProductName='"+product+"'", function(err, res2){
					if(err)throw err;
					console.log("Congratulations! Item is yours!");
					createTable();})}
					else{
						console.log("Not available to buy!");
						askCustomer(res);}})}
			if(val.choice=="Q"||val.choice=="q"){process.exit()}}
		if(i==res.length&&correct==false){
			console.log("Not available to buy!");
			promptCustomer(res);}
		})}