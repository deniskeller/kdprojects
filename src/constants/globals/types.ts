export interface IValueForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company_name: string;
  country: string;
  message: string;
}


interface IParticipationConditions {
	[key: string]: string;
}


interface IPlans {
	quarter: number;
	year: number;
	description: string;
}

export interface IProject {
	id: number;
	image_logo?: string;
	project_name?: string;
	tagline?: string;
	amount_of_investment?: string;
	description?: string;
	round_ends?: string;
	tags?: string[];
	price?: string;
	investment_required?: string;
	participation_conditions?: IParticipationConditions;
	coordinates?: string;
	plans?: IPlans[];
}