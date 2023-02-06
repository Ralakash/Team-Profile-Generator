const path = require('path');
const fs = require('fs');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
let HTML = `     <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">`;

const endHTML = ` </div>
            </div>
          </div>
          </body>
          </html>
          `;

const generateHTML = (teamRoster) => {
	for (let i = 0; i < teamRoster.length; i++) {
		let tempHTML;
		switch (teamRoster[i].getRole()) {
			case 'Manager':
				tempHTML = `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${teamRoster[i].getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${teamRoster[i].getName()}</li>
          <li class="list-group-item">ID: ${teamRoster[i].getId()}</li>
          <li class="list-group-item">Email: <a href='${teamRoster[
						i
					].getEmail()}.github.io'>${teamRoster[i].getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${teamRoster[i].getOfficeNum()}</li>
        </ul>
      </div>`;
				break;
			case 'Engineer':
				tempHTML = `<div class="card" style="width: 18rem;">
          <div class="card-header">
            ${teamRoster[i].getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${teamRoster[i].getName()}</li>
            <li class="list-group-item">ID: ${teamRoster[i].getId()}</li>
            <li class="list-group-item">Email: <a href='${teamRoster[
							i
						].getEmail()}.github.io'>${teamRoster[i].getEmail()}</a></li>
            <li class="list-group-item">Github: <a href='${teamRoster[
							i
						].getGithub()}.github.io'>${teamRoster[i].getGithub()}</a></li>
          </ul>
        </div>`;
				break;
			case 'Intern':
				tempHTML = `<div class="card" style="width: 18rem;">
          <div class="card-header">
            ${teamRoster[i].getRole()}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${teamRoster[i].getName()}</li>
            <li class="list-group-item">ID: ${teamRoster[i].getId()}</li>
            <li class="list-group-item">Email: <a href='${teamRoster[
							i
						].getEmail()}.github.io'>${teamRoster[i].getEmail()}</a></li>
            <li class="list-group-item">School: ${teamRoster[i].getSchool()}</li>
          </ul>
        </div>`;
				break;

			default:
				break;
		}
		HTML = HTML.concat(tempHTML);
	}

	HTML = HTML.concat(endHTML);
	const htmlDir = path.resolve(__dirname, 'html');
	const htmlPath = path.join(htmlDir, 'team.html');
	if (!fs.existsSync(htmlDir)) {
		fs.mkdirSync(htmlDir);
	}
	fs.writeFileSync(htmlPath, HTML, 'utf-8');
	console.log('File created successfully!');
	return;
};
module.exports = generateHTML;
