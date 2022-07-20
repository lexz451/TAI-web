/* eslint-disable @typescript-eslint/no-unused-vars */

/*=============================================
=                  Forms                      =
=============================================*/

type ContactMessage = {
	name: string;
	email: string;
	message: string;
};

/*=============================================
=               Collections                   =
=============================================*/

type FAQ = {
	uid: string;
	question: string;
	response: string;
};

type Role = {
	name: string;
	// Base64 o URL
	icon: string;
	summary: string;
	comunity_participation_score: number;
	decision_power_shared_score: number;
	description: string;
	links: [
		{
			type: 'video' | 'podcast' | 'pdf';
			href: string;
		}
	];
};

type CaseStudy = {
	name: string;
	image: string;
	contact_url: string; // ???
	details: string;
	links: [
		{
			type: 'video' | 'pdf';
			href: string;
		}
	];
};

// Permite buscar y filtrar

type Resource = {
	title: string;
	image: string;
	summary: string;
	url: string; // ???
};

type ResorceFilters = {
	type: 'text' | 'video';
	publication_date: Date;
	author: string;
	sort_by: 'relevance' | 'latest' | 'oldest';
	search: string;
};

// ---------------------------

/*=============================================
=                Single Types                 =
=============================================*/

type ContactInfo = {
	description: string;
	contact_email: string;
	built_by: [{ image: string; href: string }];
};

export {};
