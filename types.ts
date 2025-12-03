export interface PetitionData {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  caseType: string;
  amountPaid: string;
  experience: string;
  consent: boolean;
}

export interface ComplaintRequest {
  details: string;
}

export enum SectionId {
  HERO = 'hero',
  EVIDENCE = 'evidence',
  ROADMAP = 'roadmap',
  IMPACT = 'impact',
  GUIDE = 'guide',
  PETITION = 'petition',
  GENERATOR = 'generator',
  ATTORNEYS = 'attorneys',
  SHARE = 'share'
}

export type ViewType = 'home' | 'resources';