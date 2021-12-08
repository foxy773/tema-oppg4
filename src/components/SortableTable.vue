<template>
<!-- <div class="tableContainer">
	<input v-model="search" class="tableContainer__search" name="" id="" placeholder="Search for any of the keys above">

	<table class="tableContainer__table">
		<thead>
			<tr>
				<th v-repeat:="column: columns">
					<a href="#" @click="click: sortBy(column)" v-class="active:sortKey == column">
						{{ column | capitalize }}
					</a>

				</th>
			</tr>
		</thead>
	</table>
</div>
	 -->
	 <div></div>
</template>

<script>
	/*Data Array */
const employees=`[{"first_name":"Thomasa","last_name":"Doberer","gender":"Bigender","race":"Laotian","job_title":"Product Engineer"}, {"first_name":"Rene","last_name":"Manneville","gender":"Genderfluid","race":"Japanese","job_title":"Nuclear Power Engineer"}, {"first_name":"Elsy","last_name":"Silverston","gender":"Male","race":"Cherokee","job_title":"Paralegal"}, {"first_name":"Olympe","last_name":"Wheaton","gender":"Non-binary","race":"Pima","job_title":"Software Test Engineer II"}, {"first_name":"Annalise","last_name":"Wank","gender":"Bigender","race":"Lumbee","job_title":"Nurse"}, {"first_name":"Kaleena","last_name":"Jelly","gender":"Polygender","race":"Menominee","job_title":"Business Systems Development Analyst"}, {"first_name":"Ginelle","last_name":"Isworth","gender":"Bigender","race":"Eskimo","job_title":"Clinical Specialist"}, {"first_name":"Janene","last_name":"Webben","gender":"Agender","race":"Osage","job_title":"Financial Advisor"}, {"first_name":"Charisse","last_name":"Wennington","gender":"Female","race":"Tongan","job_title":"Administrative Assistant I"}, {"first_name":"Whitney","last_name":"Bollard","gender":"Genderqueer","race":"Aleut","job_title":"Associate Professor"}, {"first_name":"Tally","last_name":"Temperley","gender":"Genderqueer","race":"Vietnamese","job_title":"Quality Control Specialist"}, {"first_name":"Leeland","last_name":"Lemery","gender":"Male","race":"Native Hawaiian","job_title":"Office Assistant III"}, {"first_name":"Felice","last_name":"Tarte","gender":"Agender","race":"Pima","job_title":"Nuclear Power Engineer"}, {"first_name":"Joyann","last_name":"Nolleau","gender":"Agender","race":"Fijian","job_title":"Recruiter"}, {"first_name":"Dolley","last_name":"Conahy","gender":"Female","race":"Eskimo","job_title":"Actuary"}, {"first_name":"Becca","last_name":"Lesser","gender":"Bigender","race":"Bangladeshi","job_title":"Web Designer III"}, {"first_name":"Shayne","last_name":"Faye","gender":"Male","race":"Dominican (Dominican Republic)","job_title":"Senior Editor"}, {"first_name":"Tiff","last_name":"Klimschak","gender":"Agender","race":"Puerto Rican","job_title":"Electrical Engineer"}, {"first_name":"Blair","last_name":"Gilfoyle","gender":"Genderqueer","race":"Colville","job_title":"Senior Quality Engineer"}, {"first_name":"Leonora","last_name":"Ollerenshaw","gender":"Male","race":"Bolivian","job_title":"Assistant Media Planner"}, {"first_name":"Nikos","last_name":"Petrol","gender":"Agender","race":"Costa Rican","job_title":"Speech Pathologist"}, {"first_name":"Beret","last_name":"Hunnam","gender":"Male","race":"Osage","job_title":"Senior Sales Associate"}, {"first_name":"Maurice","last_name":"Exelby","gender":"Polygender","race":"Guamanian","job_title":"Analog Circuit Design manager"}, {"first_name":"Aldus","last_name":"Gimblet","gender":"Male","race":"Argentinian","job_title":"Senior Editor"}, {"first_name":"Elnar","last_name":"Gerrit","gender":"Polygender","race":"Cambodian","job_title":"VP Quality Control"}]`

export default {
  data() {
    return {
	  content: JSON.parse(mockData),
    };
  },

  computed: {
    
    },

  methods: {
    
	}
}
</script>


<style>

</style>