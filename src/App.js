import React from 'react';
import './App.css';

const App = () => <EmployeeList />;

const EmployeeList = () => {
	const staff = [
		{
			img: 22,
			name: 'Steve Thomas',
			Job_Title: 'Web Developer',
			Email: 'steve18@gmail.com'
		},
		{
			img: 35,
			name: 'Paul Smith',
			Job_Title: 'Tester',
			Email: 'paulsmith@gmail.com'
		},
		{
			img: 16,
			name: 'Ryan Brown',
			Job_Title: 'Marketing',
			Email: 'ryan@gmail.com'
		},
		{
			img: 36,
			name: 'Les Luke',
			Job_Title: 'Junior Developer',
			Email: 'les28@gmail.com'
		}
	];

	return (
		<section>
			<h1 className='text-center'>Simple Employee List using RandomAPI</h1>
			<Employee employee={staff[0]} />;
			<Employee employee={staff[1]}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
			</Employee>
			;
			<Employee employee={staff[2]} />;
			<Employee employee={staff[3]} />;
		</section>
	);
};

const Employee = props => {
	const { img, Job_Title, Email, name } = props.employee;
	const { children } = props;
	const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
	return (
		<div className='container'>
			<div className='employee'>
				<img src={url} alt='' />
				<h1>Name: {name}</h1>
				<h4>Job Title: {Job_Title}</h4>
				<p>More Inf: {children}</p>
				<h3>Email: {Email}</h3>
			</div>
		</div>
	);
};

export default App;
