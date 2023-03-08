export interface Response {
  data: DataState[];
  source: Source[];
}

export interface DataState {
  "ID State": string;
  State: string;
  "ID Year": number;
  Year: string;
  "Property Value"?: number;
  Population?: number;
  "Household Income"?: number;
  "Slug State": string;
}

export interface Source {
  measures: string[];
  annotations: Annotations;
  name: string;
  substitutions: any[];
}

export interface Annotations {
  source_name: string;
  source_description: string;
  dataset_name: string;
  dataset_link: string;
  table_id: string;
  topic: string;
  subtopic: string;
}
