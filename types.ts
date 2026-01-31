
export interface JawiResult {
  rumi: string;
  jawi: string;
  explanation?: string;
}

export enum CategoryType {
  SUKATAN = 'SUKATAN',
  BUKU_TEKS = 'BUKU_TEKS',
  JAWI = 'JAWI',
  SUMBER = 'SUMBER',
  PENGENALAN = 'PENGENALAN'
}

export interface NavItem {
  id: CategoryType;
  title: string;
  description: string;
  icon: string;
  color: string;
}
