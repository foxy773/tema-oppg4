<template>
	<div class="mainContainer">
		<div class="mainContainer__controlpanel">
			<a>Sort: {{ sort.currentSort }} ({{ sort.order.toUpperCase() }})</a>
		<div class="mainContainer__dropdown">
			<ul class="dropdown__list">
				<li class="list__category" v-for="category in content.categories"><a @click="sortBy(`${category.key}`, category.string)">{{ category.string }}</a></li>
					<img @click="toggleSortOrder" src="./../../public/assets/sortableTable/down-arrow.svg" alt="" :class="`${sort.ascending ? 'flip-axis-y' : ''}`">
			</ul>
		</div>
		</div>
		<div class="mainContainer__tableContainer">
			<table class="tableContainer__employeeTable">
				<thead class="employeeTable__head">
					<tr>
						<th class="head__item" v-for="category in content.categories">{{ category.string }}</th>
					</tr>
				</thead>

				<tbody class="employeeTable__body">
					<tr class="body__row" v-for="row in alphabeticalSort">
						<td v-for="value in row">{{ value }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>

	const employees = `[{"first_name":"Dur","last_name":"Scarbarrow","gender":"Genderfluid","job_title":"Professor"}, {"first_name":"Sarajane","last_name":"Fice","gender":"Bigender","job_title":"Quality Engineer"}, {"first_name":"Gaspard","last_name":"Beels","gender":"Bigender","job_title":"Technical Writer"}, {"first_name":"Godard","last_name":"Jolland","gender":"Genderqueer","job_title":"Web Developer III"}, {"first_name":"Noach","last_name":"Crotty","gender":"Agender","job_title":"Assistant Manager"}, {"first_name":"Yard","last_name":"Silverman","gender":"Polygender","job_title":"Financial Analyst"}, {"first_name":"Rosalia","last_name":"Escala","gender":"Agender","job_title":"Environmental Tech"}, {"first_name":"Eddy","last_name":"Parish","gender":"Genderfluid","job_title":"Actuary"}, {"first_name":"Kaleb","last_name":"Shemmin","gender":"Male","job_title":"Senior Cost Accountant"}, {"first_name":"Gideon","last_name":"Cullity","gender":"Bigender","job_title":"Assistant Professor"}, {"first_name":"Skyler","last_name":"Gayther","gender":"Female","job_title":"Civil Engineer"}, {"first_name":"Jason","last_name":"Durbann","gender":"Agender","job_title":"Software Test Engineer I"}, {"first_name":"Ninetta","last_name":"Kippie","gender":"Non-binary","job_title":"Senior Sales Associate"}, {"first_name":"Alix","last_name":"Belton","gender":"Agender","job_title":"Help Desk Technician"}, {"first_name":"Luci","last_name":"Levee","gender":"Genderfluid","job_title":"Editor"}]`;

	export default {
		data() {
			return {
				sort: {
					key: "first_name",
					order: "ascending",
					currentSort: "None",
					ascending: true,
				},

				content:{
					array: JSON.parse(employees),
					categories: [{string: "First Name", key: "first_name"}, {string: "Last Name", key: "last_name"} , {string: "Gender", key: "gender"}, {string: "Job Title", key: "job_title"}],
				},
			};
		},

		// At the start when the website loads it takes variables from "sort" and "order" in the url and uses them to sort and order the table.
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

			// This function sorts everything alphabetical from A -> Z or Z -> A by going through every letter in every word and compares
			// by who are the alphabetical or numerical closest to A or 0. Eksample ABC > BAC.
			alphabeticalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === "ascending" ? 1 : -1; // Ordervalue is 1 if this.sort.order is ascending, if not Ordervalue is -1.

				function compareFunction(a, b) {
					if (a[key] > b[key]) {
						return 1;
					} else if (a[key] < b[key]) {
						return -1;
					} else {
						return 0
					}
				}
				return this.content.array.sort((a, b) => compareFunction(a, b) * orderValue); // Sorts through content.array with the compareFunction and multiplies is with orderValue for ascending or decending the order.
			},
		},

		methods: {

			// Takes in key and filterName from categories array and pushes them to the url, example "/sortable-table?sort=last_name"
			sortBy(key, filterName) {
				this.sort.currentSort = filterName
				this.sort.key = key;
				this.$router.push({ query: { ...this.$route.query, sort: this.sort.key } })
			},
			// Switches between ascending and descending when function is called (in this case the arrow) and pushes the change to the url, example "/sortable-table?order=descending"
			toggleSortOrder() {
				this.sort.order = this.sort.order === "ascending" ? "descending" : "ascending";
				this.sort.ascending = this.sort.ascending === false ? true : false;
				this.$router.push({ query: { ...this.$route.query, order: this.sort.order } })
			},
		},
	};
</script>


<style>
	.mainContainer {
		display: flex;
		flex-direction: column;
		padding: 10px;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		font-size: 30px;
	}

	.mainContainer__tableContainer {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		overflow-x: scroll;
	}

	.tableContainer__employeeTable {
		width: 100%;
		border-radius: 10px;
		text-align: center;
		border-spacing: 0;
		border-collapse: separate;
	}

	.employeeTable__head {
		height: 50px;
		width: 100%;
		background: #81b29a;
		color: white;
		border-radius: 10px;
		font-size: 30px;
	}

	.body__row {
		height: 40px;
		background: #f4f1de;
		font-size: 20px;
	}

	.employeeTable__body tr:nth-child(odd) {
		background: #f2cc8f;
	}

	.head__item:first-child {
		border-radius: 10px 0 0 0;
	}

	.head__item:last-child {
		border-radius: 0 10px 0  0;
	}

	.employeeTable__body tr:last-child td:last-child {
		border-radius: 0 0 10px 0;
	}

	.employeeTable__body tr:last-child td:first-child {
		border-radius: 0 0 0 10px;
	}

	.mainContainer__controlPanel {
		width: 100%;
		padding: 0 0 20px 0;
	}
	
	.dropdown__list {
		display: flex;
		align-items: center;
		width: 100%;
		list-style: none;
		border-radius: 10px;
		background: #f4f1de;
	}

	.dropdown__list img {
		padding: 10px;
		height: 40px;
		width: auto;
	}

	.list__category {
		display: flex;
		align-items: center;
		width: 100%;
		height: auto;
		text-align: center;
		cursor: pointer;
	}

	.list__category a {
		width: 100%;
		height: 100%;
		display: block;
		user-select: none;
		padding: 0.5rem;
	}
	.list__category:hover {
		background: #81b29a;
		border-radius: 10px;
	}

	/* Utility */

	.flip-axis-y {
		transform: scaleY(-1);
	}
	

  /* Media Query */

  /* ----------- Small phone ----------- */
  @media only screen and (min-device-width: 300px) and (max-device-width: 425px) {
   .mainContainer {
   	font-size: 14px;
   }

	.employeeTable__head {
      font-size: 14px;
   }

   .body__row {
      font-size: 12px;
   }
}

  /* ----------- Big phone ----------- */
  @media only screen and (min-device-width: 425px) and (max-device-width: 800px) {
   .mainContainer {
   	font-size: 16px;
   }

	.employeeTable__head {
      font-size: 16px;
   }

   .body__row {
      font-size: 14px;
   }
  }

  /* ----------- Tablet ----------- */
	@media only screen and (min-device-width: 800px) and (max-device-width: 1400px) {
   .mainContainer {
   	font-size: 24px;
   }

	.employeeTable__head {
      font-size: 24px;
   }

   .body__row {
      font-size: 20px;
   }
  }
</style>