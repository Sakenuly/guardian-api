export interface IApiData {
	response: INewsResponse;
}

export interface INewsResponse {
	status: string;
	userTier: string;
	total: number;
	startIndex: number;
	pageSize: number;
	currentPage: number;
	pages: number;
	orderBy: string;
	results: IResult[];
}

export interface IResult {
	id: string;
	type: Type;
	fields: IFields;
	sectionId: string;
	sectionName: string;
	webPublicationDate: Date;
	webTitle: string;
	webUrl: string;
	apiUrl: string;
	isHosted: boolean;
	pillarId: PillarID;
	pillarName: PillarName;
}
export interface IFields {
	headline: string;
	standfirst: string;
	trailText: string;
	byline: string;
	main: string;
	body: string;
	wordcount: string;
	firstPublicationDate: Date;
	isInappropriateForSponsorship: string;
	isPremoderated: string;
	lastModified: Date;
	liveBloggingNow: string;
	productionOffice: string;
	publication: string;
	shortUrl: string;
	shouldHideAdverts: string;
	showInRelatedContent: string;
	thumbnail: string;
	legallySensitive: string;
	lang: string;
	isLive: string;
	bodyText: string;
	charCount: string;
	shouldHideReaderRevenue: string;
	showAffiliateLinks: string;
	bylineHtml: string;
	showTableOfContents: string;
}

export enum PillarID {
	PillarArts = 'pillar/arts',
	PillarNews = 'pillar/news',
	PillarSport = 'pillar/sport',
}

export enum PillarName {
	Arts = 'Arts',
	News = 'News',
	Sport = 'Sport',
}

export enum Type {
	Article = 'article',
	Liveblog = 'liveblog',
}

export interface INewsItem {
	response: IResponse;
}

export interface IResponse {
	status: string;
	userTier: string;
	total: number;
	content: IContent;
}

export interface IContent {
	id: string;
	type: string;
	sectionId: string;
	sectionName: string;
	webPublicationDate: Date;
	webTitle: string;
	webUrl: string;
	apiUrl: string;
	blocks: IBlocks;
	isHosted: boolean;
	pillarId: string;
	pillarName: string;
	fields: IFields;
}

export interface IBlocks {
	main: IMain;
	body: IBody[];
	totalBodyBlocks: number;
}

export interface IBody {
	id: string;
	bodyHtml: string;
	bodyTextSummary: string;
	attributes: Attributes;
	published: boolean;
	createdDate: Date;
	lastModifiedDate: Date;
	contributors: any[];
	elements: BodyElement[];
}

export interface Attributes {}

export interface BodyElement {
	type: Type;
	assets: IAsset[];
	textTypeData?: TextTypeData;
	imageTypeData?: ImageTypeData;
	pullquoteTypeData?: IPullquoteTypeData;
}

export interface IAsset {
	type: Type;
	mimeType: MIMEType;
	file: string;
	typeData: TypeData;
}

export enum MIMEType {
	ImageJPEG = 'image/jpeg',
}

export enum ItemType {
	Image = 'image',
	Pullquote = 'pullquote',
	Text = 'text',
}

export interface TypeData {
	aspectRatio?: AspectRatio;
	width: number;
	height: number;
	isMaster?: boolean;
}

export enum AspectRatio {
	The23 = '2:3',
	The45 = '4:5',
	The53 = '5:3',
}

export interface ImageTypeData {
	displayCredit: boolean;
	credit: string;
	source: string;
	photographer?: string;
	alt: string;
	mediaId: string;
	mediaApiUri: string;
	imageType: string;
	role?: string;
	suppliersReference?: string;
	caption?: string;
}

export interface IPullquoteTypeData {
	html: string;
	attribution: string;
	role: string;
}

export interface TextTypeData {
	html: string;
}

export interface IMain {
	id: string;
	bodyHtml: string;
	bodyTextSummary: string;
	attributes: Attributes;
	published: boolean;
	createdDate: Date;
	lastModifiedDate: Date;
	contributors: any[];
	elements: MainElement[];
}

export interface MainElement {
	type: ItemType;
	assets: IAsset[];
	imageTypeData: ImageTypeData;
}
