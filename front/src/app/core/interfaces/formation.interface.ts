export interface Formations {
    id?: number,
    statusId: number;
    typesId: number;
    title: string;
    institute: string;
    startDate: string;
    endDate: string;
    description: string;
    FormationStatus: {
        id: number;
        status: string;
    };
    FormationType: {
        id: number;
        type: string;
    };
}