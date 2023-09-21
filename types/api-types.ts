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
	thumbnail: string;
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
	response: Response;
}

export interface Response {
	status: string;
	userTier: string;
	total: number;
	content: Content;
}

export interface Content {
	id: string;
	type: string;
	sectionId: string;
	sectionName: string;
	webPublicationDate: Date;
	webTitle: string;
	webUrl: string;
	apiUrl: string;
	blocks: Blocks;
	isHosted: boolean;
	pillarId: string;
	pillarName: string;
}

export interface Blocks {
	main: Main;
	body: Body[];
	totalBodyBlocks: number;
}

export interface Body {
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
	assets: Asset[];
	textTypeData?: TextTypeData;
	imageTypeData?: ImageTypeData;
	pullquoteTypeData?: PullquoteTypeData;
}

export interface Asset {
	type: Type;
	mimeType: MIMEType;
	file: string;
	typeData: TypeData;
}

export enum MIMEType {
	ImageJPEG = 'image/jpeg',
}

export enum Type {
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

export interface PullquoteTypeData {
	html: string;
	attribution: string;
	role: string;
}

export interface TextTypeData {
	html: string;
}

export interface Main {
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
	type: Type;
	assets: Asset[];
	imageTypeData: ImageTypeData;
}
