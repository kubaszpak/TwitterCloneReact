// TODO add date, also probably would be best to exclude author and create a separate table for that purpose
export interface CardData {
    id: number;
    authorName: string;
    authorImage: string;
    title: string;
    content: string;
}

export interface CreateCardData {
    authorName: string;
    title: string;
    content: string;
}

export interface AddNewCard {
    handleAddNewCard: ((createCardData: CreateCardData) => void);
}