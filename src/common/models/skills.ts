export interface Skills {

    id?: number;
    name: string;
    category: SkillCategory;
    level: number;
    icon: string;
}

export type SkillCategory = 'FRONT' | 'BACK' | 'DEVOPS' | 'OTHER';
