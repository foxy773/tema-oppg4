<template>
	<div class="mainContainer">

	
	<div class="tableContainer">
		<table class="tableContainer__employeeTable">
			<thead class="tableContainer__employeeTable__head">
				<tr>
					<th class="employeeTable__head__item" v-for="category in content.categories">{{ category.string }}</th>
				</tr>
			</thead>

			<tbody class="tableContainer__employeeTable__body">
				<tr class="employeeTable__body__row" v-for="row in naturalSort">
					<td v-for="value in row">{{ value }}</td>
				</tr>
			</tbody>
		</table>
		
	</div>
	<div class="controlpanel">
		<a @click="toggleSortOrder">Sort: {{ sort.key }} ({{ sort.order.toUpperCase() }})</a>
		<div class="dropdown">
			<h3>Filter: {{ sort.currentFilter }}</h3>
		<ul class="dropdown__list">
			<li class="dropdown__list__item" v-for="category in content.categories"><a @click="sortBy(`${category.key}`, category.string)">{{ category.string }}</a></li>
		</ul>
		</div>
		</div>
	</div>
</template>

<script>

	const employees = `[{"first_name":"Nikaniki","last_name":"Ales","gender":"Female","email":"nales0@flavors.me","job_title":"Research Associate"}, {"first_name":"Deanne","last_name":"Sambath","gender":"Male","email":"dsambath1@unblog.fr","job_title":"Software Test Engineer II"}, {"first_name":"Brunhilde","last_name":"Gagin","gender":"Female","email":"bgagin2@telegraph.co.uk","job_title":"Clinical Specialist"}, {"first_name":"Katie","last_name":"Cowp","gender":"Male","email":"kcowp3@printfriendly.com","job_title":"Executive Secretary"}, {"first_name":"Jeremy","last_name":"McDiarmid","gender":"Male","email":"jmcdiarmid4@yale.edu","job_title":"Librarian"}, {"first_name":"Merv","last_name":"Main","gender":"Female","email":"mmain5@live.com","job_title":"Staff Accountant III"}, {"first_name":"Erinn","last_name":"Humber","gender":"Female","email":"ehumber6@simplemachines.org","job_title":"Community Outreach Specialist"}, {"first_name":"Nefen","last_name":"Cardenosa","gender":"Female","email":"ncardenosa7@miibeian.gov.cn","job_title":"Assistant Manager"}, {"first_name":"Chelsae","last_name":"Sentance","gender":"Male","email":"csentance8@java.com","job_title":"Research Associate"}, {"first_name":"Grier","last_name":"Clynter","gender":"Male","email":"gclynter9@samsung.com","job_title":"Web Developer IV"}, {"first_name":"Tonye","last_name":"Trevino","gender":"Female","email":"ttrevinoa@pinterest.com","job_title":"Chief Design Engineer"}, {"first_name":"Glennie","last_name":"Ottawell","gender":"Female","email":"gottawellb@dedecms.com","job_title":"Programmer Analyst II"}, {"first_name":"Rhodie","last_name":"De Giovanni","gender":"Male","email":"rdegiovannic@tripod.com","job_title":"Dental Hygienist"}, {"first_name":"Blithe","last_name":"Bassam","gender":"Male","email":"bbassamd@omniture.com","job_title":"Account Executive"}, {"first_name":"Zelig","last_name":"Woolen","gender":"Female","email":"zwoolene@arizona.edu","job_title":"Account Executive"}, {"first_name":"Maximilien","last_name":"Purvis","gender":"Female","email":"mpurvisf@tripadvisor.com","job_title":"Teacher"}, {"first_name":"Jerrylee","last_name":"Graffham","gender":"Male","email":"jgraffhamg@scribd.com","job_title":"Information Systems Manager"}, {"first_name":"Ernest","last_name":"Eaglesham","gender":"Male","email":"eeagleshamh@hatena.ne.jp","job_title":"Software Engineer I"}, {"first_name":"Robinson","last_name":"Parmiter","gender":"Female","email":"rparmiteri@zimbio.com","job_title":"Junior Executive"}, {"first_name":"Hasty","last_name":"MacTeague","gender":"Female","email":"hmacteaguej@techcrunch.com","job_title":"Recruiter"}, {"first_name":"Cam","last_name":"Scrogges","gender":"Female","email":"cscroggesk@flavors.me","job_title":"Nurse"}, {"first_name":"Dallas","last_name":"Joseph","gender":"Male","email":"djosephl@nature.com","job_title":"Structural Engineer"}, {"first_name":"Morie","last_name":"Alkins","gender":"Female","email":"malkinsm@mac.com","job_title":"Sales Representative"}, {"first_name":"Kesley","last_name":"Morland","gender":"Female","email":"kmorlandn@upenn.edu","job_title":"Web Designer II"}, {"first_name":"Norean","last_name":"Geraudel","gender":"Male","email":"ngeraudelo@csmonitor.com","job_title":"Data Coordiator"}]`;

	export default {
		data() {
			return {
				sort: {
					key: 'first_name',
					order: 'ascending',
					currentFilter: "None",
				},
				content:{
					array: JSON.parse(employees),
					categories: [{string: "First Name", key: "first_name"}, {string: "Last Name", key: "last_name"} , {string: "Gender", key: "gender"}, {string: "Email", key: "email"}, {string: "Job Title", key: "job_title"}],
				},
			};
		},

		created() {
			const query = this.$route.query;

			if (query.sort) {
				this.sort.key = query.sort;
			}

			if (query.order) {
				this.sort.order = query.order;
			}
		},

		computed: {
			alphabeticalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'ascending' ? 1 : -1;

				function compareFunction(a, b) {					
					if (a[key] > b[key]) {
						return 1;
					} else if (a[key] < b[key]) {
						return -1;
					} else {
						return 0
					}
				}

				return this.content.array.sort((a, b) => compareFunction(a, b) * orderValue);
			},

			naturalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'ascending' ? 1 : -1;

				function compareFunction(a, b) {
					a = a[key].toString();
					b = b[key].toString();

					return a.localeCompare(b, undefined, { numeric: true });
				}

				return this.content.array.sort((a, b) => compareFunction(a, b) * orderValue);
			},
		},

		methods: {
			sortBy(key, filterName) {
				this.sort.currentFilter = filterName
				this.sort.key = key;
				this.$router.push({ query: { ...this.$route.query, sort: this.sort.key } })
			},

			toggleSortOrder() {
				this.sort.order = this.sort.order === 'ascending' ? 'descending' : 'ascending';
				this.$router.push({ query: { ...this.$route.query, order: this.sort.order } })
			},
		},
	};
