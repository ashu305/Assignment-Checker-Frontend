export const firstAssignmentDescription = `Create an Employee database consisting of four tables namely, employees, works, and company, as given below, where the primary keys are underlined.`;

export const firstAssignmentTableDetails = [
  `employee (employee_id, employee_name, street, city)`,
  `works(employee_id, company_name, salary)`,
  `company(company_name, city): Name and location of the comany`,
];

export const secondAssignmentDescription = `Create a database for coffee_store consisting of three tables namely, Products, Customers, and Orders.`;

export const secondAssignmentTableDetails = [
  `products (productID, Name, Price, CoffeeOrigin)
  The Products table consists of details of productID, Name, and Price attributes. Set
  productID as the PRIMARY KEY and AUTO INCREMENT. Name is varchar(30) type, Price is a decimal value which accept values upto 9.99 and CoffeeOrigin should of varchar(30) type.`,

  `customers (customerID, First_Name, Last_Name, Gender, ContactNumber)
    Customers table consists of customerID, First_Name, Last_Name, Gender, and
    ContactNumber attributes. customerID is a PRIMARY KEY and AUTO
    INCREMENT. First_Name and Last_Name are of varchar(30) type. Attribute
    Gender can have only two values M/F. ContactNumber is upto 11 digits.`,

  `orders (orderID, productID, customerID, Date_Time)
  Orders tables consists of details of orderID, productID, customerID, and Date_Time
  attributes. orderID is a PRIMARY KEY and AUTO INCREMENT.productID is a FOREIGN KEY which should reference to the productID of products table and the customerID is a FOREIGN KEY that
  references to the customerID of customers table. Date_Time are of type datetime.`,
];
