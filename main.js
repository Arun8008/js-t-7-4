/*-----------4---------*/

/*-----------Find---------*/

const employees = [
				 { 
				 name: "David Carlson", 
				 age: 30 
				 },
				 { 
				 name: "John Cena", 
				 age: 34 
				 },
				 { 
				 name: "Mike Sheridan",
				 age: 25
				 },
				 {
				 name: "John Carte",
				 age: 50
				 }
				];
	const employee = employees.find(function (user) {
	return user.name.indexOf('John')>-1;
	});
	    console.log(employee);
		document.write("<br>",	JSON.stringify(employee));
		
/*-----------IndexOf---------*/

const employees1 = [
					{ 
					name: 'David Carlson',
					age: 30 
					},
					{ 
					name: 'Arun Cena', 
					age: 34 
					},
					{ 
					name: 'Mike Sheridan',
					age: 25
					},
					{
					name: 'John Carte',
					age: 50
					}
				  ];

		const employ = employees1.findIndex(function (employee) {
		return employee.name.indexOf('John')>-1;
		});
		   console.log(employ);
		   document.write("<br>",	JSON.stringify(employ));