</script>


<style>
	.mainContainer {
		display: flex;
		padding: 2%;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
	}

	.tableContainer{
		display: flex;
		width: 90%;
		height: 100%;
		justify-content: center;
		padding: 0 2% 0 0;
	}

	.tableContainer__employeeTable {
		width: 100%;
		border-radius: 10px;
		text-align: center;
		border-spacing: 0;
		border-collapse: separate;
		
	}

	.tableContainer__employeeTable__head{
		height: 50px;
		width: 100%;
		background: #81b29a;
		color: white;
		border-radius: 10px;
	}

	.employeeTable__body__row {
		height: 40px;
		background: #f4f1de;
	}

	.tableContainer__employeeTable__body tr:nth-child(odd) {
		background: #f2cc8f;
	}

	.employeeTable__head__item:first-child {
		border-radius: 10px 0 0 0;
	}

	.employeeTable__head__item:last-child {
		border-radius: 0 10px 0  0;
	}

	.tableContainer__employeeTable__body tr:last-child td:last-child {
		border-radius: 0 0 10px 0;
	}

	.tableContainer__employeeTable__body tr:last-child td:first-child {
		border-radius: 0 0 0 10px;
	}

	.controlPanel {
		width: 10%;
	}

	.dropdown {
		font-size: 14px;
	}
	
	.dropdown__list{
		display: flex;
		flex-direction: column;
		width: 100%;
		list-style: none;
		border-radius: 10px;
		background: #f4f1de;
	}

	.dropdown__list__item {
		width: 100%;
		height: 100%;
		text-align: center;
		cursor: pointer;
	}

	.dropdown__list__item a{
		width: 100%;
		height: 100%;
		display: block;
		user-select: none;
		padding: 0.5rem;
	}
	.dropdown__list__item:hover{
		background: #81b29a;
		border-radius: 10px;
	}
</style>