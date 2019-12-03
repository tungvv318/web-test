const MySQL = require('./../services/mysql');


const insert = async (req, res) => {
  let book = {
	  name: req.body.name,
	  author: req.body.author,
	  published_date: req.body.date
  }
  await MySQL.insert(book);
  return res.send("Insert successfully!");
};
const findAll = async (req, res) => {
	const listBooks = await MySQL.find();
	let html = `
	<table style="width:100%">
  <tr>
    <th>name</th>
    <th>author</th> 
    <th>date</th>
  </tr>`;
	listBooks.forEach(item => {
		html += `<tr>
    <td>${item.name}</td>
    <td>${item.author}</td> 
    <td>${item.published_date}</td>
  </tr>`;
	});
	html += `</table>`;
	return res.send(html);
	
}



module.exports = {
	insert: insert,
	findAll: findAll
};
