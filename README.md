# Pizza-order-form
 making a pizza webpage with tables and all 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aurora's Pizzaria</title>
    <link rel="stylesheet" href="styles.css">
    </head>
<body>
    <header>
        <h1>Aurora's Pizzaria</h1>
          <nav>
      <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="order.html">Order</a></li>
          <li><a href="contact.html">Contact</a></li>
                  </ul> <!-- Fixed: Closing the <ul> tag -->
    </nav>
</header>
<main>
    <form id="pizzaOrderForm" action="submit-order.html" method="post">
    
        <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
<input type="email" id="email" name="email" required>
 <label for="pizza-size">Pizza Size:</label>
 <select id="pizza-size" name="pizza-size" required>
   <option value="small">Small</option>
  <option value="medium">Medium</option>
   <option value="large">Large</option>
   </select>
<fieldset>
    <legend>Toppings:</legend>
    <label><input type="checkbox" name="toppings" value="pepperoni"> Pepperoni</label>
    <label><input type="checkbox" name="toppings" value="mushrooms"> Mushrooms</label>
     <label><input type="checkbox" name="toppings" value="onions"> Onions</label>
 <label><input type="checkbox" name="toppings" value="sausage"> Sausage</label>
   <label><input type="checkbox" name="toppings" value="bacon"> Bacon</label>
    </fieldset>
 <label for="special-instructions">Special Instructions:</label>
 <textarea id="special-instructions" name="special-instructions" rows="4"></textarea>
 <button type="submit">Place Order</button>
 </form>
   <h2>Order Summary</h2>
  <table id="order-table" border="1">
  <thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Pizza Size</th>
        <th>Toppings</th>
        <th>Special Instructions</th>
                      </tr>
          </thead>
          <tbody>
              <!-- Rows will be dynamically 
          </tbody>
      </table>
  </main>
  <footer>
      <script src="script.js" defer></script
      <p>&copy; 2023 Pizza Order Project</p>
       </footer>
       </body>
</html>
       
      
  
 
 

 
    
   

   

   
  
 
